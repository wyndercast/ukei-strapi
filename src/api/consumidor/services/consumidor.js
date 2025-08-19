'use strict';

/**
 * consumidor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consumidor.consumidor');
