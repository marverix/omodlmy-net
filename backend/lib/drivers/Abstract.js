'use strict';

const config = require('../../config');

/**
 * Abstract Driver
 * Base for all drivers
 */
class AbstractDriver {

  /**
   * Constructor
   */
  constructor() {
    this.config = config;
  }

  /**
   * Debug
   *
   * @param {string} msg Debug message
   */
  // eslint-disable-next-line no-unused-vars
  debug(msg) {
    throw new Error('Please overwrite this method!');
  }

}

module.exports = AbstractDriver;
