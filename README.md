# Fullstore [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

[NPMURL]: https://npmjs.org/package/fullstore "npm"
[NPMIMGURL]: https://img.shields.io/npm/v/fullstore.svg?style=flat
[BuildStatusURL]: https://github.com/coderaiser/fullstore/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/fullstore/workflows/Node%20CI/badge.svg
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"

Functional variables.

## Install

```
npm i fullstore --save
```

## How to use?

```js
const fullstore = require('fullstore');
const user = fullstore();

const getValue = () => {
    return 'name';
};

user(getValue());

console.log(user());
// output
'name';
```

```js
import {fullstore} from 'fullstore';

const user = fullstore('hello');

console.log(user());
// output
'hello';
```

## Related

- [zames](https://github.com/coderaiser/zames "zames") - converts callback-based functions to Promises and apply currying to arguments

- [wraptile](https://github.com/coderaiser/wraptile "wraptile") - translate the evaluation of a function that takes multiple arguments into evaluating a sequence of 2 functions, each with a any count of arguments.

- [currify](https://github.com/coderaiser/currify "currify") - translate the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single or more arguments.

## License

MIT
