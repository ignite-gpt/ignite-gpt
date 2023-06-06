const { Client } = require('pg');
const {
  describe,
  beforeEach,
  afterEach,
  test,
  expect,
} = require('@jest/globals');

describe('PostgreSQL Test Suite', function () {
  let client = null;

  beforeEach(async function () {
    client = new Client({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'test',
    });
    await client.connect();
    await client.query('BEGIN');
  });

  test('should not allow changes to read-only columns on insert', async function () {
    const userId = 'test-user-id'; // TODO: Set this to a valid test user ID
    const forks = 10;
    const now = new Date().toISOString();
    const res = await client.query(
      `
      INSERT INTO public.trees (id, name, description, userId, forks, isPublic, createdAt, updatedAt, forkSourceId, settings, isTemplate, templateId)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *
    `,
      [
        'test-tree-id',
        'Test Tree',
        'This is a test tree',
        userId,
        forks,
        false,
        now,
        now,
        null,
        {},
        false,
        null,
      ],
    );
    const row = res.rows[0];
    expect(row.forks).not.toEqual(forks);
    expect(row.createdAt).not.toEqual(now);
    expect(row.updatedAt).not.toEqual(now);
  });

  // TODO: Add tests for the other triggers...

  afterEach(async function () {
    await client.query('ROLLBACK');
    await client.end();
  });
});
