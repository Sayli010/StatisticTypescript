"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility_1 = require("./Utility");
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
var NewData = /** @class */ (function () {
    function NewData(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    NewData.prototype.mapRow = function (row) {
        return [
            Utility_1.stringToDate(row[0]),
            row[1],
            row[2]
        ];
    };
    return NewData;
}());
exports.NewData = NewData;
