(() => {
    let size = 1;
    let alpha = 100;
    if (JSON.parse(document.querySelector("#extData").innerText).op1s1) {
        Entry.toast.success("NICE 확장 프로그램", "오브젝트 크기 조절 핸들 변경 플러그인 로딩 됨", false);
        size = JSON.parse(document.querySelector("#extData").innerText).op2s1 || 1;
        alpha = JSON.parse(document.querySelector("#extData").innerText).op3s1 || 100;
    }
    Entry.stage.handle.knobs.forEach((i) => {
        i.scaleX = i.scaleY = 1.52 * size;
        i.alpha = alpha / 100;
    });
    ((i) => (i.scaleX = i.scaleY = 0.4 * size))(Entry.stage.handle.rotateKnob);
    ((i) => (i.scaleX = i.scaleY = 1.52 * size))(Entry.stage.handle.centerPoint);
    ((i) => (i.scaleX = i.scaleY = 1 * size))(Entry.stage.handle.directionArrow);
    [Entry.stage.handle.rotateKnob, Entry.stage.handle.centerPoint, Entry.stage.handle.directionArrow].forEach((i) => (i.alpha = alpha / 100));
    Entry.stage.updateHandle();
})();
