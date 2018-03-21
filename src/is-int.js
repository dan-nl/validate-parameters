/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isInt() {
  this.type = 'int'
  this.valid = Number.isInteger( this.param )

  return this.isValid()
}

module.exports = isInt
