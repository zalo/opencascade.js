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

    print("Flattening complete!")

if __name__ == "__main__":
    flatten()
