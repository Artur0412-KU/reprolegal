import {useTranslation} from "react-i18next";

const Service = () => {
    const {t} = useTranslation();
    return (
        <div className='p-[64px] max-lg:p-[32px]'>

            <h1 className='text-center text-[32px] font-semibold'>{t('services_title')}</h1>
            <div className='flex flex-row gap-[40px] pt-[32px] max-lg:flex-col'>
                <div className='bg-[#e4c393] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw1fHxsZWdhbHxlbnwwfHx8fDE3Mzg4MDI5OTR8MA&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[400px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] font-semibold max-sm:text-[24px]'>{t('program_design_title')}</h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('program_design_text')}
                        </p>
                    </div>

                </div>

                <div className='bg-[#e4c393] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwyMnx8ZG9jdG9yfGVufDB8fHx8MTczODgwMjg1NXww&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[600px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] font-semibold max-sm:text-[24px]'>
                            {t('medical_coordination_title')}
                        </h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('medical_coordination_text')}
                        </p>
                    </div>

                </div>

                <div className='bg-[#e4c393] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwxNnx8cHJlZ25hbnR8ZW58MHx8fHwxNzM4ODAzMDkxfDA&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[400px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] font-semibold max-sm:text-[24px]'>
                            {t('surrogate_selection_title')}
                        </h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('surrogate_selection_text')}
                        </p>
                    </div>

                </div>

                <div className='bg-[#e4c393] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwxMTl8fGxhd3llcnxlbnwwfHx8fDE3Mzg4MDMzMDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[400px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] font-semibold max-sm:text-[24px]'>
                            {t('legal_support_title')}
                        </h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('legal_support_text')}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;