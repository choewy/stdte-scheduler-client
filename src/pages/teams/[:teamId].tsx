import { useGetTeam } from '@/apis/team';
import { useParams } from 'react-router-dom';

const TeamPage = () => {
  const params = useParams<{ teamId: string }>();

  const team = useGetTeam(params.teamId);

  if (team === null) {
    return <></>;
  }

  return (
    <div>
      <div>{team.name}</div>
    </div>
  );
};

export default TeamPage;
