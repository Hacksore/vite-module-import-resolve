import type { PluginOption } from "vite";

export function Plugin(): PluginOption {
  return {
    name: "lol-plugin",
    configureServer(server) {},
  };
}
