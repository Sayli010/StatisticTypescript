import { CSVFileRead } from './CSVFileRead';
import { stringToDate } from './Utility';
import { MatchResult } from './Utility';

//import { dataTuple} from './index';

export type dataTuple = [Date,string,string,number,number,MatchResult,string];
export class FormatedData<T> extends CSVFileRead<dataTuple>{
    constructor(public fileName:string){
        super(fileName);
    }
    
    mapRow(row:string[]):dataTuple{
        return [stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]]
    }
}