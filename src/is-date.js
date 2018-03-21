/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isDate() {
  this.type = 'date'
  this.valid = this.param instanceof Date

  return this.isValid()
}

module.exports = isDate
