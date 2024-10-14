 // Função JavaScript para abrir o link do Instagram
 function abrirInstagram() {
  window.open("https://www.instagram.com/taianelichtenecker/", "_blank", "noopener,noreferrer");
}

let produtos = document.querySelectorAll(".produtos ul li");
 function clicaProdutos(){
  produtos.forEach((produto)=>{
    produto.addEventListener("click", function(){
      let link = produto.querySelector("a");
      if(link){
        window.open(link.href, '_self')
      }
    })
 })
}
 clicaProdutos(); 