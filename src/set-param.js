'use strict'

/**
 * @param {*} param
 * @param {string} [key]
 * @returns {*}
 */
function setParam( param, key ) {
  if ( typeof key !== 'string' ) {
    return param
  }

  // @todo handle multi-dimmension object keys
  // e.g., key = my.multi.key
  if ( typeof param === 'object' ) {
    return param[ key ]
  }

  return param
}

module.exports = setParam
