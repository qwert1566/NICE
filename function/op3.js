(() => {
    if (pluginSetting.op3s1) {
        q = document.createElement("link");
        q.rel = "stylesheet";
        q.id = "op3s1";
        q.href =
            "data:text/css;base64," +
            btoa(`
            #entryCurtain { display: none; }
        `);
        document.head.appendChild(q);
    } else {
        if (document.querySelector("#op3s1")) document.querySelector("#op3s1").remove();
    }
})();
