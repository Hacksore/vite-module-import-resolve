import type { PluginOption } from "vite";

export function Plugin(): PluginOption {
  return {
    name: "lol-plugin",
    configResolved({ root }){
      console.log({ root })
    },
    configureServer(_server) {
        // HOW DO I DO THIS?!
        // const { moduleId } = await import(lolEntry);
      
        // cwd
        // read file in cwd+path 
    },
  };
}
