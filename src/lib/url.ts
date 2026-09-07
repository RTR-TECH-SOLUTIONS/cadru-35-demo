/**
 * Prefixează căile interne cu `base` din astro.config (necesar pe GitHub Pages,
 * unde site-ul stă la /<repo>/). În producție, pe domeniul propriu, base = "/"
 * și funcția devine identitate.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE}${path}` || "/";
}

/** Calea curentă fără prefixul base, normalizată fără slash final. */
export function stripBase(pathname: string): string {
  const p = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return p.replace(/\/$/, "") || "/";
}
