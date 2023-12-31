import React from "react";
import MainChart from "../../components/Chart/MainChart";
import Events from "../../components/Events/Events";

const Home = () => {
  return (
    <div>
      <div>
        <MainChart />
      </div>
      <Events />
    </div>
  );
};

export default Home;
