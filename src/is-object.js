/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isInt() {
  this.type = 'object'
  this.valid = typeof this.param === 'object'

  return this.isValid()
}

module.exports = isInt
