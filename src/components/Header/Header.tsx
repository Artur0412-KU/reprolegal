import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { useTranslation } from "react-i18next";
import BurgerMenu from '../../assets/icons/burger-menu.svg'
import Burger from "../Burger/Burger";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import React from "react";

const Header = () => {
    const { t } = useTranslation();

    return (
        <nav className="flex items-center justify-between px-[32px] py-[16px]">
            <Link to='/' className='w-[5%] h-full max-lg:w-1/3'>
                <img src={logo} alt="logo" className="w-full max-lg:w-[50%] max-sm:w-full"/>
            </Link>


            <div className="flex items-center justify-between gap-[16px] text-[20px] max-lg:hidden">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'font-bold transition' : 'transition hover:font-bold'}>
                    {t("home")}
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) => isActive ? 'font-bold transition' : 'transition hover:font-bold'}>
                    {t("services")}
                </NavLink>
                <NavLink
                    to="/what-sets-us-apart"
                    className={({ isActive }) => isActive ? 'font-bold transition' : 'transition hover:font-bold'}>
                    {t("whatSetsUsApart")}
                </NavLink>
                <NavLink
                    to="/surrogacy-by-country"
                    className={({ isActive }) => isActive ? 'font-bold transition' : 'transition hover:font-bold'}>
                    {t("surrogacyByCountry")}
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? 'font-bold transition' : 'transition hover:font-bold'}>
                    {t("contact")}
                </NavLink>
            </div>

            <div className='flex items-center justify-center'>
                <LanguageSwitcher/>

                <div className="drawer hidden max-lg:flex justify-end drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className='w-[24px]'>
                            <img src={BurgerMenu} alt='' />
                        </label>
                    </div>
                    <Burger/>
                </div>
            </div>


        </nav>
    );
};

export default Header;
