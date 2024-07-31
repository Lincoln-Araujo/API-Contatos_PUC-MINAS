import { validate } from 'jsonschema';
import { pessoaSchema } from './schemas';

var obj = {
  "nome": "Francis Ford Copolla",
    "email": "copolla@hollywood.com",
    "telefone": "001-124-2111",
    "organizacao" : null,
    "tags": [
      "cinema",
      "trabalho"
    ]
}

var result = validate(obj, pessoaSchema);
console.log(result);