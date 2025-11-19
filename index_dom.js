import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js";
import { moveBall } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Jun 03, 2027 03:23:19","Feliz Cumpleños amigo y docente digital");
});

d.addEventListener("keydown",e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})





