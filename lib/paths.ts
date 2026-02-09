export function withBasePath(pathname: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`

  if (!basePath) return normalizedPath
  return `${basePath}${normalizedPath}`
}

