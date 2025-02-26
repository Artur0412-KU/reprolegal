import React from "react"
import Programs from "../components/Programs/Programs";
import Service from "../components/Service/Service";
import Consulting from "../components/Consulting/Consulting";
import LegalService from "../components/Service/LegalService";

const Services = () => {
    return (
        <div>
            <Programs/>
            <Service/>
            <Consulting/>
            <LegalService/>
        </div>
    );
};

export default Services;