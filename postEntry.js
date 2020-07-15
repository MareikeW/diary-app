var textField = document.getElementById("textArea"); // verknüpft Textfeld

var subButton = document.getElementById("btn"); // verknüpft Button

// Wenn Button geklickt wird, wird die getTextContent()-Methode ausgeführt
subButton.addEventListener("click", getTextContent);

function getTextContent() {
  // verhindert, dass Seite nach Klick neu geladen wird
  event.preventDefault()
  // neuer Absatz wird erstellt, hier soll der Text eingefügt werden
  var newEntry = document.createElement("div");
  // Absatz wird mit Text verknüpft
  newEntry.textContent = textField.value;
  // fügt class hinzu, zum Stylen
  newEntry.className = "new-entry";
  // neuer Absatz wird unter dem Button angezeigt
  document.body.append(newEntry);
  // Löscht den eingegebenen Text und Platzhalter wird wieder angezeigt
  textField.value = "";
}
