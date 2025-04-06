document.getElementById("voltar").onclick = function() {
    window.location.href = "index2.html";
};

let senhaCorreta1 = "17/09/2022";
let senhaDigitada1;

let senhaCorreta2 = "25/04";
let senhaDigitada2;

let senhaCorreta3 = "06/04/2023";
let senhaDigitada3;

let cadeado = document.getElementById("bloqueado").style.visibility = 'visible';
let envelope = document.getElementById("desbloqueado").style.visibility = 'hidden';
let aberto = document.getElementById("abrir").style.visibility = 'hidden';
let voltar = document.getElementById("voltarTudo").style.visibility = 'hidden';

let frase = document.getElementById("frase").textContent = "Desbloqueie o cadeado! (se conseguir)😘";


function abrirPopup() {
    let msg = document.getElementById("popupOverlay");
    document.getElementById("bloqueado").style.visibility = 'hidden';
    msg.style.display = "flex"; 
        
        setTimeout(function() {
            msg.style.display = "none";
        }, 1500); // 1500 milissegundos = 1 segundo e meio

        setTimeout(function(){
            document.getElementById("bloqueado").style.visibility = 'visible';
        }, 1500);
};

function abrirPopup2() {
    let msg = document.getElementById("popupOverlay2");
    document.getElementById("bloqueado").style.visibility = 'hidden';
    msg.style.display = "flex"; 
};

function abrirPopup3() {
    let senhaDigitada1 = document.getElementById("senhaInput1").value;
    if (senhaDigitada1 == senhaCorreta1){
    let msg = document.getElementById("popupOverlay3");
    msg.style.display = "flex";
    document.getElementById("bloqueado").style.visibility = 'hidden'; 
        
        setTimeout(function() {
            msg.style.display = "none";
        }, 1500); // 1500 milissegundos = 1 segundo e meio

        setTimeout(function(){
            document.getElementById("bloqueado").style.visibility = 'visible';
        }, 1500)
    }
};

function abrirPopup4() {
    let senhaDigitada2 = document.getElementById("senhaInput2").value;
    if (senhaDigitada2 == senhaCorreta2){

    let msg = document.getElementById("popupOverlay4");
    msg.style.display = "flex"; 
    document.getElementById("bloqueado").style.visibility = 'hidden';

        setTimeout(function() {
            msg.style.display = "none";
        }, 1500); // 1500 milissegundos = 1 segundo e meio

        setTimeout(function(){
            document.getElementById("bloqueado").style.visibility = 'visible';
        }, 1500)
    }
    
};

function abrirPopup5() {
    let senhaDigitada1 = document.getElementById("senhaInput1").value;
    if (senhaDigitada1 == senhaCorreta1){
        let msg = document.getElementById("popupOverlay5");
            msg.style.display = "flex";
            document.getElementById("bloqueado").style.visibility = 'hidden';         
    }         
};

function abrirPopup6() {
    let senhaDigitada1 = document.getElementById("senhaInput1").value;
    if (senhaDigitada1 == senhaCorreta1){
    let senhaDigitada2 = document.getElementById("senhaInput2").value;
    document.getElementById("bloqueado").style.visibility = 'hidden';
    if (senhaDigitada2 == senhaCorreta2){
        let msg = document.getElementById("popupOverlay6");
        msg.style.display = "flex"; 
    }        
    }
};

function abrirPopup7() {
    let senhaDigitada3 = document.getElementById("senhaInput3").value;
    if (senhaDigitada3 == senhaCorreta3){ 
        let msg = document.getElementById("popupOverlay7");
        msg.style.display = "flex"; 

        setTimeout(function() {
            msg.style.display = "none";
        }, 10000); // 14000 milissegundos = 14 seg
        document.getElementById("bloqueado").style.visibility = 'hidden';
        document.getElementById("desbloqueado").style.visibility = 'visible';

        setTimeout(function() {
            document.getElementById("desbloqueado").style.visibility = 'hidden';
            document.getElementById("abrir").style.visibility = 'visible';
        }, 12000);
        
        setTimeout(function(){
            document.getElementById("abrir").style.visibility = 'hidden';
            abrirPopup8();
        }, 13000);

    }        
    
};

function abrirPopup8(){
    let senhaDigitada3 = document.getElementById("senhaInput3").value;
    if (senhaDigitada3 == senhaCorreta3){ 
        let msg = document.getElementById("popupOverlay8");
        msg.style.display = "flex"; 
    }
}

function verificarSenha() {

    let mensagemErro = document.getElementById("mensagemErro");
    let senhaDigitada1 = document.getElementById("senhaInput1").value;
    if (senhaDigitada1 == senhaCorreta1) {
        document.getElementById("popupOverlay2").style.display = "none";
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
        document.getElementById("bloqueado").style.visibility = 'visible';
    } else {
        mensagemErro.textContent = "Senha incorreta, tenta de novo bebê";
    }
}

function verificarSenha2() {

    let mensagemErro2 = document.getElementById("mensagemErro2");
    let senhaDigitada2 = document.getElementById("senhaInput2").value;
    if (senhaDigitada2 == senhaCorreta2) {
        document.getElementById("popupOverlay5").style.display = "none";
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
        document.getElementById("bloqueado").style.visibility = 'visible';
    } else {
        mensagemErro2.textContent = "Dá uma pesquisadinha rápida pre";
    }
}

function tocarAudio(){
    let senhaDigitada3 = document.getElementById("senhaInput3").value;
    const player = document.getElementById("audioPlayer");
    if (senhaDigitada3 == senhaCorreta3) {
        document.getElementById("audioPlayer").style.display = "flex";
        player.play();
    }
}

function verificarSenha3() {
    let mensagemErro3 = document.getElementById("mensagemErro3");
    let senhaDigitada3 = document.getElementById("senhaInput3").value;
    if (senhaDigitada3 == senhaCorreta3) {
        document.getElementById("popupOverlay6").style.display = "none";
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
        document.getElementById("bloqueado").style.visibility = 'visible';
        tocarAudio();
        abrirPopup7();
    } else {
        mensagemErro3.textContent = "Pensa mais um pouquinho gatinha";
    }
}

function fecharCarta(){
    let msg = document.getElementById("popupOverlay8");
        msg.style.display = "none";    
    document.getElementById("voltarTudo").style.visibility = 'visible';
    frase = document.getElementById("frase").textContent = "PAraBÉns bebê!!! Sempre acertando👏👏"
    document.getElementById("abrirPopup").style.visibility = 'hidden';
    document.getElementById("abrirPopup2").style.visibility = 'hidden';
    document.getElementById("abrirPopup3").style.visibility = 'hidden';
    document.getElementById("abrirPopup4").style.visibility = 'hidden';
    document.getElementById("abrirPopup5").style.visibility = 'hidden';
    document.getElementById("abrirPopup6").style.visibility = 'hidden';
    document.getElementById("abrirPopup7").style.visibility = 'hidden';
    document.getElementById("abrirPopup8").style.visibility = 'hidden';    
}

function voltarAoInicio() {
    window.location.href = "index.html";
};



