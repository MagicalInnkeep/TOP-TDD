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