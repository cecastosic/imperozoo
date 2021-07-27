import React from "react";
import { action } from "@storybook/addon-actions";
import { ProfileBox, Cat, Dog } from "./ProfileBox";

export default {
  title: "Components/Profile Box",
  component: ProfileBox,
};

export const profileBoxCat = () => {
  const data = {
    id: 3,
    meowsPerDay: 62,
    fluffynessLevel: 1,
    name: "Lola",
    sex: "Female",
    breed: "Asian",
    birth: "2018-05-02",
    photo: "https://jooinn.com/images/cat-68.jpg",
    status: "Adopted",
    note: "Very soft",
  } as Cat;
  return (
    <ProfileBox data={data} changeStatusToBooked={action("Change status")} />
  );
};

export const profileBoxDog = () => {
  const data = {
    id: 5,
    type: "Dog",
    tailLength: 10,
    goodBoy: false,
    name: "Pluto",
    sex: "Male",
    breed: "Malamute",
    birth: "2019-02-20",
    photo: "https://jooinn.com/images/dog-66.jpg",
    status: "Unadopted",
    note: "Barks a lot",
  } as Dog;
  return (
    <ProfileBox data={data} changeStatusToBooked={action("Change status")} />
  );
};
