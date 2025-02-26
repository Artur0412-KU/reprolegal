import React from "react";
import Close from '../../assets/icons/close.svg'
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Burger = () => {
    const { t } = useTranslation();

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
            </label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div className='flex justify-end'>
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay w-[32px]">
                        <img src={Close} alt='/'/>
                    </label>
                </div>

                <div className="flex flex-col gap-[16px] text-[#694b1a] text-[18px]">
                    <Link to="/" className='hover:text-[#593e12]'>{t("home")}</Link>
                    <Link to="/services" className='hover:text-[#593e12]'>{t("services")}</Link>
                    <Link to="/what-sets-us-apart" className='hover:text-[#593e12]'>{t("whatSetsUsApart")}</Link>
                    <Link to="/surrogacy-by-country" className='hover:text-[#593e12]'>{t("surrogacyByCountry")}</Link>
                    <Link to="/contact" className='hover:text-[#593e12]'>{t("contact")}</Link>
                </div>
            </ul>
        </div>
    );
};

export default Burger;