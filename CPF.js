const compose = require('compose-function');

const returnDigit = digit =>                                                            /* Retorna um dígito válido. */
    (digit > 9) ? 0 : digit;
        
const digit = total =>                                                                  /* Calcula o dígito com base no total obtido para o segmento. */
    11 - (total % 11);

const digitCalc = multiplier => (result, position) =>                                   /* Retorna o produto dos dígitos por sua posição. */
    result + position * multiplier--;
   
const total = (segment, multiplier) =>                                                  /* Calcula o valor total para o segmento. */
    segment.reduce(digitCalc(multiplier), 0);

const segmentCalc = (segment, multiplier) =>                                            /* Retorna o dígito calculado a partir do segmento informado. */
    compose(returnDigit, digit, total)(segment, multiplier);

const segmentIsValid = segment =>                                                       /* Verifica se o segmento calculado é válido. */
    segment.digit == segmentCalc(segment.part, segment.part.length + 1);

const isValid = cpf =>                                                                  /* Retorna se o campo do dígito verificador é válido. */
    cpf.reduce((result, current) =>                                                     // << Faz uma iteração desnecessára!
        result && segmentIsValid(current), true
    ); 

const part = (cpf, index) =>                                                            /* Separa o CPF em dois segmentos. */
    ({part: cpf.substr(0, index).split(''), digit: Number(cpf.charAt(index))});

const segment = cpf =>                                                                  /* Returna se dígito verificador informado é válido. */
    ([part(cpf, 9),part(cpf, 10)]);

const isBadSizedOrRepeated = input =>                                                   /* Verifica se o CPF informado é longo demais ou um único dígito repetido. */ 
    input.length != 11 || /^(\d)\1{10}/.test(input);
 
const validInput = cpf =>                                                               /* Faz a primeira verificação do tamanho e conteúdo do CPF informado. */
    !isBadSizedOrRepeated(cpf) && compose(isValid, segment)(cpf);

const formatInput = input =>                                                            /* Mantém apenas os valores númericos do CPF informado. */
    input.replace(/\D/g, '');

const validateInput = compose(validInput, formatInput);

module.exports.validarCPF = input =>                                                    /* Retorna se o CPF informado é válido, ou falso, se nada for informado. */
    (!input) ? false : validateInput(input);