
export enum MatchResult{
    home = "H",
    away = "A",
    draw = "D"
}

export function stringToDate(strDate:string):Date{
    const dateParts = strDate.split('/').map((el:string)=>{
        return parseInt(el);
    });
    const date = new Date(dateParts[2],dateParts[1]-1,dateParts[0]);
    return date;
}


    
