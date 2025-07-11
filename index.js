export function capitalize(string){
    let str;
    if(string.length==0){
        str ="";
    }
    else{
        str = String(string[0]).toUpperCase() + string.slice(1);
    }
    return str
}

export function reverseString(string){
    let str ="";
    if(string.length==0){}
    else{
        str = string.split('')
                    .reduce((str,x) => x+str )
    }
    return str;
}

export const calculator = {
    add (a,b) { return a+b},
    substract (a,b) { return a-b},
    multiply (a,b) { return a*b},
    divide (a,b) { if (b==0){ return "DivBy0"} else return a/b }
}

export function caesarCipher(string, key){
    //Create array
    const alphabet =[];
    for (let i = 65; i < 91; i++) {
        alphabet.push(String.fromCharCode(i));
    }

    let str =string.toUpperCase()
                    .split('')
                    .map(x => {
                        if(alphabet.includes(x)){
                        let shiftedIndex=alphabet.indexOf(x)+key;
                        shiftedIndex = shiftedIndex>25?shiftedIndex-26:shiftedIndex;
                        return alphabet[shiftedIndex];
                        }
                        else{
                            return x;
                        }
                    })
                    .join("")

    return str
}

export function analyzeArray(array) {
    return {
        average: array.reduce((total, current) => total + current) / array.length,
        min: array.reduce((current, next) => current < next ? current : next),
        max: array.reduce((current, next) => current > next ? current : next),
        length: array.length
    }
};



