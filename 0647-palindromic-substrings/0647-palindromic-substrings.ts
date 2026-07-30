function countSubstrings(s: string): number {

    let subStringCount = 0;

    const stringLength = s.length;

    for (let i = 0; i < stringLength; i++) {
        if (i === 0) {
            subStringCount += stringLength;
            continue;
        }

        let left = 0;
        let right = 0 + i;
        while (right < stringLength) {
            // const sub = s.slice(left , right + 1);
            if (isPalindrome(s, left, right)) subStringCount++;
            left++;
            right++;
        }
    }

    return subStringCount;
}

function isPalindrome(s: string, l: number, r: number): boolean {
    if (!s) return false;
    if (l === r) return true;
    let left = l;
    let right = r;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        else {
            left++;
            right--;
        }
    }

    return true;
}