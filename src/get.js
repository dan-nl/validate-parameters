/* eslint-disable no-invalid-this */

'use strict'

/**
 * @returns {Validate}
 */
function get() {
  this.get_param = true

  return this
}

module.exports = get
