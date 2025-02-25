import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='bg-[#694b1a] py-[32px] px-[128px] flex items-center justify-between max-lg:px-[32px] max-sm:flex-col max-sm:gap-[40px]'>
            <h1 className='text-[18px] text-white'>{t('footerText')}</h1>

            <div className='flex flex-row gap-[16px]'>
                <a href='https://facebook.com' target='_blank'>
                    <img src={'https://img.icons8.com/?size=100&id=106163&format=png&color=FFFFFF'}
                         className='w-[32px]' alt=''/>
                </a>

                <a href='https://instagram.com' target='_blank'>
                    <img src={'https://img.icons8.com/?size=100&id=85140&format=png&color=FFFFFF'}
                         className='w-[32px]'/>
                </a>

                <a href='https://x.com' target='_blank'>
                    <img src={'https://img.icons8.com/?size=100&id=8824&format=png&color=FFFFFF'} className='w-[32px]'/>
                </a>

            </div>
        </div>
    );
};

export default Footer;