if (!Entry.block.calc_operation.isEdited) {
    var defaultCalcOperationDropdownMenu = structuredClone(Entry.block.calc_operation.params.find((v) => v.options).options); // 살면서 이런 함수 처음 써봄
}

(() => {
    Entry.block.calc_operation.isEdited = true;
    Entry.block.calc_operation.params.find((v) => v.options).options = [...defaultCalcOperationDropdownMenu];
    const calcOperationDropdownMenu = Entry.block.calc_operation.params.find((v) => v.options).options;
    if (JSON.parse(document.querySelector("#extData").innerText).op1s4) {
        Entry.toast.success("NICE 확장 프로그램", "수학 함수 확장 플러그인 로딩 됨", false);
        const moreMath = {
            "역 쌍곡선 코사인": "acosh",
            "역 쌍곡선 사인": "asinh",
            "역 쌍곡선 탄젠트": "atanh",
            "쌍곡선 코사인": "cosh",
            "쌍곡선 사인": "sinh",
            "쌍곡선 탄젠트": "tanh",
            세제곱근: "cbrt",
            제곱근: "sqrt",
            "exp 값": "exp",
            "exp-1 값": "expm1",
            "32비트 정수 앞쪽 0의 개수": "clz32",
            "라디안을 도로 바꾼 값": "degrees",
            "도를 라디안으로 바꾼 값": "radians",
            "16비트 float 반올림": "f16round",
            "32비트 float 반올림": "fround",
            이진로그: "log2",
            상용로그: "log10",
            "1 더한 값의 자연로그": "log1p",
            "부호 값": "sign",
            "부호 비트 논리 값": "signbit",
        };
        Object.keys(moreMath).forEach((v) => {
            calcOperationDropdownMenu.push([v, moreMath[v]]);
        });
        console.log(calcOperationDropdownMenu);
    }
})();
