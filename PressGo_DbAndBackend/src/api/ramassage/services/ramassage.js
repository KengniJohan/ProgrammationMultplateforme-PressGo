'use strict';

/**
 * ramassage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ramassage.ramassage');
