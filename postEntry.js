//import { entryDayAndTime } from "../Date.js";

var entryForm = document.getElementById("formContainer");
var textField = document.querySelector(".textArea"); // verknüpft Textfeld
var entriesSection = document.querySelector("#entries"); // verknüpft mit Teil für Einträge
var entriesList = [];
var newEntry = "";


function displayNewEntry(event){
  // verhindert, dass Seite nach Klick neu geladen wird
  event.preventDefault();
  newEntry = document.createElement("div");
  newEntry.className = "new-entry";
  newEntry.textContent = textField.value;
  // neuer Eintrag wird unter dem Button angezeigt
  entriesList.push(newEntry);
  
  entriesSection.append(newEntry);
  // Löscht den eingegebenen Text und Platzhalter wird wieder angezeigt
  textField.value = "";

  // Zeigt Nummer des Eintrags, und dessen Inhalt an.
  newEntry.innerHTML = 
  `<div class="entry-layout">
  <h5 class="entry-title">Eintrag ${entriesList.indexOf(newEntry)}</h5>
  <p class="date">${getDate()}</p>
  <p class="entry-content">${newEntry.textContent}</p>
  </div>`
}

entryForm.addEventListener("submit", displayNewEntry);

function getDate() {
  var date = new Date();
  var entryDayAndTime = `${date.getDate()}.${date.getMonth()+ 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return entryDayAndTime;
}