var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

genHistogram();

const inputs = document.getElementsByClassName("textbox");
const tb = document.getElementById("errorReturn");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      gradeInputValue = gradeInput.value; 

      inputErrorCheck();
      if (!errorCheck()) {
        genHistogram();
      }
    });
  }


const gradeInput = document.getElementById("inputbox");
const gradeInputButton = document.getElementById("inputbutton")
var gradeInputValue = gradeInput.value;

gradeInput.addEventListener('input', function() {
  inputErrorCheck();
});

  
function genHistogram() {
    clear();
    
    const inputValues = [
        { from: "Aplus", to: "max", box: "Aplusbox" },
        { from: "A", to: "Aplus", box: "Abox" },
        { from: "Aminus", to: "A", box: "Aminusbox" },
        { from: "Bplus", to: "Aminus", box: "Bplusbox" },
        { from: "B", to: "Bplus", box: "Bbox" },
        { from: "Bminus", to: "B", box: "Bminusbox" },
        { from: "Cplus", to: "Bminus", box: "Cplusbox" },
        { from: "C", to: "Cplus", box: "Cbox" },
        { from: "Cminus", to: "C", box: "Cminusbox" },
        { from: "D", to: "Cminus", box: "Dbox" },
        { from: "F", to: "D", box: "Fbox" }
      ];
       
      for (let i = 0; i < inputValues.length; i++) {
        const { from, to, box } = inputValues[i];
        const length = genArray(grades, document.getElementById(from).value, document.getElementById(to).value).length;
        display(length, box);
      }
      
}

function processInput() {
    
    var inputElement = document.getElementById("inputbox");
    var inputValue = parseFloat(inputElement.value);
    
    if (!isNaN(inputValue)) {
      grades.push(inputValue);
      inputElement.value = null;
      genHistogram();
    }
}

function display(input, target) {
    const row = document.getElementById(target);
    let i = 0;

    row.textContent = "|"
    while (i < input) {
        row.textContent += "O";
        i++;
    }
    
}

function clear() {
    const elements = document.querySelectorAll(".histo");

    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = "";
    }
}

function genArray(array, min, max) {
    const newArray = [];

    if (max == document.getElementById("max").value) {
      array.forEach(element => {
        if (element == max) {
          newArray.push(element);
        }
      })
    }

    array.forEach(element => {
        if (element >= min && element < max) {
            newArray.push(element);
        }
    });

    return newArray;
}

function errorCheck() {   
    const ids = ["max", "Aplus", "A", "Aminus", "Bplus", "B", "Bminus", "Cplus", "C", "Cminus", "D", "F"];
    var bool = false;
  
    for (let i = 0; i < ids.length - 1; i++) {
      const currentElement = document.getElementById(ids[i]);
      const nextElement = document.getElementById(ids[i + 1]);
  
      const currentValue = parseFloat(currentElement.value);
      const nextValue = parseFloat(nextElement.value);
  
      if (currentValue < nextValue || isNaN(currentValue)) {
        currentElement.style.borderColor = "red"
        bool = true;
      } else {
        currentElement.style.borderColor = ""
      }
    }
  
    return bool;
}

function inputErrorCheck() {
    gradeInputValue = gradeInput.value; 
  
    if (parseFloat(gradeInputValue) > document.getElementById("max").value || parseFloat(gradeInputValue) < document.getElementById("F").value || isNaN(gradeInputValue)) {
      gradeInput.style.borderColor = "red"
      gradeInputButton.disabled = true;
    } else {
      gradeInput.style.borderColor = ""
      gradeInputButton.disabled = false;
    }
}
  

