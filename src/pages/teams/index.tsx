import { FC } from 'react';
import { TeamListRow, useGetTeamList } from '@/apis/team';
import { BasicTable } from '@/common/components';
import { Box, Button, ButtonGroup } from '@mui/material';

const column: Record<keyof TeamListRow, string> = {
  id: 'ID',
  name: '팀명',
  userCount: '부서원 수',
  teamTaskCount: '부서 사업',
  globalTaskCount: '공통 사업',
};

const TeamsPage: FC = () => {
  const teams = useGetTeamList();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ButtonGroup variant="contained">
        <Button>추가</Button>
      </ButtonGroup>

      <BasicTable column={column} rows={teams.rows} />
    </Box>
  );
};

export default TeamsPage;
