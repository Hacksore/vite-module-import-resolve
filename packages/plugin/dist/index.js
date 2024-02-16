export function Plugin() {
    return {
        name: "lol-plugin",
        configResolved({ root }) {
            console.log({ root });
        },
        configureServer(_server) {
            // HOW DO I DO THIS?!
            // const { moduleId } = await import(lolEntry);
            // cwd
            // read file in cwd+path 
        },
    };
}
