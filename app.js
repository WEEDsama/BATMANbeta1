function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value //cria uma string para separar pesquisa

  //se campoPesquisa estiver vazio
  if(campoPesquisa =="") {
    section.innerHTML = "nada foi encontrado"
    return
  }

campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let titulo = "";
  let descricao = "";
  let tags = "";

  
  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    //se no dado título includes campoPesquisa
    if (titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a href=${dado.game} target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Saiba Mais</a>
          </div>
         `;
    }
  }

  if (!resultados) {
    resultados = "<p>Não há este jogo AINDA!!</p>"
  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}