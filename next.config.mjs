const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
