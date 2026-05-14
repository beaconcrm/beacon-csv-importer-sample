import { parse } from 'fast-csv';
import fs from 'fs';

const readCSVFile = (filePath: string): Promise<Record<string, string>[]> =>
  new Promise((resolve, reject) => {
    const rows: Record<string, string>[] = [];

    fs.createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on('error', error => reject(error))
      .on('data', (row: Record<string, string>) => {
        rows.push(row);
      })
      .on('end', () => {
        resolve(rows);
      });
  });

export default readCSVFile;
