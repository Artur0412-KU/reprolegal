import Programs from "../components/Programs/Programs.tsx";
import Service from "../components/Service/Service.tsx";
import Consulting from "../components/Consulting/Consulting.tsx";
import LegalService from "../components/Service/LegalService.tsx";

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