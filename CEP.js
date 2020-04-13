const fetch = require('node-fetch');
const compose = require('compose-function');

const url = cep => `https://viacep.com.br/ws/${cep}/json/`;                             /* Serviço externo para validação do CEP. */
const options = {                                                                       /* Configuração para aciionamento do serviço. */
    method: 'GET', 
    mode: 'cors', 
    headers: {
        'content-type': 'application/json;charset=utf-8'
    }
};

const isBadSizedOrRepeated = input =>                                                   /* Verifica o tamanho e composição do CEP informado. */
    input.length != 8 || /^(\d)\1{7}/.test(input);

/* Recupera e retorna o resto do endereço. */
const isValid = cep =>                                                                  /* Valida o CEP em uma fonte externa */
    fetch(url(cep), options)
        .then(response => response.json())
        .then(data => {
            if (data.erro)
                return false;
            return true;
        });

const validInput = cep =>                                                               /* Processo de validação do CEP informado. */
    !isBadSizedOrRepeated(cep) && isValid(cep) || Promise.resolve(false);

const formatInput = input =>                                                            /* Deixa apenas os dígitos do CEP informado. */
    input.replace(/\D/g, '');

const validateInput = compose(validInput, formatInput);

module.exports.validarCEP = input =>                                                    /* Retorna se o CEP informado é válido através de uma Promise. */
    (!input) ? Promise.resolve(false) : validateInput(input);