export function adicionarCalculoAoHistorico(calculo) {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];

    historico.push(calculo);

    localStorage.setItem("historico", JSON.stringify(historico));
}


export function exibirHistorico() {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    let historicoElement = $('#scrollable-list ul');

    historicoElement.empty();

    historico.forEach(calculo => {
        let li = $('<li>').text(calculo);
        historicoElement.append(li);
    });
}
