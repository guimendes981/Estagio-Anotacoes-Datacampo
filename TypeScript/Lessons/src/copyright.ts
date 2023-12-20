//Original JS code
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('value', thisYear);
// year.textContent = thisYear

// // First Variation 
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString(); //toString() is converting the number to a string
// if (year) {
//   year.setAttribute("dateTime", thisYear);
//   year.textContent = thisYear;
// }

//Second Variation of TS Code 
const year = document.getElementById("year") as HTMLSpanElement; //Sayng that year is a HTMLSpanElement
let thisYear: string;
thisYear = new Date().getFullYear().toString(); //toString() is converting the number to a string
if (year) {
  year.setAttribute("dateTime", thisYear);
  year.textContent = thisYear;
}
