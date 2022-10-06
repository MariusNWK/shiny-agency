import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Loader } from "../../utils/style/Atoms";
import { useFetch } from "../../utils/hooks";

interface FreelancerType {
  id: number;
  name: string;
  job: string;
  picture: string;
}

interface DataType {
  freelancersList?: FreelancerType[];
}

interface UseFetchType {
  isLoaded: boolean;
  data: DataType;
  error: boolean;
}

function Freelances() {
  const { data, isLoaded, error }: UseFetchType = useFetch(`http://localhost:8000/freelances`);

  if (error) {
    return <span>Il y a une erreur</span>
  }

  const freelancesProfiles = data?.freelancersList;

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoaded ? (freelancesProfiles) ? (
        <CardsContainer>
          {freelancesProfiles.map((profile: FreelancerType) => (
            <Card key={profile.id} label={profile.job} title={profile.name} />
          ))}
        </CardsContainer>
      ) : <PageSubtitle>Aucune donnée</PageSubtitle> : (
        <Loader data-testid="loader"/>
      )}
    </div>
  );
}

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

export default Freelances;
