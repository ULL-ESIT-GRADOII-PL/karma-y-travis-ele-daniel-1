var xregexp = require('xregexp');
var temperatura = require('./medida');

(function(exports) {
    "use strict";
    document.getElementById('convert').addEventListener('input', main);
    function main() {
        var valor     = document.getElementById('convert').value,
            elemento  = document.getElementById('converted');
        elemento.innerHTML = temperatura.Medida.convertir(valor);
        return false;
    }
})(this);
