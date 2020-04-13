const { validarCPF } = require('../');

test('Testes com números de CPF válidos', () => {

    expect(validarCPF('92731432454')).toBeTruthy();
    expect(validarCPF('42132642702')).toBeTruthy();

});

test('Testes com números de CPF inválidos', () => {

    expect(validarCPF('00000000000')).toBeFalsy();
    expect(validarCPF(undefined)).toBeFalsy();

});