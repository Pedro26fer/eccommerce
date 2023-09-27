import { ObjectivesCard } from "../ObjectivesCard";
import { StyledObjectivesSection } from "./style";

export function ObjectivesSection({ data }) {
  const objectives = data.filter((item) => item.section == "Objectives");

  return (
    <StyledObjectivesSection>
      <h1>Objetivos</h1>
      <ul>
        {objectives?.map((obj) => (
          <li key={obj.id}>
            <ObjectivesCard
              img={obj.imgObjective}
              obj={obj.objective.toUpperCase()}
            />
          </li>
        ))}
      </ul>
    </StyledObjectivesSection>
  );
}
