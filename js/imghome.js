
var nImagem = 0;
var imagens = [];
var segs = 2; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "image/teste0.jpg";
imagens[1] = "image/teste1.jpg";
imagens[2] = "image/teste2.jpg";
//...

function rodarImagens() {
   document.querySelector(".news-img").src = imagens[nImagem];
   nImagem = nImagem + 1;

   if (nImagem >= imagens.length)
      nImagem = 0;

   setTimeout("rodarImagens()", segs * 1000);
}

rodarImagens();
