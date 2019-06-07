## validate-parameters
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

validate parameters

## table of contents
* [installation](#installation)
* [api](#api)
* [usage](#usage)
* [license](#license)

## installation
### install npm dependencies
```sh
npm i dan-nl/validate-parameters
```

## api
```javascript
/**
 * @param {*} param
 * @param {string} [key]
 *
 * @returns {Validate}
 */
function validate( param, key )
```

## use
### basic
```javascript
var validate = require( 'validate-parameters' )

// returns true
validate( 'test string' ).isString()

// returns `test string`
validate( 'test string' ).get().isString()

// returns fallback value `fallback string`
validate( {} ).get().isString() || 'fallback string'

// throws an Error
validate( {} ).required().isString()

// throws an Error stating the name of the parameter
validate( 0, 'mystring' ).required().isString()
```

### object parameters
```javascript
var validate = require( 'validate-parameters' )

var params = {
  mystring: 'my string',
  mydimmension: {
    mystring: 'my string'
  }
}

// returns true
validate( 'test string' ).isString()

// returns `test string`
validate( 'test string' ).get().isString()

// returns fallback value `fallback string`
validate( {} ).get().isString() || 'fallback string'

// throws an Error
validate( {} ).required().isString()
```

### setters
#### `.required()`
sets whether or not the param is required.
if required and the validator evaluates to false, an `Error` will be thrown.

#### `.get()`
sets whether or not to return the param value.
returns the param value unless the validator evaluates to false in which case false will be returned.

### validators
* isArray
* isBool
* isDate
* isFloat
* isInt
* isNull
* isObject
* isObjectLiteral
* isString
* isValidDate

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/validate-parameters/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/validate-parameters?branch=master
[mit-license]: https://raw.githubusercontent.com/dan-nl/validate-parameters/master/license.txt
[travis-image]: https://travis-ci.org/dan-nl/validate-parameters.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/validate-parameters
