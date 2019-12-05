"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFileRead = /** @class */ (function () {
    function CSVFileRead(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    ;
    CSVFileRead.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        }).map(rowMap);
    };
    return CSVFileRead;
}());
exports.CSVFileRead = CSVFileRead;
