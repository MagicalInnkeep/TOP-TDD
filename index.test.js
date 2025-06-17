import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './index.js'

//capitalize tests

it('capitalize: happy test 1', () =>
    expect(capitalize("test1"))
.toBe("Test1"));

it('capitalize: happy test 2', () =>
    expect(capitalize("blackbird"))
.toBe("Blackbird"));

it('capitalize: special char', () =>
    expect(capitalize("~blackbird"))
.toBe("~blackbird"));

it('capitalize: no string', () =>
    expect(capitalize(""))
.toBe(""));

//reverse string
it('reverseString: happiest test', () =>
    expect(reverseString("rotator"))
.toBe("rotator"));

it('reverseString: no string', () =>
    expect(reverseString(""))
.toBe(""));

it('reverseString: real test', () =>
    expect(reverseString("elevator"))
.toBe("rotavele"));

//calculator
it('calculator: add ints', () =>
    expect(calculator.add(10,0))
.toBe(10));

it('calculator: add ints', () =>
    expect(calculator.add(10,5))
.toBe(15));

it('calculator: add doubles', () =>
    expect(calculator.add(10.4,5.32))
.toBe(15.72));

it('calculator: substract int', () =>
    expect(calculator.substract(10,0))
.toBe(10));

it('calculator: substract int', () =>
    expect(calculator.substract(10,5))
.toBe(5));

it('calculator: substract doubles', () =>
    expect(calculator.substract(10.4,5.32))
.toBe(5.08));

it('calculator: substract to negative', () =>
    expect(calculator.substract(5,10))
.toBe(-5));

it('calculator: multiply int', () =>
    expect(calculator.multiply(10,0))
.toBe(0));

it('calculator: multiply int', () =>
    expect(calculator.multiply(10,5))
.toBe(50));

it('calculator: multiply doubles', () =>
    expect(calculator.multiply(10.4,5.32))
.toBe(55.328));

it('calculator: divide int', () =>
    expect(calculator.divide(10,0))
.toBe("DivBy0"));

it('calculator: divide int', () =>
    expect(calculator.divide(10,5))
.toBe(2));

it('calculator: divide doubles', () =>
    expect(calculator.divide(10.4,5.32))
.toBeCloseTo(1.954887,5));

//caesarCipher

it('caesarCipher happy test', () =>
    expect(caesarCipher('happy',0))
.toBe('HAPPY'));

it('caesarCipher another happy test', () =>
    expect(caesarCipher('happy',26))
.toBe('HAPPY'));

it('caesarCipher regular test', () =>
    expect(caesarCipher('happy',3))
.toBe('KDSSB'));

it('caesarCipher non chars', () =>
    expect(caesarCipher('happy!',3))
.toBe('KDSSB!'));

//AnalyzeArray

it('analyze Array', () => 
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4,   min: 1,    max: 8,    length: 6}));
it('analyze Array', () => 
    expect(analyzeArray([10,3,4,7,2,6,9])).toEqual({average: 5.857142857142857,   min: 2,    max: 10,    length: 7}));