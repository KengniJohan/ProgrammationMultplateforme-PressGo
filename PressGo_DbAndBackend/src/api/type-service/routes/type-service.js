'use strict';

/**
 * type-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::type-service.type-service');
