function Init() {
  console.log('mouais')

  var formulaire = document.getElementById('formulaire');
  var lettre = document.getElementById('logo');


  lettre.addEventListener("click", form);

  function form() {
    console.log("ok")
    if (getComputedStyle(formulaire).display != "none") {
      formulaire.style.display = "none";
    }
    else {
      formulaire.style.display = "block";
    }
  }

}
