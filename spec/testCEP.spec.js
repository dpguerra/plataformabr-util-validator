const { validarCEP } = require('../');

test('Testes com números de CEP válidos', () => {
    return validarCEP('22631030').then(result =>
        expect(result).toBeTruthy()
    );
});

test('Testes com números de CEP inválidos', () => {
    return validarCEP('1234500').then(result =>
        expect(result).toBeFalsy()
    );
});