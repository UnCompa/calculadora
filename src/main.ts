const pantalla: any = document.querySelector("#pantalla");
const calculadora: any = document.querySelector("body");
const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    //Borrar
    if (boton.id === "borrarTodo") {
      pantalla.textContent = 0;
      return;
    }
    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }
    //Potenciacion
    if (boton.id === "potenciar") {
      pantalla.textContent = Math.pow(pantalla.textContent, 2);
      return;
    }
    //Raiz
    if (boton.id === "raiz") {
      pantalla.textContent = Math.sqrt(pantalla.textContent).toFixed(2);
      return;
    }
    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error";
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});
function typing() {
  const sound = new Audio("/public/typing.mp3");
  sound.play();
}
calculadora.addEventListener(
  "keydown",
  (event: any) => {
    const botonApretado = Number(event.key);
    const TeclaApretado = event.key;
    var keyValue = event.key;

    if (TeclaApretado === "Backspace") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
        typing();
      }
      return;
    }

    if (TeclaApretado === "Enter") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
        typing();
      } catch {
        pantalla.textContent = "Error";
      }
      return;
    }
    if (TeclaApretado === ".") {
      if (pantalla.textContent.indexOf(".") === -1) {
        pantalla.textContent += ".";
        typing();
      }
      return;
    }
    if (TeclaApretado === "Escape") {
      pantalla.textContent = 0;
      typing();
      return;
    }
    if (TeclaApretado === "Shift") {
      pantalla.textContent = Math.pow(pantalla.textContent, 2);
      typing()
      return;
    }
    if (TeclaApretado === "Alt") {
      pantalla.textContent = Math.sqrt(pantalla.textContent).toFixed(2);
      typing()
      return;
    }
    //Operadores
    if (TeclaApretado === "+") {
      pantalla.textContent += keyValue;
      typing();
    }
    if (TeclaApretado === "-") {
      pantalla.textContent += keyValue;
      typing();
    }
    if (TeclaApretado === "*") {
      pantalla.textContent += keyValue;
      typing();
    }
    if (TeclaApretado === "/") {
      pantalla.textContent += keyValue;
      typing();
    }

    if (isNaN(botonApretado)) return;

    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
      typing();
    }
  },
  false
);
