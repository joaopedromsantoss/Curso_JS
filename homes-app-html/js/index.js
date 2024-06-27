const imoveis = buscarTodosImoveis()
function criarImovelHtml(imovel){
    const section = document.createElement("section")
    section.setAttribute("class", "listing")

    // section imagem
    const img = document.createElement("img")
    img.setAttribute("class", "listing-photo")
    img.setAttribute("src", imovel.url_foto)
    section.appendChild(img)

    // section nome
    const h2 = document.createElement("h2")
    h2.setAttribute("class", "listing-heading")
    h2.textContent = imovel.nome
    section.appendChild(h2)
    
    // section cidade
    const p = document.createElement("p")
    p.setAttribute("class", "listing-location")
    p.textContent =`${imovel.cidade }, ${imovel.estado}`
    section.appendChild(p)

    // section veja mais
    const a = document.createElement("a")
    a.textContent = "Veja mais"
    section.appendChild(a)
    const url = `detalhes.html?imovelId=${imovel.id}`
    a.setAttribute("href", url)

    //section favorito
    const favorito = document.createElement("img")
    const favId = `fav-${imovel.id}`
    favorito.setAttribute("id", favId)
    favorito.setAttribute("src", "img/desfavorito.png")
    favorito.setAttribute("class", "favorito")
    favorito.setAttribute("onclick", `favoritar(${JSON.stringify(imovel)})`)
    section.appendChild(favorito)    

    // section pai
    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)

}

function filtrar_imoveis(){
    const pesquisa = document.getElementById("pesquisa").value
    listarImoveisComFiltro(pesquisa)
}

function listarImoveisComFiltro(texto) {

    const casaFiltro = document.getElementById("ImCasa").checked
    const apartamentoFiltro = document.getElementById("ImApartamento").checked

    const mostarTodos = !casaFiltro && !apartamentoFiltro
    
    limparListaImoveis()
    
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i];
            
            const textoM = removerAcentos(texto.toUpperCase())
            const estadoImovelM = removerAcentos(imovel.estado.toUpperCase())
            const cidadeImovelM = removerAcentos(imovel.cidade.toUpperCase())

            const tipoImovelM = imovel.tipoImovel.toLowerCase()

            if (mostarTodos || (casaFiltro && tipoImovelM == "casa") || (apartamentoFiltro && tipoImovelM == "apartamento")) {
                   
                if (texto == "" || cidadeImovelM.search(textoM) == 0 || estadoImovelM.search(textoM) == 0) {
                //aparecer na página 
                criarImovelHtml(imovel)
                }
            }

        }   
    }


function mostarTodosOsImovies() { 
    for (let i=0; i < imoveis.length; i++) {
        const imovel = imoveis[i]
        criarImovelHtml(imovel)
    }

}

function limparListaImoveis() {
    const sectionResults = document.getElementById("lista-imoveis")

    while (sectionResults.lastElementChild) {
        sectionResults.removeChild(sectionResults.lastElementChild)
    }
}

function filtrarComEnter(tecla) {
    if (tecla.keyCode == 13) {
        tecla.preventDefault()
        filtrar_imoveis()
    }
}

mostarTodosOsImovies()

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

}

function favoritar(imovel) {
    const favId = `fav-${imovel.id}`
    const fav = document.getElementById(favId)

    if (fav.getAttribute("src") == "/img/favorito.png") {
        fav.setAttribute("src", "/img/desfavorito.png")
    } else {
        fav.setAttribute("src", "/img/favorito.png")
    }
}



