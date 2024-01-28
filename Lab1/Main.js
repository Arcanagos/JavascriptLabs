  function addField()
  {
    let placeToPut = document.querySelector("#FieldDiv");
    let newInput = document.createElement("input");
    newInput.addEventListener("input", updateValues);
    placeToPut.appendChild(newInput);
  }

  function clearFields()
  {
    let placeToClear = document.querySelector("#FieldDiv");
    let elementsToCheck = placeToClear.getElementsByTagName('input');
    let elementToClear = [];
    for (let i = 0; i < elementsToCheck.length; i++)
    {
      if(elementsToCheck[i].value == "")
      {
        elementToClear.push(elementsToCheck[i]);
      }
    }
    for (let i = 0; i < elementToClear.length; i++)
    {
      placeToClear.removeChild(elementToClear[i]);
    }
    updateValues();
  }
  function updateValues()
  {
    let container = document.querySelector("#FieldDiv");
    let elementsToCheck = container.getElementsByTagName('input');

    let sumVal = 0;
    let maxVal = parseInt(elementsToCheck[0].value);
    let minVal = parseInt(elementsToCheck[0].value);
    let count;

    for (count = 0; count < elementsToCheck.length; count++)
    {
      elemVal = parseInt(elementsToCheck[count].value);
      sumVal += elemVal;
      if(elemVal > maxVal)
        maxVal = elemVal;
      if(elemVal < minVal)
        minVal = elemVal;
    }

    document.querySelector("#Sum").innerHTML = sumVal;
    document.querySelector("#Avr").innerHTML = sumVal / count;
    document.querySelector("#MinVal").innerHTML = minVal;
    document.querySelector("#MaxVal").innerHTML = maxVal;
  }
