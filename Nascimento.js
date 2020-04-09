const moment = require('moment');

exports.nascimentoValido = data => {
    return moment(data).isValid() && moment(data).isSameOrBefore() && moment(data).isAfter('1900-01-01');
};