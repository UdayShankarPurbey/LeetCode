function xorQueries(arr: number[], queries: number[][]): number[] {
    const queryResponse = [];
   
    const xorOutput : number[] = [0];
    let answer = 0;

    for(let i = 0 ; i< arr.length ; i++) {
        const num = arr[i];
        xorOutput[i+ 1] = xorOutput[i] ^ num
    }

    for(let [left , right] of queries) {
        
       if(left === 0){
            answer = xorOutput[right + 1]
       } else {
          answer = xorOutput[right + 1] ^ xorOutput[left]
       }
       queryResponse.push(answer);
       answer = 0;

        
    }

    
    return queryResponse
};
