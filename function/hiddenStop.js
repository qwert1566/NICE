(() => {
    if (JSON.parse(document.querySelector("#extData").innerText).op1s3) {
        Entry.toast.success("NICE 확장 프로그램", "작품 실행 중 코드 수정 플러그인 로딩 됨", false);
        q = document.createElement("link");
        // <link rel="stylesheet" href="style.css">
        q.rel = "stylesheet";
        q.id = "op1s3";
        q.href =
            "data:text/css;base64," +
            btoa(`
            #entryCurtain { display: none; }
        `);
        document.head.appendChild(q);
    } else {
        if (document.querySelector("#op1s3")) document.querySelector("#op1s3").remove();
    }
})();
