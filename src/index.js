'use strict'

var get = require( './get' )
var isArray = require( './is-array' )
var isBool = require( './is-bool' )
var isDate = require( './is-date' )
var isFloat = require( './is-float' )
var isInt = require( './is-int' )
var isNull = require( './is-null' )
var isObject = require( './is-object' )
var isObjectLiteral = require( './is-object-literal' )
var isString = require( './is-string' )
var isValid = require( './is-valid' )
var isValidDate = require( './is-valid-date' )
var setParam = require( './set-param' )
var required = require( './required' )
var throwError = require( './throw-error' )

/**
 * @type {Object} Validate
 *
 * @property {Function} get
 *
 * @property {Function} isArray
 * @property {Function} isBool
 * @property {Function} isDate
 * @property {Function} isFloat
 * @property {Function} isInt
 * @property {Function} isNull
 * @property {Function} isObject
 * @property {Function} isObjectLiteral
 * @property {Function} isString
 * @property {Function} isValid
 * @property {Function} isValidDate

 * @property {Function} required
 * @property {Function} throwError
 *
 * @param {*} param
 * @param {string} [key]
 *
 * @constructor
 */
function Validate( param, key ) {
  this.get_param = false
  this.key = key || 'no param name'
  this.param = setParam( param, key )
  this.is_required = false
  this.type = 'unknown'
  this.valid = false
}

Validate.prototype.get = get

Validate.prototype.isArray = isArray
Validate.prototype.isBool = isBool
Validate.prototype.isDate = isDate
Validate.prototype.isFloat = isFloat
Validate.prototype.isInt = isInt
Validate.prototype.isNull = isNull
Validate.prototype.isObject = isObject
Validate.prototype.isObjectLiteral = isObjectLiteral
Validate.prototype.isString = isString
Validate.prototype.isValid = isValid
Validate.prototype.isValidDate = isValidDate

Validate.prototype.required = required

/**
 * @param {*} param
 * @param {string} [key]
 *
 * @returns {Validate}
 */
function validate( param, key ) {
  return new Validate( param, key )
}

module.exports = validate
