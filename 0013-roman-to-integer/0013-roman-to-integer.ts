function romanToInt(s: string): number {
    let num = 0;
    const romanRepresentation = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (romanRepresentation[s[i]] < romanRepresentation[s[i + 1]]) {
            num = num - romanRepresentation[s[i]];
        } else {
            num = num + romanRepresentation[s[i]];
        }
    }

    return num;
};