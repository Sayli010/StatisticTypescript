import fs from 'fs';



// export abstract class CSVFileRead<T>{
//     data:T[]=[];
//     constructor(public fileName:string){};
//     abstract mapRow(row:string[]):T;
//     read():void{
//         this.data = fs.readFileSync(this.fileName,{
//             encoding:'utf-8'
//         })
//         .split('\n')
//         .map((row:string)=>{
//             return row.split(',');
//         }).map(this.mapRow)
        
    
//     }
   
// }
interface NewInterface{
    data:string[][];
    read():void;
}

export class CSVFileRead{
    data:string[][]=[];
    constructor(public fileName:string){};
    read():void{
        this.data = fs.readFileSync(this.fileName,{
            encoding:'utf-8'
        })
        .split('\n')
        .map((row:string)=>{
            return row.split(',');
        }).map(rowMap);
        
    
    }
   
}