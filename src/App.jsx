import { useState } from "react";
import Profile from "./components/profile/Profile";
import Setting from "./components/setting/Setting";
import Interest from "./components/interest/Interest";
import "./App.css";

const App = () => {
  const [tab, setTab] = useState("Profile");

  const tabs = [
    { name: "Profile", component: <Profile /> },
    { name: "Interest", component: <Interest /> },
    { name: "Setting", component: <Setting /> },
  ];

  const selectedTab = tabs.find((t) => t.name === tab)?.component;

  return (
    <div className="main-parent">
      <div className="tab-form-body">
        <div className="button">
          {tabs?.map((t) => (
            <button key={t.name} onClick={() => setTab(t.name)}>
              {t.name}
            </button>
          ))}
        </div>

        <div>{selectedTab}</div>
      </div>
    </div>
  );
};

export default App;
