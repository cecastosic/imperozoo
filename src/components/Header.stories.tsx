import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Header",
  component: Header,
};

export const header = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};
