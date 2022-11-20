import { TableCell, TableHead, TableRow } from '@mui/material';

export type BasicTableHeadProps<T> = {
  column: T;
};

export const BasicTableHead = <T extends object>({
  column,
}: BasicTableHeadProps<T>) => {
  return (
    <TableHead>
      <TableRow>
        {Object.values(column).map((value) => (
          <TableCell key={value}>{value}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
