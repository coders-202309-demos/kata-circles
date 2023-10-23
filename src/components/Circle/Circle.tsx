import "./Circle.css";
import { CircleStructure } from "../../types";

interface CircleProps {
  circle: CircleStructure;
  actionOnClick: (id: number) => void;
}

const Circle = ({
  circle: { id, isSelected },
  actionOnClick,
}: CircleProps): React.ReactElement => {
  return (
    <div
      className={`circle${isSelected ? " circle--selected" : ""}`}
      onClick={() => actionOnClick(id)}
    />
  );
};

export default Circle;
