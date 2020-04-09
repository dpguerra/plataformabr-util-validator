const fetch = require('node-fetch');

/* Verifica se o CEP informado é longo demais ou um único dígito repetido. */
const isBadSizedOrRepeated = input => {
        
    const regex = /^(\d)\1{7}/;
    return input.length != 8 || regex.test(input);

};

/* Recupera e retorna o resto do endereço. */
const isValid = cep => {

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8' 
        }
    };

    return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            if (data.erro)
                data = { erro: 'CEP inválido'};
            return data;
        });
};

/* Retorna se o CEP informado é válido e retorna o restante do endereço. */
module.exports.validarCEP = input => {
    
    const cep = input
        .replace(/\D/g, '');

    return !isBadSizedOrRepeated(cep) && isValid(cep);
};