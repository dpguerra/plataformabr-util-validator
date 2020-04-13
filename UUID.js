const validate = require('uuid-validate');

const validatorUUID = uuid => 
    validate(uuid, 4);

module.exports = {
    validatorUUID
};