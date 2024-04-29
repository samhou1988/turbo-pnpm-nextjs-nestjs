import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config";

const config = {
  content: [...baseConfig.content, '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
} satisfies Config;

export default config;