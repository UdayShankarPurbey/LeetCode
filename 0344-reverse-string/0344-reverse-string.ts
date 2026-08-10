/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    if(s.length < 1) return ;
    let left = 0 ; 
    let right = s.length -1;
    
   while(left < right) {
        const val =  s[left];
        s[left] = s[right];
        s[right] = val
        left++;
        right --;
   }
};