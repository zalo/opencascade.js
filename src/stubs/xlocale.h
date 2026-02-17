// Stub xlocale.h for libclang parsing.
// Modern glibc removed xlocale.h (contents merged into locale.h).
// Emscripten's libc++ headers reference it (via locale_base_api.h when
// __EMSCRIPTEN__ is defined), causing a fatal parse error in libclang
// that breaks type resolution for occ::handle<> and std::istream.
//
// This stub mirrors emscripten's cache/sysroot/include/compat/xlocale.h
// to provide the _l locale function declarations that libc++ expects.
#ifndef _COMPAT_XLOCALE_H_
#define _COMPAT_XLOCALE_H_

#include <locale.h>

#ifdef __cplusplus
extern "C" {
#endif

long long strtoll_l(const char *start, char **end, int base, locale_t loc);
unsigned long long strtoull_l(const char *start, char **end, int base, locale_t loc);
long double strtold_l(const char *start, char **end, locale_t loc);

#ifdef __cplusplus
}
#endif

#endif /* _COMPAT_XLOCALE_H_ */
