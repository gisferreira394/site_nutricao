
function filtrar() {
    let input = document.getElementById("barraPesquisa");
    let filtro = input.value.toLowerCase();
    let lista = document.getElementById("lista");
    let itens = lista.getElementsByTagName("li");

    for (let item of itens) {
        let texto = item.textContent.toLowerCase();

        if (texto.includes(filtro)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }}}