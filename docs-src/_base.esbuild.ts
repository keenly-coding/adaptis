function pageReload(to_base_url: string) {
    const __file_url = new URL(import.meta.url);
    const __event_source = new URL(`${to_base_url}esbuild`, __file_url.href)

    if (['0.0.0.0', '127.0.0.1', 'localhost'].includes(__file_url.hostname)) {
        new EventSource(__event_source).addEventListener(
            'change',
            () => location.reload());
    };
};

export { pageReload };