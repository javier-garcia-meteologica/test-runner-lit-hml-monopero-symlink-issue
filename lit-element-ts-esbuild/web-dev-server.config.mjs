import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  preserveSymlinks: true,
  plugins: [esbuildPlugin({ ts: true })],
};
