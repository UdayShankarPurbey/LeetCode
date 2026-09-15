
function letterCombinations(digits: string): string[] {
    const phone_board = {
        1: [], 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z']
    }

    let prevComb = [""];

    for(let i = 0 ; i<digits.length;i++) {
        const currentComb = [];
        for(let char of phone_board[digits[i]]) {
            for(let cc of prevComb) {
                currentComb.push(cc+char)
            }
        }
        prevComb = currentComb;
    }
    return prevComb;
};