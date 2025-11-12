const d = document;

export function shortcuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log("ctrl: ",e.ctrlKey);
    console.log("shift ",e.shiftKey);
    console.log("alt ",e.altKey);
    console.log(e);

    if(e.key === "a" && e.altKey){
        alert("Haz lazado una alerta con el teclado");
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lazado una confirmacion con el teclado");
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lazado un aviso con el teclado");
    }
}

