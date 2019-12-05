"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult;
(function (MatchResult) {
    MatchResult["home"] = "H";
    MatchResult["away"] = "A";
    MatchResult["draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
function stringToDate(strDate) {
    var dateParts = strDate.split('/').map(function (el) {
        return parseInt(el);
    });
    var date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    return date;
}
exports.stringToDate = stringToDate;
