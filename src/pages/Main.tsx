import React from "react";
import MainContent from "../components/Main/Main";
import Benefits from "../components/Benefits/Benefits";
import Testmonials from "../components/Slider/Testmonials";

const Main = () => {
    return (
        <div>
            <MainContent/>
            <Benefits/>
            <Testmonials/>
        </div>
    );
};

export default Main;