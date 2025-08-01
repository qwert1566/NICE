// window.addEventListener("load", () => {
//     Entry.addEventListener("loadComplete", sdsdsdsdsd);
// }); 이 시킨 왜 작동이 안되는거임 world MAIN 했었음ㅇㅇ

function getScript(url) {
    const ele = document.createElement("script");
    ele.src = `chrome-extension://${chrome.runtime.id}/function/${url}.js`;
    ele.async = false;
    ele.id = url;
    document.body.appendChild(ele);
}

function waitLoading() {
    document.querySelector(".entry") ? applyCode() : setTimeout(waitLoading, 1000);
}

function applyCode() {
    chrome.storage.local.get(["op1s1", "op2s1", "op1s2", "op2s2", "op1s3", "op1s4"], async (r) => {
        const data = document.createElement("div");
        data.style.display = "none";
        data.id = "extData";
        data.innerText = JSON.stringify(r);
        document.body.appendChild(data);
        ["smallHandle", "localFont", "hiddenStop", "mathExtension"].forEach((i) => getScript(i));
    });
}

window.addEventListener("load", waitLoading);
