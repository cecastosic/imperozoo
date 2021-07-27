import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

export default { title: "Components/Button" };

export const StandardButton = () => {
  return <Button onClick={action("Clicked")}>Adopt me</Button>;
};

export const DisabledButton = () => {
  return <Button variant="disabled">Adopt me</Button>;
};
