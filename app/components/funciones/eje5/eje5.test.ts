const containFn = require('./eje5');

test('Check includes', () => {
    let arre1 = [1, 2, 3, 4, 5];
    let arre2 = [2, 3, 6];

    expect(contain(arre1,arre2)).toEqual(true);
})