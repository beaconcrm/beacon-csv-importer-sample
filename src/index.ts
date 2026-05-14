import readCSVFile from './readCSVFile';
import mapRow from './mapRow';

export default async () => {
  const inputFile = `${__dirname}/../input.csv`;
  const rows = await readCSVFile(inputFile);
  const mappedRows = rows.map(row => mapRow(row));
  console.log('Mapped rows:', mappedRows);
};
