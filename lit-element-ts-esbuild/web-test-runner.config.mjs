import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  preserveSymlinks: true,
  nodeResolve: { dedupe: ['lit-html'] },
  plugins: [esbuildPlugin({ ts: true })],
};
