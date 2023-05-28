let button = document.querySelector("#liveToastBtn");
let textArea = document.querySelector("#task");
let list = document.querySelector("#list");
let listItems = document.getElementsByTagName("li");

button.addEventListener("click", buttonHandler);

function buttonHandler() {
  if (!textArea.value || textArea.value == "" > 0) {
    // alert("Hatali Giris Yaptiniz");

    let toast = document.querySelector(".error");
    toast.classList.remove("hide");
    toast.classList.add("d-block");
  } else {
    let newListItem = document.createElement("li");
    list.append(newListItem);
    newListItem.innerText = textArea.value;

    let toast = document.querySelector(".success");
    toast.classList.remove("hide");
    toast.classList.add("d-block");

    // Yeni eklenen list öğelerine kapatma butonu eklemek için
    addCloseButtonToElement(newListItem);
    hideElementOnClick(newListItem.querySelector(".close"));

    // Yeni eklenen list öğelerine checked olayı eklemek için
    newListItem.addEventListener("click", function () {
      if (newListItem.classList.contains("checked")) {
        newListItem.classList.remove("checked");
      } else {
        newListItem.classList.add("checked");
      }
    });
  }
}

// Var olan öğeler için kapatma butonu ve checked olayını uygulamak için
for (let i = 0; i < listItems.length; i++) {
  addCloseButtonToElement(listItems[i]);
  hideElementOnClick(listItems[i].querySelector(".close"));

  listItems[i].addEventListener("click", function () {
    if (listItems[i].classList.contains("checked")) {
      listItems[i].classList.remove("checked");
    } else {
      listItems[i].classList.add("checked");
    }
  });
}

function addCloseButtonToElement(element) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  element.appendChild(span);
}

function hideElementOnClick(element) {
  element.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";

    // div.remove();
    // console.log(list);
  };
}

/* 
// Variables
let button = document.querySelector("#liveToastBtn");
let textArea = document.querySelector("#task");
let list = document.querySelector("#list");
let listItems = document.getElementsByTagName("li");

button.addEventListener("click", buttonHandler);

function buttonHandler() {
  if (!textArea.value || textArea.value == "" > 0)
    alert("Hatali Giris Yaptiniz");
  else if (textArea.value) {
    let newListItem = document.createElement("li");
    list.append(newListItem);
    newListItem.innerText = textArea.value;

    // yeni eklenen list ögelerine de eventListener eklememiz gerekir
    newListItem.addEventListener("click", function () {
      if (newListItem.classList.contains("checked")) {
        newListItem.classList.remove("checked");
      } else {
        newListItem.classList.add("checked");
      }
    });
  }
}
// checked olup olmadığını kontrol ediyor
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    if (listItems[i].classList.contains("checked")) {
      listItems[i].classList.remove("checked");
    } else {
      listItems[i].classList.add("checked");
    }
  });
}

// izlediğim videodan öğrendiğim "Event Delegation"
// document.querySelector("#list").addEventListener("click", function (e) {
//   const target = e.target;

//   if (target.classList.contains("checked")) {
//     target.classList.remove("checked");
//   } else {
//     target.classList.add("checked");
//   }
// });

// liste ögelerini silmek için nasıl çarpı butonu eklerim bilemedim ama yapacaklarım şunlar:
// çarpı butonuna tıklandığında list ögesine display:none özelliği ekleyen bir class ekleyecek ve list ögesi silinecek,görünmeyecek

// tam olarak ne yaptığını bilmediğim kod
// document.querySelector("#list").addEventListener("click", function (e) {
//   const target = e.target;
//   if (target.classList.contains("fa-xmark")) {
//     target.parentElement.style.display = "none";
//   }
// });

// var olan list ögelerine X ekliyor
function addCloseButtonToElement(element) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  element.appendChild(span);
}
// var olan ögelerdeki X'e tıklandığında gizliyor
function hideElementOnClick(element) {
  element.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

for (var i = 0; i < listItems.length; i++) {
  addCloseButtonToElement(listItems[i]);
  hideElementOnClick(listItems[i].querySelector(".close"));
}


*/
