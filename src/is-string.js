/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isString() {
  this.type = 'string'
  this.valid = typeof this.param === 'string'

  return this.isValid()
}

module.exports = isString
