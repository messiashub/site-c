// Scroll suave

// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

// Identificando o clique no menu

let menuItens = document.querySelectorAll(".menu a");

/* console.log(menuItens); */ // verificando se encontrou

// Verificando se foi clicado

menuItens.forEach(item => {
    console.log(item);
    item.addEventListener('click', scrollTopo);   // Adicionando evento de click
})

function scrollTopo(evento) {
    evento.preventDefault();
    console.log('Clicou'); // verificando se foi clicado
    console.log(evento.target);  // Pegando o evento target de cada id
    /* let element = evento.target; */
    console.log(evento);
    let paraTopo = pegarElementoPeloHref(evento.target);

    scrollParaPosicao(paraTopo)


}

function pegarElementoPeloHref(element) {
    let id = element.getAttribute('href');  // Pegando o valor de href
    console.log(id);
    return document.querySelector(id).offsetTop; // descobrindo a posição do id em relação ao topo da página
    console.log(paraTopo.offsetTop); 
    console.log(paraTopo); 
 
}


function scrollParaPosicao(paraTopo) {
    /* window.scroll({
        top: paraTopo,
        behavior: "smooth",
    }) */;

    smoothScrollTo(0, paraTopo,)  // Usando a segunda alternativa

}

// botao

 
/* let botao = document.querySelector('.sobe a img');
console.log(botao);


let coordenadas = botao.getBoundingClientRect();

console.log(coordenadas);

if(coordenadas.y === 782){
    alert('chegou');

} */

//botao.addEventListener("click",/* botaoTopo */smoothScrollTo();

/* smoothScrollTo(0,botao,) */


/* function botaoTopo(evento){
    console.log('clicou');
    console.log(evento);
    console.log(evento.target);
    let topoBotao = pegarHref(evento.target); 

    scrollPosicao(topoBotao);
}

function pegarHref(element){
    let id2 = element.getAttribute('href');
    console.log(id2);
    return document.querySelector(id2).offsetTop;
    console.log(topoBotao);
 


}*/

/* function scrollPosicao(topoBotao){
   /*  window.scroll({
        top:topoBotao,
        behavior:"smooth"

    }) 
    */
    //smoothScrollTo(0,topoBotao,)


  

// Alternativa 2

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 2000;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};


/* window.onscroll =  function(){
scroll();
}

 function scroll(){
    let btn = document.getElementById('botao')
    if(document.documentElement.scrollTop > 50){
        btn.style.display="block";

    }else{
        btn.style.display="none";
    }
}
function paraTopo(){
    document.documentElement.scrollTop = 0;
} 
  */
 