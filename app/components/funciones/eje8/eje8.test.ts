const calificadorFn = require('./eje8');

test('falló', () =>{
    let Ideas: string[] = [];
    expect(calificador(Ideas)).toBe('falló');
});

test('publicar', () =>{
    let Ideas: string[] = [];
    expect(calificador(Ideas)).toBe('publicar');
});

test('fantástico', () =>{
    let Ideas: string[] = [];
    expect(calificador(Ideas)).toBe('fantástico');
});