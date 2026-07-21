type StringInfo = {
  isDuplicate: boolean;
  maxPosition: number;
};

function partitionLabels(s: string): number[] {
    const stringWithTheirPosition  = new Map<string , StringInfo>();

    for(let i = 0 ; i<s.length ; i++) {
        const val : string = s[i];
        if( stringWithTheirPosition.has(val)) {
            stringWithTheirPosition.set(val , {isDuplicate : true ,maxPosition : i  })

        } else {
            stringWithTheirPosition.set(val , {isDuplicate : false , maxPosition : i})
        }        
    }

    const partitionStringArray : number[] = [];
    let partitionMaxPosition : number = 0;
    let currentString : string = '';

    for(let i = 0 ; i<s.length ; i++) {
        const val : string = s[i];
        const sValue : StringInfo = stringWithTheirPosition.get(val)
        currentString += val;
        if(sValue.isDuplicate)  {
            partitionMaxPosition = Math.max(sValue.maxPosition , partitionMaxPosition)
        }

        if(partitionMaxPosition <= i) {
            partitionStringArray.push(currentString.length);
            currentString = ''
        }
        
    }

    return partitionStringArray;
    
};