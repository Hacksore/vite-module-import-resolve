export function Plugin() {
    return {
        name: "lol-plugin",
        async configureServer(server) {
            const { config: { build }, } = server;
            const { lolEntry = "src/main.ts" } = build.rollupOptions.input || {};
            if (server.httpServer) {
                server.httpServer.once("listening", async () => {
                    const addr = server.httpServer.address();
                    if (addr &&
                        typeof addr === "object" &&
                        "address" in addr) {
                        console.log(addr.family);
                        const lol = await (await fetch(`http://${addr.address}:${addr.port}/${lolEntry}`)).text();
                        const { moduleId } = eval(lol);
                        console.log({ OMG: moduleId });
                    }
                });
            }
            // cwd
            // read file in cwd+path
        },
    };
}
