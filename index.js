const { validarCEP } = require('./CEP');
const { validarCPF } = require('./CPF');
const { validatorUUID } = require('./UUID');
const { nascimentoValido } = require('./Nascimento');
const { tamanhoMinimo } = require('./Texto');
const { sexoValido, SEXO } = require('./Sexo');
const { incapacidadeValida, INCAPACIDADE } = require('./IncapacidadeLegal');
const { identidadeGeneroValida } = require('./IdentidadeGenero');

module.exports = {
    validarCEP,
    validarCPF,
    validatorUUID,
    nascimentoValido,
    tamanhoMinimo,
    sexoValido,
    SEXO,
    incapacidadeValida,
    INCAPACIDADE,
    identidadeGeneroValida
};