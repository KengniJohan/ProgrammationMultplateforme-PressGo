'use strict';

/**
 * coursier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coursier.coursier');
