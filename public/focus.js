(async () => {
    if (fin !== "undefined") {
        const window = await fin.Window.getCurrent();
        await window.setAsForeground();
        await window.focus();
    }
})();
