function productExceptSelf(nums: number[]): number[] {

    const productOfNumbers = nums.reduce((acc : number , curr : number ) => (acc*= curr) , 1);
    return nums.map((num : number , index : number) => {
        if(num == 0) {
            const sum = nums.reduce((total, currentValue, currentIndex) => {
                if (currentIndex === index) {
                    return total; 
                }

                return total * currentValue;
            }, 1);
           
            return sum;
        }
        return productOfNumbers/num
    });  
};


