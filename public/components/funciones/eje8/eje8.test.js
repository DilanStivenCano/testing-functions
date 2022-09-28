"use strict";
const calificadorFn = require('./eje8');
test('falló', () => {
    let Ideas = [];
    expect(calificador(Ideas)).toBe('falló');
});
test('publicar', () => {
    let Ideas = [];
    expect(calificador(Ideas)).toBe('publicar');
});
test('fantástico', () => {
    let Ideas = [];
    expect(calificador(Ideas)).toBe('fantástico');
});
