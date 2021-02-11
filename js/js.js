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



/*#formulaire {
  background: #e5474b;
  width: 25%;
}

#formulaire h2 {
   color: white;
}

input, select, textarea {
  width: 30%;
  height: 52px;
  border: 5px;

  background: transparent;

  border:2px solid #f08286;
  border-radius: 3px;

  margin: 20px;
}

input:hover, select:hover, textarea:hover {
  background: transparent;
  border:3px solid #f08286;
}

input:focus, select:focus{
  outline: none;
}

.choix {
  margin-left: 40px;
}

ul {
  list-style-type: none;
  }

.message {
  margin-left: 40px;
  text-indent: 17px;
}

textarea {
  width: 68%;
  height: 28%;
}

#nameetmail {
  margin-left: 90px;
}

.bouton:first-child {
  background: #1c1c1c;
}
*/