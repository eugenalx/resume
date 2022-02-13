const Helloo = {
  myexperience : {
    nume: "my Experience",
    image: "images/experience.jpg"
  },

  mystudies: {
    nume: "my Studies",
    image: "images/experience.jpg"
  },
  myhobbies: {
    nume: "my Hobbies",
    image: "images/experience.jpg"
  },
  myskills: {
    nume: "my Skills",
    image: "images/experience.jpg"
  },
  myprojects: {
    nume: "my Projects",
    image: "images/experience.jpg"
  },
  myothers: {
    nume: "my Others",
    image: "images/experience.jpg"
  },

  };
    

function hamburgerMenu(x) {
    x.classList.toggle("change");
  }

function Listare(lista) {

    Object.values(lista).forEach(function(val){
    // console.log(val.nume);
    let divMain = document.createElement("div");
    let paragrafMain = document.createElement("p");
    let imageMain = document.createElement("img");

    divMain.className="pointer";
    divMain.onclick="openNav()";
    paragrafMain.innerHTML = val.nume;
    imageMain.src = val.image;

    document.getElementById("list").appendChild(divMain).prepend(imageMain,paragrafMain);

  });
}

//   slider functions

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
// end slider functions