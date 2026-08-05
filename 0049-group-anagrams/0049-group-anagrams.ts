function groupAnagrams(strs: string[]): string[][] {

    const charArray = new Array(26).fill(0)
    const charCodeofa = "a".charCodeAt(0);
    const stringWithItsFrequencyCode = new Map()

    for (let str of strs) {
        for (let char of str) {
            const charCodeOfCharater = char.charCodeAt(0);
            const diff = charCodeOfCharater - charCodeofa;
            charArray[diff] = charArray[diff] + 1;
        }
        const frequency = charArray.join('*');
        if (stringWithItsFrequencyCode.has(frequency)) {
            stringWithItsFrequencyCode.set(frequency, [...stringWithItsFrequencyCode.get(frequency), str])
        } else {
            stringWithItsFrequencyCode.set(frequency, [str])
        }
        charArray.fill(0);
    }
    const group = [];
    stringWithItsFrequencyCode.forEach((value) => group.push(value) )

    return group

};