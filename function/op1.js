(() => {
    let size = 1;
    let alpha = 100;
    if (pluginSetting.op1s1 && typeof pluginSetting.op1s2 == "string" && typeof pluginSetting.op1s3 == "string") {
        size = parseFloat(pluginSetting.op1s2);
        alpha = parseFloat(pluginSetting.op1s3);
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
