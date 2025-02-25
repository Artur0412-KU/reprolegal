import {useTranslation} from "react-i18next";

const Programs = () => {
    const {t} = useTranslation()
    return (
        <div className='flex flex-row justify-between max-lg:flex-col'>
            <img src='https://images.unsplash.com/photo-1615766553246-9147b6d50e90?ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw5fHxwcmVnbmFudHxlbnwwfHx8fDE3Mzg4MDE4OTB8MA&ixlib=rb-4.0.3q=80&w=1080' alt='/' />
            <div className='bg-[#694b1a] w-full text-white flex flex-col items-start justify-center p-[64px] gap-[16px] max-lg:p-[32px]'>
                <h1 className='text-[60px] font-semibold max-lg:text-[48px] max-sm:text-[32px]'>{t('full_service_title')}</h1>
                <p className='text-[22px] max-lg:text-[18px]'>{t('full_service_text')}</p>
                <a href='mailto:support@rep-legal.com' className='py-[16px] px-[20px] text-[20px] text-center border-white border-[3px] w-[30%] max-lg:text-[18px] max-lg:w-full transition hover:bg-[#e3c493] hover:text-[#694b1a]'>
                    {t('full_service_button')}
                </a>
            </div>
        </div>
    );
};

export default Programs;