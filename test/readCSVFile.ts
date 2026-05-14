import { describe, it } from 'node:test';
import assert from 'node:assert';
import readCSVFile from '../src/readCSVFile';

describe('#readCSVFile', () => {
  it('should convert the sample input.csv file into rows', async () => {
    const rows = await readCSVFile(`${__dirname}/../input.csv`);

    assert(Array.isArray(rows));

    const isArrayOfObjects = rows.every(row => typeof row === 'object' && row !== null && row.constructor === Object);
    assert.strictEqual(isArrayOfObjects, true);
  });
});
