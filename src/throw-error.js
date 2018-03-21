/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {throwError}
 */
function throwError() {
  throw new Error(
    'param [ %key ] is not type [ %type ]'
      .replace( '%key', this.key )
      .replace( '%type', this.type )
  )
}

module.exports = throwError
