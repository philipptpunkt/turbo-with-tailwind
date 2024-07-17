import type { Config } from "tailwindcss"
import sharedConfig from "@turbo-with-tailwind/tailwind-config"

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "ds-",
  presets: [sharedConfig],
}

export default config
