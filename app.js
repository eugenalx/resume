const Helloo = {
  myexperience : {
    nume: "my Experience",
    image: "images/experience.jpg"
  },

  mystudies: {
    nume: "my Studies",
    image: "images/studies.jpg"
  },
  myhobbies: {
    nume: "my Hobbies",
    image: "images/hobbies.jpg"
  },
  myskills: {
    nume: "my Skills",
    image: "images/skills.jfif"
  },
  myprojects: {
    nume: "my Projects",
    image: "images/projects.png"
  },
  myothers: {
    nume: "my Others",
    image: "images/abilities.jfif"
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
    divMain.onclick=function() {openNav()};
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