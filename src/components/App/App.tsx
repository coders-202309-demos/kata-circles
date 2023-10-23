import { useState } from "react";
import { CircleStructure } from "../../types";
import { circlesApi } from "../../data/circles";
import Circle from "../Circle/Circle";

const App = (): React.ReactElement => {
  const [circles, setCircles] = useState<CircleStructure[]>(circlesApi);

  const toggleCircle = (circleId: number) => {
    setCircles(
      circles.map<CircleStructure>((circle) => ({
        ...circle,
        isSelected:
          circle.id === circleId ? !circle.isSelected : circle.isSelected,
      }))
    );
  };

  return (
    <ul className="circles">
      {circles.map((circle) => (
        <li key={circle.id}>
          <Circle circle={circle} actionOnClick={toggleCircle} />
        </li>
      ))}
    </ul>
  );
};

export default App;
