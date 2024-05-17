import { adicionarCalculoAoHistorico, exibirHistorico } from './history.js';

$(document).ready(function () {
    const displayText = $('#displayText');
    let currentInput = [];
    let historico = [];
    let calculoRealizado = false;

    $('#buttons button').click(function () {
        const value = $(this).text();

        if (value === 'C') {
            currentInput = [];
        } else if (value === 'Corrigir') {
            currentInput.pop();
        } else if (value === '=') {
            if (!calculoRealizado) {
                try {
                    const expressao = currentInput.join('').replace(',', '');
                    const resultado = eval(expressao);
                    const calculo = `${expressao} = ${resultado}`;
                    adicionarCalculoAoHistorico(calculo);
                    currentInput = [resultado.toString()];
                    calculoRealizado = true;
                } catch {
                    currentInput = ['Erro'];
                }
            }
        } else {
            if (currentInput.length === 1 && currentInput[0] === '0' && !isNaN(value)) {
                currentInput = [value];
            } else {
                currentInput.push(value);
            }
            calculoRealizado = false;
        }

        displayText.text(currentInput.join('') || '0');
    });

    $('#history').click(function () {
        $('#historyModal').show();
        exibirHistorico();
    });

    $('#closeModal').click(function () {
        $('#historyModal').hide();
    });

    $(window).click(function (event) {
        if ($(event.target).is('#historyModal')) {
            $('#historyModal').hide();
        }
    });
});
