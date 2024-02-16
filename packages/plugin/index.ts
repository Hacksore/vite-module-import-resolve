// @ts-ignore
import { join } from "path";
import type { PluginOption } from "vite";

export function Plugin(): PluginOption {
  return {
    name: "lol-plugin",
    async configureServer(server) {
      this.lo
      const {
        config: { build },
      } = server;
      const { lolEntry = "src/main.ts" } =
        (build.rollupOptions.input as any) || {};
      if (server.httpServer) {
        server.httpServer.once("listening", async () => {
          const addr = server.httpServer!.address();
          if (
            addr &&
            typeof addr === "object" &&
            "address" in addr
          ) {
            const lol = await (
              await fetch(`http://${addr.address}:${addr.port}/${lolEntry}`)
            ).text();
          }
        });
      }

      // cwd
      // read file in cwd+path
    },
  };
}
