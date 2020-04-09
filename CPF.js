/* Verifica se o CPF informado é longo demais ou um único dígito repetido. */
const isBadSizedOrRepeated = input => {
        
    const regex = /^(\d)\1{10}/;
    return input.length != 11 || regex.test(input);

};

/* Retorna o produto dos dígitos por sua posição. */
const digitCalc = multiplier => (result, position) =>
    result + position * multiplier--;

/* Retorna o dígito calculado a partir do segmento informado. */
const segmentCalc = (segment, multiplier) => {
    
    let total = segment.reduce(digitCalc(multiplier), 0);
    let digit = 11 - (total % 11);
    return (digit > 9) ? 0 : digit;

};

/* Verifica se o segmento calculado é válido. */
const segmentIsValid = segment => 
    segment.digit == segmentCalc(segment.part, segment.part.length + 1);

/* Retorna se o campo do dígito verificador é válido. */
const fieldIsValid = field => 
    field.reduce((result, current) => result && segmentIsValid(current), true); // << Faz uma iteração desnecessára!

/* Returna se dígito verificador informado é válido. */
const isValid = input => {

    const cpf = [
        {
            part: input.substr(0, 9).split(''),
            digit: Number(input.charAt(9))
        },
        {
            part: input.substr(0, 10).split(''),
            digit: Number(input.charAt(10))
        }
    ];

    return fieldIsValid(cpf);

};

/* Retorna se o CPF informado é válido. */
module.exports.validarCPF = input => {
    
    if (!input)
        return false;

    const cpf = input
        .replace(/\D/g, '');

    return !isBadSizedOrRepeated(cpf) && isValid(cpf);
};