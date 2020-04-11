const INCAPACIDADE = {
    MENOR: ['Menor'],
    COGNITIVA: ['Congnitiva'],
    MOTORA: ['Motora'],
    DEPENDENTE: ['Dependente']
};

const incapacidadeValida = incapacidade => {
    return Object.values(INCAPACIDADE).includes(incapacidade);
};

module.exports = {
    INCAPACIDADE,
    incapacidadeValida
};