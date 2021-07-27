import { action } from "@storybook/addon-actions";
import { ListAnimals } from "./ListAnimals";
import { Pet } from "./ProfileBox";
import dataDB from "../db/db.json";

export default {
  title: "Components/List Animals",
  component: ListAnimals,
};

export const listAnimals = () => {
  return (
    <ListAnimals
      dataAnimals={dataDB.animals as Pet[]}
      changeStatus={action("Status changed")}
    />
  );
};
