'use strict';

const assert = require('assert');
const pgp = require('pg-promise')({});

let count = 0;

/**
 * @param  {Object} config item
 * @param  {Application} app instance
 * @return {Object} db client
 */
function createClient(config, app) {

  const { host, port, user, password, database } = config;

  assert(password);

  // Connection string like
  //   postgres://username:password@host:port/database

  // Load config with default
  const client = pgp({
    host: host || 'localhost',
    port: port || 5432,
    user: user || 'postgres',
    database: database || 'postgres',
    password,
  });

  // Check first
  app.beforeStart(async () => {
    const rst = await client.one('select now() as currentTime;');
    const index = count++;
    app.coreLogger.info(`[egg-pg] instance[${index}] status OK, database server currentTime: ${rst.currentTime}`);
  });

  return client;
}

module.exports = app => {
  app.addSingleton('pg', createClient);
};
