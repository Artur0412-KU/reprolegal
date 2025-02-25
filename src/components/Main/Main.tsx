import {useTranslation} from "react-i18next";

const MainContent = () => {
    const {t} = useTranslation()
    return (
        <div className='flex flex-row items-center justify-center gap-[200px] p-[32px] bg-[#fff1e0] max-lg:flex-col-reverse max-lg:gap-[50px]'>
            <div className='flex flex-col items-start gap-[24px] max-lg:w-full'>
                <h1 className='text-[48px] font-semibold max-lg:text-[32px]'>{t('mainTitle')}</h1>
                <p className='text-[24px] max-lg:text-[18px]'>{t('mainText')}</p>
                <a href='mailto:support@rep-legal.com' className='bg-[#694b1a] py-[16px] px-[48px] text-[16px] text-white max-lg:px-[24px] hover:bg-white hover:text-[#694b1a] transition'>{t('mainButton')}</a>
            </div>
            <img
                src='https://images.unsplash.com/photo-1542644384-49f9febd8443?ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwyNHx8bmV3Ym9ybnxlbnwwfHx8fDE3Mzg4MDA4NDl8MA&ixlib=rb-4.0.3q=80&w=1080'
                alt=''
                className='w-1/3 rounded-[2%] max-lg:w-full'
            />
        </div>
    );
};

export default MainContent;