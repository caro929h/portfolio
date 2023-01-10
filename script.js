// Lav variablen "btn", der henviser til ".toggle-btn"

const btn = document.querySelector(".toggle-btn");

// Lav variablen "menu", der henviser til ".main-menu"

const menu = document.querySelector(".index_nav");

// Lav funktionen "toggleMenu()" med følgende funktionalitet

function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  btn.classList.toggle("pressed");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
  } else {
    console.log(menuShown); // se i konsollen
  }
  // "toggleMenu()" slutter her
}
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
