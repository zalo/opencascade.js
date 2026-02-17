#!/usr/bin/python3
"""
Flatten OCCT 8.0+ directory structure to match the flat layout expected by
opencascade.js build scripts.

OCCT 8.0 structure:  src/Module/Toolkit/Package/File.hxx
Old (7.x) structure: src/Package/File.hxx

This script creates symlinks from the old flat paths to the new nested paths,
and generates PACKAGES files from PACKAGES.cmake for each toolkit.
"""

import os
import re
import sys

OCCT_SRC = "/occt/src"

def parse_cmake_list(filepath):
    """Parse a CMake set() list and return the list items."""
    with open(filepath, 'r') as f:
        content = f.read()
    # Match set(VAR_NAME item1 item2 ...) pattern
    match = re.search(r'set\(\s*\w+\s*(.*?)\)', content, re.DOTALL)
    if not match:
        return []
    items_str = match.group(1)
    return [item.strip() for item in items_str.split() if item.strip()]

def flatten():
    """Create flat symlinks for OCCT 8.0+ directory structure."""

    # Check if this is an OCCT 8.0+ tree (has MODULES.cmake)
    modules_cmake = os.path.join(OCCT_SRC, "MODULES.cmake")
    if not os.path.exists(modules_cmake):
        print("No MODULES.cmake found - assuming pre-8.0 flat structure, skipping flatten")
        return

    print("Detected OCCT 8.0+ directory structure, flattening...")

    modules = parse_cmake_list(modules_cmake)
    print(f"Found modules: {modules}")

    for module in modules:
        module_dir = os.path.join(OCCT_SRC, module)
        if not os.path.isdir(module_dir):
            print(f"  Warning: module directory {module_dir} not found, skipping")
            continue

        # Find all TOOLKITS.cmake in module
        toolkits_cmake = os.path.join(module_dir, "TOOLKITS.cmake")
        if not os.path.exists(toolkits_cmake):
            print(f"  Warning: no TOOLKITS.cmake in {module}, skipping")
            continue

        toolkits = parse_cmake_list(toolkits_cmake)

        for toolkit in toolkits:
            toolkit_dir = os.path.join(module_dir, toolkit)
            if not os.path.isdir(toolkit_dir):
                print(f"  Warning: toolkit directory {toolkit_dir} not found, skipping")
                continue

            # Parse PACKAGES.cmake to get package list
            packages_cmake = os.path.join(toolkit_dir, "PACKAGES.cmake")
            if not os.path.exists(packages_cmake):
                print(f"  Warning: no PACKAGES.cmake in {toolkit}, skipping")
                continue

            packages = parse_cmake_list(packages_cmake)

            # Filter out relative path entries (cross-toolkit references)
            local_packages = [p for p in packages if '/' not in p and '..' not in p]

            # Generate old-style PACKAGES file for this toolkit
            packages_file = os.path.join(toolkit_dir, "PACKAGES")
            with open(packages_file, 'w') as f:
                for pkg in local_packages:
                    f.write(pkg + "\n")
            print(f"  Generated PACKAGES for {toolkit}: {len(local_packages)} packages"
                  + (f" (skipped {len(packages) - len(local_packages)} cross-toolkit refs)" if len(packages) != len(local_packages) else ""))

            # Create flat symlinks for each package
            for pkg in packages:
                # Skip relative path entries (e.g., "../TKOpenGl/OpenGl" in TKOpenGles)
                if '/' in pkg or '..' in pkg:
                    print(f"    Skipping relative path entry: {pkg}")
                    continue

                pkg_src = os.path.join(toolkit_dir, pkg)
                pkg_dst = os.path.join(OCCT_SRC, pkg)

                if not os.path.isdir(pkg_src):
                    print(f"    Warning: package directory {pkg_src} not found, skipping")
                    continue

                if os.path.exists(pkg_dst) or os.path.islink(pkg_dst):
                    # Already exists (could be from another toolkit or a real directory)
                    continue

                try:
                    os.symlink(pkg_src, pkg_dst)
                except OSError as e:
                    print(f"    Warning: could not create symlink {pkg_dst} -> {pkg_src}: {e}")

    # Generate Standard_Version.hxx (normally created by CMake configure)
    generate_version_header()

    print("Flattening complete!")

def generate_version_header():
    """Generate Standard_Version.hxx from CMake version info."""
    version_cmake = "/occt/adm/cmake/version.cmake"
    if not os.path.exists(version_cmake):
        # Try alternative location for RC4+
        version_cmake = "/occt/version.cmake"
    if not os.path.exists(version_cmake):
        print("  Warning: version.cmake not found, creating stub Standard_Version.hxx")
        major, minor, maint, dev = 8, 0, 0, ""
    else:
        with open(version_cmake, 'r') as f:
            content = f.read()
        major = int(re.search(r'OCC_VERSION_MAJOR\s+(\d+)', content).group(1))
        minor = int(re.search(r'OCC_VERSION_MINOR\s+(\d+)', content).group(1))
        maint = int(re.search(r'OCC_VERSION_MAINTENANCE\s+(\d+)', content).group(1))
        dev_match = re.search(r'OCC_VERSION_DEVELOPMENT\s+"([^"]*)"', content)
        dev = dev_match.group(1) if dev_match else ""

    version_hex = (major << 16) | (minor << 8) | maint
    version_str = f"{major}.{minor}.{maint}"
    version_complete = version_str + (f".{dev}" if dev else "")

    header = f"""// Generated by flattenOcct8.py (replaces CMake-configured header)
#ifndef _Standard_Version_HeaderFile
#define _Standard_Version_HeaderFile

#define OCC_VERSION_MAJOR {major}
#define OCC_VERSION_MINOR {minor}
#define OCC_VERSION_MAINTENANCE {maint}
#define OCC_VERSION_DEVELOPMENT "{dev}"
#define OCC_VERSION_HEX 0x{version_hex:06x}
#define OCC_VERSION_STRING "{version_str}"
#define OCC_VERSION_COMPLETE "{version_complete}"
#define OCC_VERSION_STRING_EXT "{version_complete}"

#endif
"""
    # Find the Standard package directory
    standard_dir = os.path.join(OCCT_SRC, "Standard")
    if not os.path.isdir(standard_dir):
        # Try finding it in the new layout
        for dirpath, dirnames, filenames in os.walk(OCCT_SRC):
            if os.path.basename(dirpath) == "Standard" and "Standard_TypeDef.hxx" in filenames:
                standard_dir = dirpath
                break

    if os.path.isdir(standard_dir):
        header_path = os.path.join(standard_dir, "Standard_Version.hxx")
        with open(header_path, 'w') as f:
            f.write(header)
        print(f"  Generated Standard_Version.hxx ({version_complete})")
    else:
        print("  Warning: Could not find Standard package directory for Standard_Version.hxx")

if __name__ == "__main__":
    flatten()
