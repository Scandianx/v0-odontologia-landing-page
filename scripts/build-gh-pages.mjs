import { spawnSync } from "node:child_process"

const env = { ...process.env, GITHUB_PAGES: "true" }
const result = spawnSync("node", ["node_modules/next/dist/bin/next", "build"], {
  stdio: "inherit",
  env,
  shell: process.platform === "win32",
})

process.exit(result.status ?? 1)

