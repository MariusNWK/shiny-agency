import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/style/Atoms";

interface FreelancerType {
  id: number;
  name: string;
  job: string;
  picture: string;
}

function Freelances() {
  const [freelancesProfiles, setFreelancesProfiles] = useState<FreelancerType[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function fetchFreelances() {
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await response.json();
        setFreelancesProfiles(freelancersList);
      } catch (err) {
        console.log(err);
      } finally {
        setDataLoaded(true);
      }
    }
    fetchFreelances();
  }, []);

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {dataLoaded ? (
        <CardsContainer>
          {freelancesProfiles.map((profile: FreelancerType) => (
            <Card key={profile.id} label={profile.job} title={profile.name} />
          ))}
        </CardsContainer>
      ) : (
        <Loader />
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
