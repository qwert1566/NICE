let pluginSetting = {};
const intervalData = setInterval(() => {
    console.log("searching...");
    if (document.querySelector("#pluginData")) {
        pluginSetting = JSON.parse(document.querySelector("#pluginData").innerText);
        document.querySelector("#pluginData").remove();
        clearInterval(intervalData);
    }
}, 200);

function enableCode(url) {
    if (url) {
        const n = document.createElement("script");
        n.src = `chrome-extension://${document.querySelector("#runtimeId").innerText}/function/${url}.js`;
        n.async = false;
        n.id = url;
        if (document.querySelector("#" + url)) document.querySelector("#" + url).remove();
        document.body.appendChild(n);
        Entry.toast.success("NICE 확장 프로그램", "플러그인 상태 업데이트 됨", false);
    }
}

const intervalEntry = setInterval(async () => {
    console.log("searching...");
    if (document.querySelector(".entry")) {
        clearInterval(intervalEntry);
        ["op1", "op2", "op3", "op4"].forEach((i) => enableCode(i)); // 알빠노 그냥 플러그인 다 켜두기 모먼트
    }
}, 500);
