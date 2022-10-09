const calculateNumberFrequency = require('./kayak.js')


test('Given a list of integers , print appearance frequency of each number in the list.', () => {
    const array = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];
    expect(calculateNumberFrequency(array)).toEqual({
        Frequency: [5, 1, 2, 2, 2, 0, 1, 1],
        Number: [1, 2, 3, 4, 5, 6, 7, 8]
    })
})