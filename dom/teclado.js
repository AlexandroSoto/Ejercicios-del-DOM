const d = document;
let x = 0,
    y = 0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();
    console.log(e.keyCode);
    console.log(e.key);
    console.log(limitBall,limitStage);

    switch (e.keyCode) {
        case 37:
            if(limitBall.left>limitStage.left) {
                x--;
                e.preventDefault();
            }
        break;
        case 38:
            if(limitBall.top>limitStage.top){
                y--;
                e.preventDefault();
            }
        break;
        case 39:
            if(limitBall.right<limitStage.right) {
                x++;
                e.preventDefault();
            }
        break;
        case 40:
            if(limitBall.bottom<limitStage.bottom) {
                y++;
                e.preventDefault();
            }
        break;
        
        default:
        break;
    }
    $ball.style.transform = `translate(${ x * 10 }px, ${ y * 10 }px)`;
}

export function shortcuts(e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log("ctrl: ",e.ctrlKey);
    // console.log("shift ",e.shiftKey);
    // console.log("alt ",e.altKey);
    // console.log(e);

    if(e.key === "a" && e.altKey){
        alert("Haz lazado una alerta con el teclado");
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lazado una confirmacion con el teclado");
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lazado un aviso  con el teclado");
    }
}

