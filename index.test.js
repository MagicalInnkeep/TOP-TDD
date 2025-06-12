import {capitalize, reverseString} from './index.js'

//capitalize tests

it('happy test 1', () =>
    expect(capitalize("test1"))
.toBe("Test1"));

it('happy test 2', () =>
    expect(capitalize("blackbird"))
.toBe("Blackbird"));

it('special char', () =>
    expect(capitalize("~blackbird"))
.toBe("~blackbird"));

it('no string', () =>
    expect(capitalize(""))
.toBe(""));

//reverse string
it('happiest test', () =>
    expect(reverseString("rotator"))
.toBe("rotator"));
