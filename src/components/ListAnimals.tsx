import { Pet, ProfileBox } from "./ProfileBox";

type ListAnimalsProps = {
  dataAnimals: Pet[];
  changeStatus: (id: number) => void;
};

export const ListAnimals = ({
  dataAnimals,
  changeStatus,
}: ListAnimalsProps) => {
  return (
    <div className="flex justify-start items-strech content-strech w-full flex-wrap gap-8 py-10 pl-10 pr-10 md:pr-24">
      {dataAnimals.map((animal) => {
        return (
          <ProfileBox
            data={animal}
            key={animal.id}
            changeStatusToBooked={changeStatus}
          />
        );
      })}
    </div>
  );
};
