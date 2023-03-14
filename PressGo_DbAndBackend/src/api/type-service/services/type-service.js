'use strict';

/**
 * type-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type-service.type-service');
