import { Table, TableContainer } from '@mui/material';
import { BasicTableBody } from './basic-table-body';
import { BasicTableHead } from './basic-table-head';

export type BasicTableProps<T> = {
  column: T;
  rows: Record<keyof T, any>[];
};

export const BasicTable = <T extends { [key: string]: string }>({
  column,
  rows,
}: BasicTableProps<T>) => {
  return (
    <TableContainer>
      <Table>
        <BasicTableHead column={column} />
        <BasicTableBody column={column} rows={rows} />
      </Table>
    </TableContainer>
  );
};
