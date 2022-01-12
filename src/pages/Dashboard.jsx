import React from "react";

//import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

//**************************************************
/*   Las tarjetas del Dashboard consumen datos
                   desde este json
****************************************************/
import statusCards from "../assets/JsonData/status-card-data.json";

const Dashboard = () => {
  //const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
