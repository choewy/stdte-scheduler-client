import { TableBody, TableCell, TableRow } from '@mui/material';

export type BasicTableBodyProps<T> = {
  column: T;
  rows: T[];
};

export const BasicTableBody = <T extends object>({
  column,
  rows,
}: BasicTableBodyProps<T>) => {
  return (
    <TableBody>
      {rows.map((row: any) => (
        <TableRow key={JSON.stringify(row)}>
          {Object.keys(column).map((key) => (
            <TableCell key={key} align="left">
              {row[key] as string}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
