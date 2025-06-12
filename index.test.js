import {capitalize, reverseString} from './index.js'

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