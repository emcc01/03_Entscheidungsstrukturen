"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment
const ageJohn = 35;  //Konstanten müssen direkt deklariert werden
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage  // Wahrheitswerte sind Schlüssel zur Entscheidungsstruktur, 
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

//Wahrheitswerte sind Ergebnisse von Tests

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// 
/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// // if(true)   //erster Befehl wird ausgeführt
// // if(false)  //zweiter Befehl wird ausgeführt
// // if(isJohnOlder)
// if (ageJohn > ageMark) 
// {
//   console.log("John ist älter.");  
// } 
// else 
// {
//    console.log("John ist jünger."); 
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt) // mit Fallunterscsheidungen umgehen können, mit if else if od switch


// if (isJohnOlder) // 1.Test
// {
//   console.log("John ist älter.");  
// } 
// else if (isJohnEqual)  // 2.Test, erste Alternative
// {
//    console.log("John ist gleich alt."); 
// }
// else // 3. Test, wenn alle fehlschlagen
// {
//    console.log("John ist jünger."); 
// }



/****** Fallunterscheidung / SWITCH|CASE 1 ******/


// const firstName = "Jane";
// let job;

// job = "driver";     // .. fährt TAXI! / UBER
// job = "diver";
// job = "artist";
// job = "pilot";
// job = "teacher";
// job = "instructor";

// switch (job) 
// {
//     case "driver":  // Test auf Gleichheit
//         console.log(firstName + " fährt Taxi!");
//         break;
//     case "diver":  
//         console.log(firstName + " taucht im Rhein");
//         break;
//     case "artist":  
//         console.log(firstName + " ist Künstlerin");
//         break;   
//     case "teacher":  // Oder Verknüpfung, beide gleicher Befehl
//     case "instructor":  
//         console.log(firstName + " unterrichtet");
//         break;   
//     default:    //bei case am besten immer etwas in default schreiben
//         console.log(firstName + " macht etwas anderes");
//         break;
// }

// ohne breaks würde Befehl einfach durchlaufen



/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const a = 2;

switch (cond) 
{
    case (a==1):
        console.log("a ist gleich 1");
        break;
    case (a==2):
        console.log("a ist gleich 2");
        break;

    default:
        console.log("a hat einen anderen Wert");
        break;
}




