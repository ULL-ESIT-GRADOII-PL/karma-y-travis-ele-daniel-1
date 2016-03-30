var chai = require('chai');
var temp = require("../assets/js/temperatura");

var assert = chai.assert;

describe('Regex', function() {
    describe('Celsius', function () {
        it('should match any substring of "Celsius"', function () {
            var medida = new temp.Celsius();
            assert.notEqual(false, medida.check("Celsius"));
            assert.notEqual(false, medida.check("Celsi"));
            assert.notEqual(false, medida.check("Cel"));
            assert.notEqual(false, medida.check("C"));
            assert.notEqual(false, medida.check("c"));
            assert.notEqual(false, medida.check("cElSi"));

        });
    });

    describe('Kelvin', function () {
        it('should match any substring of "Kelvin"', function () {
            medida = new temp.Kelvin();
            assert.notEqual(false, medida.check("Kelvin"));
            assert.notEqual(false, medida.check("Kel"));
            assert.notEqual(false, medida.check("K"));
            assert.notEqual(false, medida.check("k"));
            assert.notEqual(false, medida.check("kElVi"));
        });
    });

    describe('Fahrenheit', function () {
        it('should match any substring of "Fahrenheit"', function () {
            medida = new temp.Kelvin();
            assert.notEqual(false, medida.check("Kelvin"));
            assert.notEqual(false, medida.check("Kel"));
            assert.notEqual(false, medida.check("K"));
            assert.notEqual(false, medida.check("k"));
            assert.notEqual(false, medida.check("kElVi"));
        });
    });
});

describe('Conversions', function() {
    describe('Celsius', function () {
        var medida = new temp.Celsius(0);
        it('toFahrenheit"', function () {
            assert.equal(32, medida.toFahrenheit());
        });

        it('toKelvin"', function () {
            assert.equal(273, medida.toKelvin());
        });
    });
    describe('Kelvin', function () {
        var medida = new temp.Kelvin(273);
        it('toFahrenheit"', function () {
            assert.equal(32, medida.toFahrenheit());
        });

        it('toCelsius"', function () {
            assert.equal(0, medida.toCelsius());
        });
    });
    describe('Fahrenheit', function () {
        var medida = new temp.Fahrenheit(32);
        it('toCelsius"', function () {
            assert.equal(0, medida.toCelsius());
        });

        it('toKelvin"', function () {
            assert.equal(273, medida.toKelvin());
        });
    });
});
