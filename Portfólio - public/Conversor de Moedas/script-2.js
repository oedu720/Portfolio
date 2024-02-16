function changeImage(){
    const larguraJanela = window.innerWidth;
    const imagem = document.getElementById('big-image');

    if (larguraJanela < 500){
        imagem.src = 'economia-3.avif';
    } 
    else{
        imagem.src = 'economia-2.webp';
    }
}window.addEventListener('resize', function() {
    changeImage();
})
