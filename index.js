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