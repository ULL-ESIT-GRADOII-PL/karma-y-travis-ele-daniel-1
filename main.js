webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var xregexp = __webpack_require__(2);
	var temperatura = __webpack_require__(11);
	
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


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var XRegExp     = __webpack_require__(2);
	var temperatura = __webpack_require__(12);
	
	(function(exports) {
	    "use strict";
	
	    function Medida(valor,tipo) {
	        if (!tipo) {
	            var param = XRegExp(""
	                                + "(?<value>       [-+]?\\d+ (?:[\\.,]\\d*)?\\s* ) # Get number \n"
	                                + "((e(?<exponent> [-+]?\\d+)\\s*)?)               # Get Exponent \n"
	                                + "(?<measure>     [a-zA-Z]+)                      # Get kind");
	            var m = XRegexExp.exec(valor, param);
	            this.valor = parseFloat(m.value) * Math.pow(10, parseInt(m.exponent));
	            this.tipo  = m.measure;
	        }
	        else {
	            this.valor = parseFloat(valor);
	            this.tipo  = tipo;
	        }
	
	    }
	
	    Medida.match = function (input) {
	            var measures = '[a-z]+';
	            var inputRegex = XRegExp(
	                '^(\\s*)                                                  # whitespaces \n'
	                    + '(?<value>       [-+]?\\d+ (?:[\\.,]\\d*)?\\s*)     # captures the number   \n'
	                    + '((e(?<exponent> [-+]?\\d+)\\s*)?)                  # captures the exponent \n'
	                    + '(?<tipo>       ' + measures + ')                   # Capture kind of value \n'
	                    + '((?:\\s+to)?\\s+ (?<destino>' + measures + '))?    # Get "to" syntax \n'
	                    + '(\\s*)$                                            # whitespaces \n'
	                , 'xi');
	
	            return XRegExp.exec(input, inputRegex);
	    };
	
	    Medida.medidas = {};
	
	    Medida.convertir = function(valor) {
	        var measures = Medida.medidas;
	
	        measures.c = temperatura.Celsius;
	        measures.f = temperatura.Fahrenheit;
	        measures.k = temperatura.Kelvin;
	
	        var match = Medida.match(valor);
	
	        if (match) {
	            var numero = match.value,
	                tipo   =  match.tipo,
	                destino = match.destino;
	            //try {
	                var source = new measures[tipo[0].toLowerCase()](numero);  // new Fahrenheit(32) //asumimos que la priemra letra es el tipo correcto
	                var target = "to"+measures[destino[0].toLowerCase()].name; // "toCelsius"
	                var checkTarget = new measures[destino[0].toLowerCase()](0);
	                if(!source.check(tipo) || !checkTarget.check(destino)) {
	                  throw "Error de tipos";
	                }
	                return source[target]().toFixed(2) + " "+target; // "0 Celsius"
	            //}
	            /*catch(err) {
	                return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"' + err;
	            }*/
	        }
	        else
	            return "Introduzca una temperatura valida: 330e-1 F to C";
	    };
	
	    exports.Medida = Medida;
	})(this);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var medida = __webpack_require__(11);
	
	(function(exports) {
	    "use strict";
	
	    function Temperatura(valor, tipo) {
	        medida.Medida.call(this, valor, tipo);
	    }
	
	    function Celsius(valor) {
	        Temperatura.call(this, valor, "c");
	    }
	
	    Celsius.prototype = {
	        name: "Celsius",
	
	        check: function(tipo) {
	          return tipo.match(/(^c(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?$)/i);
	        },
	
	        toFahrenheit: function() {
	            return ((this.valor * 9/5)+32);
	        },
	
	        toCelsius: function() {
	            return this.valor;
	        },
	
	        toKelvin: function() {
	          return this.valor + 273;
	        }
	    };
	
	    function Fahrenheit(valor) {
	        Temperatura.call(this, valor, "f");
	    }
	
	    Fahrenheit.prototype = {
	        name: "Fahrenheit",
	
	        check: function(tipo) {
	          return tipo.match(/(^f(?:a(?:h(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)?$)/i);
	        },
	
	        toCelsius: function() {
	            return ((this.valor - 32)*5/9);
	        },
	
	        toFahrenheit: function() {
	            return this.valor;
	        },
	
	        toKelvin: function() {
	          return this.toCelsius(this.valor) + 273;
	        }
	    };
	
	    function Kelvin(valor) {
	        Temperatura.call(this, valor, "k");
	    }
	
	    Kelvin.prototype = {
	        name: "Kelvin",
	
	        check: function(tipo) {
	          return tipo.match(/(k(?:e(?:l(?:v(?:i(?:n)?)?)?)?)?)/i);
	        },
	
	        toKelvin: function() {
	            return this.valor;
	        },
	
	        toCelsius: function() {
	            return ((this.valor) - 273);
	        },
	
	        toFahrenheit: function() {
	            return ((this.toCelsius(this.valor) * 9/5)+32);
	        }
	    };
	
	    exports.Temperatura = Temperatura;
	    exports.Celsius = Celsius;
	    exports.Fahrenheit = Fahrenheit;
	    exports.Kelvin = Kelvin;
	
	})(this);


/***/ }
]);
//# sourceMappingURL=main.js.map