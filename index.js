const { validarCEP } = require('./CEP');
const { validarCPF } = require('./CPF');
const { validatorUUID } = require('./UUID');
const { nascimentoValido } = require('./Nascimento');
const { tamanhoMinimo } = require('./Texto');
const { sexoValido, SEXO } = require('./Sexo');
const { identidadeGeneroValida } = require('./IdentidadeGenero');

module.exports = {
    validarCEP,
    validarCPF,
    validatorUUID,
    nascimentoValido,
    tamanhoMinimo,
    sexoValido,
    SEXO,
    identidadeGeneroValida
};