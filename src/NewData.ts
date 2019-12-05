import { CSVFileRead } from './CSVFileRead';
import { stringToDate } from './Utility';
import { dataTuple } from './FormatedData';


export type dataTuple1 = [Date,string,string];
// export class NewData<T> extends CSVFileRead<dataTuple1>{
//     constructor(public fileName:string){
//         super(fileName);
//     }
    
//     mapRow(row:string[]):dataTuple1{
//         return [
//             stringToDate(row[0]),
//             row[1],
//             row[2]
//             ]
//     }
// }

export class NewData implements NewInterface{
    constructor(public fileName:string){}
    data:string[][] = [];
    mapRow(row:string[]):dataTuple1{
        return [
            stringToDate(row[0]),
            row[1],
            row[2]
            ]
    }
}