if (!EntryStatic.isProxy) {
    var localFont = [];
}
(() => {
    if (JSON.parse(document.querySelector("#extData").innerText).op1s2) {
        localFont = EntryStatic.fonts.filter((i) => !i?.isLocal);
        Entry.toast.success("NICE 확장 프로그램", "로컬 폰트 추가 플러그인 로딩 됨", false);
        JSON.parse(JSON.parse(document.querySelector("#extData").innerText).op2s2 || "[]").forEach((i) => {
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
