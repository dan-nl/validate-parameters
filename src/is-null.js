/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isBool() {
  this.type = 'null'
  this.valid = this.param === null

  return this.isValid()
}

module.exports = isBool
