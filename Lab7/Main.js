let noteCount = 0;

for (let i = 0; i < localStorage.length; i++) {
  const placeName = localStorage.getItem(localStorage.key(i));
  createNote(placeName);
}

function addNote() {
  const placeName = document.getElementById("placeName").value;
  if(placeName != "") {
    if(noteCount < 10) {
      createNote(placeName)
    }
    else {
      alert("Osiągnięto maksymalną ilość notatek. Usuń notatkę by dodać kolejną");
    }
  }
  else{
    alert("Podaj nazwę miejsca");
  }
}

async function createNote(placeName) {
  let mainNote = document.getElementById('mainNote').cloneNode(true);
  mainNote.id = "note" + noteCount;
  mainNote.style.visibility = "visible";

  mainNote.querySelector("#Place").innerHTML = placeName;
  try {
    let data = await getWeatherData(placeName);

    mainNote.querySelector("#Temp").innerHTML = "Temperatura: " + data.main.temp;
    mainNote.querySelector("#Moist").innerHTML = "Wilgotność: " + data.main.humidity;
    mainNote.querySelector("#image").src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  }
  catch {
    alert("Nie udało się znaleść miejscowości");
    return;
  }

  document.getElementById("allNotes").appendChild(mainNote);
  saveToMemory(placeName);
  noteCount++;
}

function deleteNote(element) {
  const note = element.parentNode;
  const idField = note.querySelector("#Place").innerHTML;
  element.parentElement.remove();
  localStorage.removeItem(idField);
  noteCount--;
}

async function getWeatherData(placeName) {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + placeName + "&appid=77c6c69a5ff772f677387461770d5f63";
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

function saveToMemory(placeName) {
  localStorage.setItem(placeName, placeName);
}
