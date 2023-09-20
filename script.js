// Criando a função toggleMode
function toggleMode() {
    const html = document.documentElement // Acessando o documento html

    // if (html.classList.contains('light')) { /* Verificando se no html consta uma classe light */
    //     html.classList.remove('light') /* Se ja possuir, ele remove */
    // }else{
    //     html.classList.add('light') /* Se não possuir ele adiciona */
    // }

    // Maneira simplificada de fazer a estruturação de decisão acima
    html.classList.toggle('light')

    //Substituindo a imgagem de acordo com o modo
    const img = document.querySelector("#profile img") /* Aqui estamos selecionando a tag html onde contem a imagem */

    if(html.classList.contains('light')) { /* Verificando se no html consta uma classe light */
        img.getAttribute('src', './assets/avatar.png') /* Se sim, ele adiciona a classe light */
    }else{
        img.setAttribute('src', './assets/avatar.png') /* Se não ele mantem a padrão */
    }
}