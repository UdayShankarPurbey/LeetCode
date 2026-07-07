function isValid(s: string): boolean {
    const bracketArray = [];

    for(let val of s) {
        if(val == '(' || val == '{' || val == '[') {
            bracketArray.push(val)
        } else {
            const match = bracketArray[bracketArray.length - 1] 
            
            switch (val) {
                case ')':
                    if (match !== '(') return false;
                    bracketArray.pop();
                    break;

                case '}':
                    if (match !== '{') return false;
                    bracketArray.pop();
                    break;

                case ']':
                    if (match !== '[') return false;
                    bracketArray.pop();
                    break;
            }
        }
    }
    return bracketArray.length == 0 ? true : false;
};