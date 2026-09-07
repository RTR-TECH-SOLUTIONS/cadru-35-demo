/**
 * Prefixează căile interne cu `base` din astro.config (necesar pe GitHub Pages,
 * unde site-ul stă la /<repo>/). În producție, pe domeniul propriu, base = "/"
 * și funcția rămâne corectă fără nicio modificare în pagini.
 *
 * Adaugă și slash final pe rutele de pagină, ca serverul static să nu mai facă
 * un redirect 301 la fiecare navigare.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** are extensie de fișier (.svg, .mp4, ...) => nu primește slash final */
const isFile = (path: string) => /\.[a-z0-9]{2,5}$/i.test(path.split(/[?#]/)[0]);

export function url(path: string): string {
  if (!path.startsWith("/")) return path;
  const clean = path.replace(/\/+$/, "");
  const suffix = clean === "" || isFile(clean) ? "" : "/";
  return `${BASE}${clean}${suffix}` || "/";
}

/** Calea curentă fără prefixul base, normalizată fără slash final. */
export function stripBase(pathname: string): string {
  const p = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return p.replace(/\/$/, "") || "/";
}
