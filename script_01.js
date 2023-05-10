"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment
const ageJohn = 35;  //Konstanten müssen direkt deklariert werden
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

//Wahrheitswerte sind Ergebnisse von Tests

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

//if(isJohnOlder)
if (ageJohn > ageMark)
{
    console.log("John ist älter.");
}

