const SEXO = {
    MASCULINO: 'Masculino',
    FEMININO: 'Feminino'
};

const sexoValido = sexo =>
    Object.values(SEXO).includes(sexo);

module.exports = {
    SEXO,
    sexoValido
};