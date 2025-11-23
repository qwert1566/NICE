const runtimeId = document.createElement("div");
runtimeId.innerText = chrome.runtime.id;
runtimeId.id = "runtimeId";
console.log(runtimeId);
document.head.appendChild(runtimeId);

chrome.storage.local.get(null, (r) => {
    const data = document.createElement("div");
    data.innerText = JSON.stringify(r);
    data.id = "pluginData";
    document.head.appendChild(data);
});
