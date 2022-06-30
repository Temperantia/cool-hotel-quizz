/* const top = (amt: number) => amt;
const bottom = (amt: number) => amt;
const SPANISH_FUDGE = 0;
const FRENCH_FUDGE = 0;
const ENGLISH_FUDGE = 0;
const recipe: string = "";
const base = 0;
let fudge: number;
let sugar: number;
let amt: number;
let chocolate: number;
 */

switch (recipe) {
  case "SPANISH":
    fudge = SPANISH_FUDGE;
    break;
  case "FRENCH":
    fudge = FRENCH_FUDGE;
    chocolate = 7;
    break;
  case "ENGLISH":
    fudge = ENGLISH_FUDGE;
    break;
  default:
    fudge = 1;
    break;
}

amt = base * fudge;
sugar = 2 * bottom(amt) + top(amt) * 1.17;
