function getElementWidth(content, padding, border) {
    const doublePadding = parseFloat(padding) * 2
    const doubleBorder = parseFloat(border) * 2
    return parseFloat(content) + doublePadding + doubleBorder
}

console.log(`==== Task 3 ====`)
console.log(getElementWidth('50px', '8px', '4px')) // 74
console.log(getElementWidth('60px', '12px', '8.5px')) // 101
console.log(getElementWidth('200px', '0px', '0px')) // 200
