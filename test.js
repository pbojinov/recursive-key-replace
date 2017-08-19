import test from 'ava';
import recursiveKeyReplace from './';

test('nested object keys are replaced correctly with underscore', t => {
    const input = {
        'a.a': {
            'nee.cc': 'sdkfhkj'
        },
        'b.b': 'anotherProp'
    };
    const expectedResult = {
        a_a: {
            nee_cc: 'sdkfhkj'
        },
        b_b: 'anotherProp'
    };
    // const result = recursiveKeyReplace(input, /\./g, '_');
    const result = recursiveKeyReplace(input, /\./g, '_');
    console.log(result);
    // console.log(expectedResult);
    // console.log(data);
    // replace all periods with underscore
    t.deepEqual(result, expectedResult);
    t.pass();
});
