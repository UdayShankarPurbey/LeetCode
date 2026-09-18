function mostCommonWord(paragraph: string, banned: string[]): string {
    const wordWithOccurancesount = new Map();

    const bannedWord = new Set(banned);

    for (let w of paragraph.split(/[,.!?;'\s]+/)) {
        let word = w.toLowerCase();
        if (bannedWord.has(word) || !word) continue;
        if (wordWithOccurancesount.has(word)) {
            wordWithOccurancesount.set(word, wordWithOccurancesount.get(word) + 1);
        } else {
            wordWithOccurancesount.set(word, 1);
        }
    }
    return [...wordWithOccurancesount.entries()].sort((a, b) => b[1] - a[1])[0][0];
};