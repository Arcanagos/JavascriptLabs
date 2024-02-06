let noteCount = 0;

for (let i = 0; i < localStorage.length; i++) {
  const note = localStorage.getItem(localStorage.key(i));
  const allNotes = document.getElementById("allNotes");
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = note;
  const checkbox = tempDiv.querySelector("#pinCheckbox");
  if(checkbox.checked) {
    allNotes.insertBefore(tempDiv, allNotes.firstChild);
  }
  else {
    allNotes.appendChild(tempDiv);
  }
  const textarea = tempDiv.querySelector("#noteContent");
  textarea.value = textarea.getAttribute("value");
}

function addNote() {
  let mainNote = document.getElementById('mainNote').cloneNode(true);
  mainNote.id = "note" + noteCount;
  mainNote.style.visibility = "visible";
  let dateElement = document.createElement("p");
  dateElement.classList.add("creationDate");
  const date = new Date().toLocaleString("pl-PL");
  dateElement.textContent = "Utworzona:" + date;
  mainNote.appendChild(dateElement);
  document.getElementById("allNotes").appendChild(mainNote);
  noteCount++;
  saveToMemory(mainNote);
}

function selectColor(element, color) {
    // Set the background color of the parent element
    let parentElement = element.parentNode.parentNode;
    parentElement.style.backgroundColor = color;
    saveToMemory(parentElement);
}

function moveToTop(element) {
  let allNodes = element.parentNode.parentNode;
  let thisNode = element.parentNode;
  if (element.checked) {
      allNotes.insertBefore(thisNode, allNotes.firstChild);
      element.setAttribute("checked", "true");
  }
  else {
    allNotes.appendChild(thisNode);
    element.removeAttribute("checked");
  }

  saveToMemory(thisNode);
}

function deleteNote(element) {
  const note = element.parentNode;
  const dateField = note.getElementsByClassName("creationDate")[0].textContent;
  localStorage.removeItem(dateField)
  element.parentElement.remove();
}

function saveToMemory(element) {
  const dateField = element.getElementsByClassName("creationDate")[0].textContent;
  console.log(dateField.toString());
  localStorage.setItem(dateField, element.outerHTML);
}

function updateTextData(element) {
  element.setAttribute("value", element.value);
  saveToMemory(element.parentNode);
}
