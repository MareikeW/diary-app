var entryForm = document.getElementById("formContainer");
var textField = document.querySelector(".textArea"); // verknüpft Textfeld
var entriesSection = document.querySelector("#entries"); // verknüpft mit Teil für Einträge

function getTextContent(event) {
  // verhindert, dass Seite nach Klick neu geladen wird
  event.preventDefault();
  // neuer Absatz wird erstellt, hier soll der Text eingefügt werden
  var newEntry = document.createElement("div");
  // fügt class hinzu, zum Stylen
  newEntry.className = "new-entry";
  // Absatz wird mit Text verknüpft
  newEntry.innerText = textField.value;
  newEntry.style.color = "white";
  // neuer Absatz wird unter dem Button angezeigt
  entriesSection.appendChild(newEntry);
  // Löscht den eingegebenen Text und Platzhalter wird wieder angezeigt
  textField.value = "";
}

// Wenn Button geklickt wird, wird die getTextContent()-Methode ausgeführt
entryForm.addEventListener("submit", getTextContent);
