function getSetting() {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (t) => {
            chrome.scripting.executeScript(
                {
                    target: { tabId: t[0].id },
                    func: () => {
                        return pluginSetting;
                    },
                    world: "MAIN",
                },
                (r) => {
                    console.log(r[0].result);
                    resolve(r[0].result);
                }
            );
        });
    });
}

function setSetting(o) {
    chrome.storage.local.set(o);
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (t) => {
        chrome.scripting.executeScript({
            target: { tabId: t[0].id },
            func: (o) => {
                pluginSetting[Object.keys(o)[0]] = Object.values(o)[0];
                enableCode(Object.keys(o)[0].split("s")[0]);
            },
            args: [o],
            world: "MAIN",
        });
    });
}

document.querySelectorAll('input[type="range"]').forEach((e) => {
    e.addEventListener("input", () => {
        document.querySelector("#" + e.id + "n").value = parseFloat(e.value).toFixed(e.step.split(".")[1]?.length || 0);
        setSetting({ [e.id]: e.value });
    });
});

document.querySelectorAll('input[type="number"]').forEach((e) => {
    e.addEventListener("change", () => {
        if (e.value > e.max) e.value = e.max;
        if (e.value < e.min) e.value = e.min;
        e.value = parseFloat(e.value).toFixed(document.querySelector("#" + e.id.split("n")[0]).step.split(".")[1]?.length || 0);
        document.querySelector("#" + e.id.split("n")[0]).value = e.value;
        setSetting({ [e.id.split("n")[0]]: e.value });
    });
});

document.querySelectorAll('input[type="checkbox"]').forEach((e) => {
    e.addEventListener("click", () => {
        setSetting({ [e.id]: e.checked });
    });
});

document.querySelector("#op2s0n").addEventListener("click", async () => {
    const nowFontData = (await getSetting()).op2s2 || [];
    nowFontData.push(document.querySelector("#op2s0").value);
    setSetting({ op2s2: nowFontData });
    location.reload();
});
(async () => {
    const data = await getSetting();
    Object.entries(data).forEach((i) => {
        console.log(i);
        switch (typeof i[1]) {
            case "object":
                if (i[0] == "op2s2") {
                    i[1].forEach((v) => {
                        const cn = document.querySelector("#op2tem").content.cloneNode(true);
                        console.log(cn);
                        cn.querySelector(".fontName").innerText = v;
                        cn.querySelector(".fontName").style.fontFamily = v;
                        cn.querySelector(".deleteBtn").addEventListener("click", removeFont);
                        cn.querySelector(".deleteBtn").dataset.index = document.querySelectorAll(".fontName").length;
                        document.querySelector(".op2").appendChild(cn);
                    });
                }
                break;
            case "boolean":
                document.querySelector("#" + i[0]).checked = i[1];
                break;

            default:
                document.querySelector("#" + i[0]).value = i[1];
                document.querySelector("#" + i[0] + "n").value = i[1];
                break;
        }
        console.log(document.querySelector("#" + i[0]));
    });
})();

async function removeFont() {
    let nowFont = (await getSetting())["op2s2"];
    nowFont.splice(this.dataset.index, 1);
    setSetting({ op2s2: nowFont });
    location.reload();
}
