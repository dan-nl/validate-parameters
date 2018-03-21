/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isInt() {
  this.type = 'float'
  this.valid = typeof this.param === 'number' && !isNaN( this.param % 1 ) && this.param % 1 !== 0

  return this.isValid()
}

module.exports = isInt
