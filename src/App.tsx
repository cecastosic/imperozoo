import { useEffect, useState } from "react";
import { Administration, TableData } from "./components/Administration";
import { Header } from "./components/Header";
import { ListAnimals } from "./components/ListAnimals";
import { Pet } from "./components/ProfileBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

function App() {
  const [data, setData] = useState<Pet[]>([]);
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tableData, setTableData] = useState<TableData[]>([]);

  const fetchData = async () => {
    await axios
      .get("http://localhost:3000/animals")
      .then((response) => setData(response.data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    fetchData();
  }, [isDataChanged]);

  useEffect(() => {
    if (data.length) {
      const filteredData = data.map((row) => {
        return {
          name: row.name,
          type: row.type,
          breed: row.breed,
          age: dayjs().diff(row.birth, "year"),
          status: row.status,
        };
      });
      setTableData(filteredData);
    }
  }, [data]);

  const changeData = async (id: number) => {
    await axios
      .patch(`http://localhost:3000/animals/${id}`, { status: "Booked" })
      .catch((err) => setError(err));
    setIsDataChanged(true);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact strict path="/">
            {error ? (
              <div className="py-10 pl-10 pr-10 md:pr-24">{error}</div>
            ) : (
              <ListAnimals dataAnimals={data} changeStatus={changeData} />
            )}
          </Route>
          <Route exact strict path="/administration">
            {tableData.length ? <Administration data={tableData} /> : "No data"}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
