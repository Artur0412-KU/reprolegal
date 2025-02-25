import {useTranslation} from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                🌍
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow-md">
                <li>
                    <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
                </li>
                <li>
                    <button onClick={() => changeLanguage("it")}>🇮🇹 Italiano</button>
                </li>
                <li>
                    <button onClick={() => changeLanguage("fr")}>🇫🇷 Français</button>
                </li>
                <li>
                    <button onClick={() => changeLanguage("es")}>🇪🇸 Español</button>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;