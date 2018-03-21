/* eslint-disable no-invalid-this */

'use strict'

var throwError = require( './throw-error' )

/**
 * @returns {*}
 * @throws {Error}
 */
function isValid() {
  if ( this.is_required ) {
    if ( !this.valid ) {
      throwError.call( this )
    }
  }

  if ( this.get_param ) {
    if ( !this.valid ) {
      return this.valid
    }

    return this.param
  }

  return this.valid
}

module.exports = isValid
