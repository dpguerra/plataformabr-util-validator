const INCAPACIDADE = {
    MENOR: ['Menor'],
    COGNITIVA: ['Congnitiva'],
    MOTORA: ['Motora'],
    DEPENDENTE: ['Dependente']
};

const incapacidadeValida = incapacidade => 
    Object.values(INCAPACIDADE).includes(incapacidade);

module.exports = {
    INCAPACIDADE,
    incapacidadeValida
};