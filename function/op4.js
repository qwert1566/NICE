if (!Entry.block.dialog.params.isEdited) {
    var defaultDropdownMenu2 = structuredClone(Entry.block.dialog.params.find((i) => i.options).options); // 살면서 이런 함수 처음 써봄
}

(() => {
    Entry.block.dialog.params.isEdited = true;
    Entry.block.dialog.params.find((i) => i.options).options = [...defaultDropdownMenu2];
    const DropdownMenu = Entry.block.dialog.params.find((i) => i.options).options;
    if (pluginSetting.op4s1) {
        DropdownMenu.push(["소리치기 (find by AFFO)", "yell"]);
        console.log(DropdownMenu);
    }
})();
