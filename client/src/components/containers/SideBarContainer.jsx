import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../index.js";
import { useLocation } from "react-router-dom";
import SideBar from "../sidebar/SideBar.jsx";

const SideBarContainer = observer(() => {
  const { globalSubjectStore } = useContext(Context);
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  return (
    <SideBar path={pathName} subjects={globalSubjectStore.globalSubjects} />
  );
});

export default SideBarContainer;
