(() => {
    let size = 1;
    if (JSON.parse(document.querySelector("#extData").innerText).op1s1) {
        Entry.toast.success("NICE 확장 프로그램", "오브젝트 크기 조절 핸들 변경 플러그인 로딩 됨", false);
        size = JSON.parse(document.querySelector("#extData").innerText).op2s1;
    }
    Entry.stage.handle.knobs.forEach((i) => (i.scaleX = i.scaleY = 1.52 * size));
    ((i) => (i.scaleX = i.scaleY = 0.4 * size))(Entry.stage.handle.rotateKnob);
    ((i) => (i.scaleX = i.scaleY = 1.52 * size))(Entry.stage.handle.centerPoint);
    Entry.stage.updateHandle();
})();
