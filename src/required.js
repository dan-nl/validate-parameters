/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {Validate}
 */
function required() {
  this.is_required = true

  return this
}

module.exports = required
