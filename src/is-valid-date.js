/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isValidDate() {
  this.type = 'valid date'
  this.valid = this.isDate( this.param ) && !isNaN( this.param.getTime() )

  return this.isValid()
}

module.exports = isValidDate
