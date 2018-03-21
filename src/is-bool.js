/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isBool() {
  this.type = 'boolean'
  this.valid = typeof this.param === 'boolean'

  return this.isValid()
}

module.exports = isBool
