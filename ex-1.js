let romanSet = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(roman) {
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    let nextRoman = i + 1;
    if (nextRoman > roman.length - 1) {
      nextRoman = i;
    }

    if (romanSet[`${roman[i]}`] >= romanSet[`${roman[nextRoman]}`]) {
      result += romanSet[`${roman[i]}`];
    } else if (romanSet[`${roman[i]}`] < romanSet[`${roman[nextRoman]}`]) {
      result += romanSet[`${roman[i + 1]}`] - romanSet[`${roman[i]}`];
      i += 1;
    }
  }

  return result;
}
const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
console.log(result1);
console.log(result2);
console.log(result3);

// function romanToInt(roman) {
//     let arrayOfInput = roman.split("")
//     let manipurateArrayOfInput = arrayOfInput.map((char)=>{

//     })
//     console.log(arrayOfInput)
//     console.log(manipurateArrayOfInput)
//   let result = 0;
//   for (let  i=0 ; i<roman.length ; i++ ) {
//     console.log(i)
//     console.log(roman[i])
//     if (roman[i] === "M") {
//       result += M;
//       currentStage.push(M);
//     } else if (roman[i] === "D") {
//       result += D;
//       currentStage.push(D);
//     } else if (roman[i] === "C") {
//       result += C;
//       currentStage.push(C);
//     } else if (roman[i] === "L") {
//       result += L;
//       currentStage.push(L);
//     } else if (roman[i] === "X") {
//       result += X;
//       currentStage.push(X);
//     } else if (roman[i] === "V") {
//       result += V;
//       currentStage.push(V);
//     } else {
//       result += I;
//       currentStage[i] = I
//     }

//     console.log(currentStage);
//     console.log(result);
//     return result;
//   }
// }
