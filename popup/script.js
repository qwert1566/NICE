function restart(k, v, i) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (t) => {
        chrome.scripting.executeScript({
            target: { tabId: t[0].id },
            func: (k, v, i, c) => {
                console.log(k, v, i, c);
                if (/^https:\/\/playentry\.org\/ws.*$/.test(location.href)) {
                    const dataJSON = JSON.parse(document.querySelector("#extData").innerText);
                    dataJSON[k] = v;
                    document.querySelector("#extData").innerText = JSON.stringify(dataJSON);
                    document.querySelector(`#${i}`).remove();
                    const ele = document.createElement("script");
                    ele.src = `chrome-extension://${c}/function/${i}.js`;
                    ele.async = false;
                    ele.id = i;
                    document.body.appendChild(ele);
                }
            },
            args: [k, v, i, chrome.runtime.id],
            world: "MAIN",
        });
    });
}

function addFont(i, l, k) {
    const q = document.createElement("label");
    const w = document.createElement("span");
    w.classList.add("content");
    w.innerText = "폰트 제거";
    const r = document.createElement("span");
    r.classList.add("rightText");
    r.innerText = i;
    r.style.fontFamily = `"${i}"`;
    const e = document.createElement("div");
    const t = document.createElement("input");
    t.type = "button";
    t.classList.add("delete");
    t.value = "제거";
    t.addEventListener("click", () => {
        let data = JSON.parse(k || "[]");
        data.splice(l, 1);
        q.remove();
        chrome.storage.local.set({ op2s2: JSON.stringify(data) });
        restart("op2s2", JSON.stringify(data), "localFont");
        location.reload();
    });
    e.appendChild(r);
    e.appendChild(t);
    q.appendChild(w);
    q.appendChild(e);
    document.querySelector("#font").appendChild(q);
}

// 이건 그냥 그런 코드
document.querySelectorAll(".checkbox").forEach((e) => {
    e.parentNode.querySelector("input").click();
});

document.querySelectorAll('[type="range"]').forEach((e) => {
    e.addEventListener("input", () => (e.parentNode.querySelector('[type="number"]').value = parseFloat(e.value).toFixed(2)));
});

document.querySelectorAll('[type="number"]').forEach((e) => {
    e.addEventListener("change", () => {
        if (e.value < e.min) e.value = e.min;
        if (e.value > e.max) e.value = e.max;
        e.value = parseFloat(e.value).toFixed(2);
        e.parentNode.querySelector('[type="range"]').value = e.value;
        e.parentNode.querySelector('[type="range"]').dispatchEvent(new Event("input"));
        e.parentNode.querySelector('[type="range"]').dispatchEvent(new Event("change"));
    });
});

// 값 바뀌면 저장하는 코드
document.querySelectorAll("input").forEach((ele) => {
    if (ele.id == "op2s2") {
        ele.addEventListener("click", function () {
            chrome.storage.local.get(["op2s2"], (r) => {
                let data = JSON.parse(r.op2s2 || "[]");
                data.push(this.parentNode.querySelector('[type="text"]').value);
                chrome.storage.local.set({ op2s2: JSON.stringify(data) });
                restart("op2s2", JSON.stringify(data), "localFont");
                location.reload();
            });
        });
        return;
    }
    if (!["number", "buutton"].includes(ele.type)) {
        let setting = ele.type == "checkbox" ? "checked" : "value";
        ele.addEventListener("change", function () {
            chrome.storage.local.set({ [ele.id]: ele[setting] });
            restart(ele.id, ele[setting], ele.dataset.filename);
        });
    }
});

// 값 가져와서 화면에 뿌리는 코드
chrome.storage.local.get(["op1s1", "op2s1", "op1s2", "op2s2", "op1s3"], (r) => {
    document.querySelector("#op1s1").checked = r.op1s1 || false;
    document.querySelector("#op2s1").value = r.op2s1 || 1;
    document.querySelector("#op2s1").dispatchEvent(new Event("input"));
    document.querySelector("#op1s2").checked = r.op1s2 || false;
    JSON.parse(r.op2s2 || "[]").forEach((i, l) => addFont(i, l, r.op2s2));
    document.querySelector("#op1s3").checked = r.op1s3 || false;
});
