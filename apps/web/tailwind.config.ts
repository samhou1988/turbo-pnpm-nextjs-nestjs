import baseConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config = {
  content: [...baseConfig.content, '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
} satisfies Config;

export default config;
