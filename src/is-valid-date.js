/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {*}
 * @throws {Error}
 */
function isValidDate() {
  this.valid = this.isDate( this.param ) && !isNaN( this.param.getTime() )
  this.type = 'valid date'

  return this.isValid()
}

module.exports = isValidDate
