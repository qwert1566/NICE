if (!EntryStatic.isProxy) {
    var localFont = [];
}
(() => {
    if (pluginSetting.op2s1) {
        localFont = EntryStatic.fonts.filter((i) => !i?.isLocal);
        (pluginSetting.op2s2 || []).forEach((i) => {
            localFont.unshift({
                name: "[Local] " + i,
                family: i,
                visible: true,
                style: {
                    backgroundColor: "#fbf0ffff",
                },
                isLocal: true,
            });
        });
        if (!EntryStatic.isProxy) {
            EntryStatic = new Proxy(EntryStatic, {
                get(t, p) {
                    if (p === "fonts") {
                        return localFont;
                    }
                    if (p === "isProxy") {
                        return true;
                    }
                    return t[p];
                },
            });
        }
    } else {
        localFont = EntryStatic.fonts.filter((i) => !i?.isLocal);
    }
})();
