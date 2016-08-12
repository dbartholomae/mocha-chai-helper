# mocha-chai-helper
[![NPM version](https://badge.fury.io/js/ng-q-plus.svg)](https://npmjs.org/package/mocha-chai-helper)
[![Dependency Status](https://david-dm.org/dbartholomae/ng-q-plus.svg?theme=shields.io)](https://david-dm.org/dbartholomae/mocha-chai-helper)
[![devDependency Status](https://david-dm.org/dbartholomae/ng-q-plus/dev-status.svg)](https://david-dm.org/dbartholomae/mocha-chai-helper#info=devDependencies)
[![GitHub license](https://img.shields.io/github/license/dbartholomae/mocha-chai-helper.svg)]()

**mocha-chai-helper** is a small helper utility for usage with mocha. It can be required in [mocha]() to add [`expect`](http://chaijs.com/api/bdd/) and [`sinon`](http://sinonjs.org/) to the global namespace, while also including [chai-things](https://github.com/chaijs/chai-things), [chai-as-promised](https://github.com/domenic/chai-as-promised) and [sinon-chai](https://github.com/domenic/sinon-chai).

```bash
mocha --require mocha-chai-helper src/*.spec.js
```
