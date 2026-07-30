function countSubstrings(s: string): number {

    let subStringCount = 0;

    const stringLength = s.length;

    for(let i = 0; i< stringLength ; i++) {
        if(i === 0) {
            subStringCount += stringLength;
            continue;
        }

       let left = 0 ;
       let right = 0 + i;
       while(right < stringLength) {
            const sub = s.slice(left , right + 1);
            if(isPalindrome(sub)) subStringCount++;
            left++;
            right++;
       }
    }

    return subStringCount;
}

function isPalindrome(s : string) : boolean {
    if(!s) return false ;
    const stringLength = s.length;

    if(stringLength === 1) return true;
    let left = 0;
    let right = stringLength - 1;

    while(true) {
        if(left < right) {
            if(s[left]!== s[right]) return false;
            else {
                left++;
                right--;
            }
        }
        else return true;
    }
        
}