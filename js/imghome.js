
var nImagem = 0;
var num;
var imagens = [];
var segs = 2; // mudar imagem x em x segundo


// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "image/teste0.jpg";
imagens[1] = "image/teste1.jpg";
imagens[2] = "image/teste2.jpg";
imagens[3] = "image/teste3.jpg";
imagens[4] = "image/teste4.jpg";

//...

//Coleta as cores anteriores de <a>
opcoes = document.querySelectorAll(".op");
corFundoPadrao = opcoes[0].style.backgroundColor;
corFontePadrao = opcoes[0].style.color;


function rodarImagens() {
    document.querySelector(".news-img").src = imagens[nImagem];
    opcoes[nImagem].style.backgroundColor = "#eee";
    opcoes[nImagem].style.color = "#333";

    if(nImagem == 0){
      num = imagens.length - 1;
    }else{
      num = nImagem - 1;
    }
    opcoes[num].style.backgroundColor = corFundoPadrao;
    opcoes[num].style.color = corFontePadrao;

    nImagem = nImagem + 1;

    if (nImagem >= imagens.length){
      nImagem = 0;
    }

    setTimeout("rodarImagens()", segs * 1000);
}

rodarImagens();

function trocarImagem(id){
    document.querySelector(".news-img").src = imagens[id];
    nImagem = id;
}
