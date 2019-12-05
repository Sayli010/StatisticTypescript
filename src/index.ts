// import fs  from 'fs';

// console.log("CSV Report");
// enum MatchResult{
//     home = "H",
//     away = "A",
//     draw = "D"
// }
// // const home:string = "H";
// // const away:string = "A";
// // const draw:string = "D";

// const matches = fs.readFileSync('football.csv',{
//     encoding:'utf-8'
// })
// .split('\n')
// .map((row:string)=>{
//     return row.split(',');
// })

// let win:number = 0;
// let manUnitedGoal:number=0;
// let totalHome:number = 0;
// let totalAway:number = 0;
// let manUnitedMatch:number = 0;
// for(let match of matches){
//     if(match[1]==="Man United" && match[5]===MatchResult.home){ 
//         manUnitedGoal += parseInt(match[3]);
//         win++;
//     }else if(match[2]==="Man United" && match[5]===MatchResult.away){
//         win++;
//         manUnitedGoal += parseInt(match[4]);
//     }
   
//     match[3]===undefined?match[3]='0':match[3]=match[3];
//     totalHome += parseInt(match[3]);
//     match[4]===undefined?match[4]='0':match[4]=match[4];
//     totalAway += parseInt(match[4]);
// }
// for(let match of matches){
//     if(match[1] === "Man United" || match[2]=== "Man United"){
//         manUnitedMatch++;
//     }
// }
// console.log(`Man United wins ${win} times`);
// console.log(`Total goal of Man United is ${manUnitedGoal}`);
// console.log(`Total home team score ${totalHome}`);
// console.log(`Total away team score ${totalAway}`);
// console.log(`Total score ${totalAway + totalHome}`)
// console.log(`Total match played by Man United ${manUnitedMatch}`)

///////////////////////////////////////
//import { CSVFileRead } from './CSVFileRead';
import { FormatedData ,dataTuple} from './FormatedData';
import { NewData } from './NewData';
import { dataTuple1 } from './NewData';
import { MatchResult } from './Utility'




const fileData = new FormatedData('football.csv');
console.log(fileData.read());
console.log('************************************************')
const newData = new NewData<dataTuple1>('football.csv');
console.log(newData.read());
