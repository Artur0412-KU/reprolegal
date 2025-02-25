import {useTranslation} from "react-i18next";

const ApartContent = () => {
    const {t } = useTranslation();
    return (
        <div className='py-[64px] px-[180px] max-lg:p-[32px] bg-[#fff1e0] flex flex-col gap-[40px]'>
            <div className='flex flex-row items-center justify-between gap-[64px] max-lg:flex-col max-lg:gap-[24px]'>
                <img
                    src='https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwxNnx8aGFuZHN8ZW58MHx8fHwxNzM4ODA2MTg2fDA&ixlib=rb-4.0.3&q=80&w=1080'
                    alt=''
                    className='w-1/3 rounded-[2%] max-lg:w-[90%]'
                />
                <div className='flex flex-col gap-[16px]'>
                    <h1 className='font-anton text-[#f2ce7d] text-[36px] max-lg:text-[24px]'>{t('legal_protection')}</h1>
                    <p className='text-[18px] w-full'>{t('legal_text')}</p>
                </div>
            </div>

            <div className='flex flex-row-reverse items-center justify-between gap-[64px] max-lg:flex-col max-lg:gap-[24px]'>
                <img
                    src='https://images.unsplash.com/photo-1593526613712-7b4b9a707330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwxfHxkaXZlcnNpdHl8ZW58MHx8fHwxNzM4ODA2MDI4fDA&ixlib=rb-4.0.3&q=80&w=1080'
                    alt=''
                    className='w-1/3 rounded-[2%] max-lg:w-[90%]'
                />
                <div className='flex flex-col gap-[16px]'>
                    <h1 className='font-anton text-[#f2ce7d] text-[36px] max-lg:text-[24px]'>{t('ethical_approach')}</h1>
                    <p className='text-[18px] w-full'>{t('ethical_text')}</p>
                </div>
            </div>

            <div className='flex flex-row items-center justify-between gap-[64px] gap-[64px] max-lg:flex-col max-lg:gap-[24px]'>
                <img
                    src='https://images.unsplash.com/photo-1556484687-30636164638b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwyfHxkaXZlcnNpdHl8ZW58MHx8fHwxNzM4ODA2MDI4fDA&ixlib=rb-4.0.3&q=80&w=1080'
                    alt=''
                    className='w-1/3 rounded-[2%] max-lg:w-[90%]'
                />
                <div className='flex flex-col gap-[16px]'>
                    <h1 className='font-anton text-[#f2ce7d] text-[36px] max-lg:text-[24px]'>{t('flexible_solutions')}</h1>
                    <p className='text-[18px] w-full'>{t('flexible_text')}</p>
                </div>
            </div>

            <div className='flex flex-row-reverse items-center justify-between gap-[64px] max-lg:flex-col max-lg:gap-[24px]'>
                <img
                    src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw1fHxoYW5kc3xlbnwwfHx8fDE3Mzg4MDYxNzN8MA&ixlib=rb-4.0.3&q=80&w=1080'
                    alt=''
                    className='w-1/3 rounded-[2%] max-lg:w-[90%]'
                />
                <div className='flex flex-col gap-[16px]'>
                    <h1 className='font-anton text-[#f2ce7d] text-[36px] max-lg:text-[24px]'>{t('global_support')}</h1>
                    <p className='text-[18px] w-full'>{t('global_text')}</p>
                </div>
            </div>
        </div>
    );
};

export default ApartContent;