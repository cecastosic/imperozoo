import { Administration, TableData } from "./Administration";

export default {
  title: "Components/Administration",
  component: Administration,
};

export const administration = () => {
  const data = [
    {
      type: "Dog",
      name: "Pluto",
      breed: "Malamute",
      age: 1,
      status: "Unadopted",
    },
    {
      type: "Dog",
      name: "Bango",
      breed: "Samoyed",
      age: 2,
      status: "Unadopted",
    },
  ] as TableData[];
  return <Administration data={data} />;
};
