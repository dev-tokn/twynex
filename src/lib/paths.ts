export function withBasePath(href: string | undefined) {
  if (!href) {
    return href;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const isInternalPath = href.startsWith("/") && !href.startsWith("//");

  if (!basePath || !isInternalPath || href.startsWith(basePath)) {
    return href;
  }

  return href === "/" ? basePath || "/" : `${basePath}${href}`;
}
