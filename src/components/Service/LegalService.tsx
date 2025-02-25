import {useTranslation} from "react-i18next";

const LegalService = () => {
    const {t} = useTranslation()
    return (
        <div className='p-[64px] max-lg:p-[32px]'>

            <h1 className='text-center text-[32px] font-semibold'>{t('legal_services_title')}</h1>
            <div className='flex flex-row gap-[40px] pt-[32px] max-lg:flex-col'>
                <div className='bg-[#d5c1a4] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1504975692386-cfacf81e1022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw0fHxjb3VudHJ5JTIwZ2VvZ3JhcGh5fGVufDB8fHx8MTczODgwNDE3NXww&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[400px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] text-[#988763] font-semibold max-sm:text-[24px]'>
                            {t('country_specific_surrogacy_laws_title')}
                        </h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('country_specific_surrogacy_laws_text')}
                        </p>
                    </div>

                </div>

                <div className='bg-[#d5c1a4] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1596734098749-8691be5f0d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw5fHxwYXJlbnRhbHxlbnwwfHx8fDE3Mzg4MDQyNjV8MA&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[400px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] text-[#988763] font-semibold max-sm:text-[24px]'>
                            {t('parental_rights_title')}
                        </h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('parental_rights_text')}
                        </p>
                    </div>

                </div>

                <div className='bg-[#d5c1a4] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwxN3x8Y29udHJhY3R8ZW58MHx8fHwxNzM4ODA0NjQxfDA&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[500px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] text-[#988763] font-semibold max-sm:text-[24px]'>
                            {t('contract_drafting_title')}
                        </h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('contract_drafting_text')}
                        </p>
                    </div>

                </div>

                <div className='bg-[#d5c1a4] flex flex-col gap-[40px] p-[16px] items-center rounded-[10px]'>
                    <img
                        src='https://images.unsplash.com/photo-1516382799247-87df95d790b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwyfHxjaGVja3xlbnwwfHx8fDE3Mzg3ODc5OTF8MA&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-[400px] h-[400px] rounded-[50%] max-lg:w-[400px] max-lg:h-[400px] max-sm:h-[200px] max-sm:w-[200px]'
                    />
                    <div className='flex flex-col items-center text-center gap-[16px]'>
                        <h2 className='text-[27px] text-[#988763] font-semibold max-sm:text-[24px]'>
                            {t('risk_assessment_title')}
                        </h2>
                        <p className='text-[22px] max-sm:text-[18px]'>
                            {t('risk_assessment_text')}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LegalService;