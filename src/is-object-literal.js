/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isObjectLiteral() {
  var literal = {}

  this.type = 'object literal'
  this.valid = !this.isNull( this.param ) && this.param.constructor === literal.constructor

  return this.isValid()
}

module.exports = isObjectLiteral
