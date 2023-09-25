const nome = document.getElementById("nome");
const matricula = document.getElementById("matricula");
const notaUm = document.getElementById("nota-um");
const notaDois = document.getElementById("nota-dois");
const formulario = document.querySelector("form");

const tabela = document.getElementById("tabela-cadastro");

formulario.addEventListener("submit", event => {
    event.preventDefault();
    if (
        nome.value.trim() === "" ||
        matricula.value.trim() === "" ||
        notaUm.value.trim() === "" ||
        notaDois.value.trim() === ""
    ) {
        alert("Você deve preencher por completo.");
        return; 
    }

    alert("Cadastro realizado com sucesso.")
    tabela.style.display = "inline";
    const valorNome = nome.value;
    const valorMatricula = matricula.value;
    const valorNotaUm = notaUm.value;
    const valorNotaDois = notaDois.value;
    const media = (parseFloat(valorNotaUm) + parseFloat(valorNotaDois)) / 2;
    //Identificação da tabela.
    const novaLinha = tabela.insertRow();
    const colunaNome = novaLinha.insertCell(0);
    const colunaMatricula = novaLinha.insertCell(1);
    const colunaNotaUm = novaLinha.insertCell(2);
    const colunaNotaDois = novaLinha.insertCell(3);
    const colunaMedia = novaLinha.insertCell(4);
    //Adicionando ao Html
    colunaNome.innerHTML = valorNome;
    colunaMatricula.innerHTML = valorMatricula;
    colunaNotaUm.innerHTML = valorNotaUm;
    colunaNotaDois.innerHTML = valorNotaDois;
    colunaMedia.innerHTML = media;
    //limpar os campos para que o usuario digite novamente 
    formulario.reset();
})