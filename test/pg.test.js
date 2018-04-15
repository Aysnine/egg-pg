'use strict';

const mock = require('egg-mock');

describe('test/pg.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/pg-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, pg')
      .expect(200);
  });
});
