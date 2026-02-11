const isGithubPages = process.env.GITHUB_PAGES === "true"
const basePath = isGithubPages ? "" : ""

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
}

export default nextConfig
