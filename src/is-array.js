/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isArray() {
  this.type = 'array'
  this.valid = Array.isArray( this.param )

  return this.isValid()
}

module.exports = isArray
