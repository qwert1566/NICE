// 코드는 mathExtension 복사해서 뚜따한거라 변수 명 이상할 수도 있음

if (!Entry.block.change_string_case.params.isEdited) {
    var defaultCalcOperationDropdownMenu2 = structuredClone(Entry.block.change_string_case.params.find((i) => i.options).options); // 살면서 이런 함수 처음 써봄
}

(() => {
    Entry.block.change_string_case.params.isEdited = true;
    Entry.block.change_string_case.params.find((i) => i.options).options = [...defaultCalcOperationDropdownMenu2];
    const calcOperationDropdownMenu = Entry.block.change_string_case.params.find((i) => i.options).options;
    if (JSON.parse(document.querySelector("#extData").innerText).op1s5) {
        Entry.toast.success("NICE 확장 프로그램", "아스키코드 조회 코드 추가 플러그인 로딩 됨", false);
        calcOperationDropdownMenu.push(["첫 글자의 아스키 코드", "codePointAt"]);
        console.log(calcOperationDropdownMenu);
    }
})();

