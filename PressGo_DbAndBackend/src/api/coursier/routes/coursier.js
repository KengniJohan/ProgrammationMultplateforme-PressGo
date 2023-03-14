'use strict';

/**
 * coursier router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::coursier.coursier');
