import React from "react";
import {useTranslation} from "react-i18next";

const Benefits = () => {
    const {t} = useTranslation()
    return (
        <div className='py-[32px] px-[200px] max-lg:p-[32px]'>
            <h1 className='text-center font-semibold text-[32px] pb-[40px]'>{t("whyChoose")}</h1>

            <div className='flex flex-col gap-[100px]'>
                <div className='flex flex-row gap-[50px] max-lg:flex-col'>
                    <img
                        src='https://images.unsplash.com/photo-1573496267526-08a69e46a409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw3OXx8Y29ycG9yYXRlfGVufDB8fHx8MTcxMDk1MDU2MHww&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-1/4 rounded-[2%] max-lg:w-full'
                    />
                    <div className='flex flex-col items-start justify-center gap-[24px]'>
                        <h2 className='text-[25px] font-semibold'>{t("ethicalTitle")}</h2>
                        <p className='text-[20px]'>{t("ethicalText")}</p>
                    </div>
                </div>
                <div className='flex flex-row-reverse gap-[50px] max-lg:flex-col'>
                    <img
                        src='https://images.unsplash.com/photo-1614107151491-6876eecbff89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw4fHxpbnRlcm5hdGlvbmFsfGVufDB8fHx8MTczODgwMDYwMnww&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-1/4 rounded-[2%] max-lg:w-full'
                    />
                    <div className='flex flex-col items-start justify-center gap-[24px]'>
                        <h2 className='text-[25px] font-semibold'>{t("internationalTitle")}</h2>
                        <p className='text-[20px]'>{t("internationalText")}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-[50px] max-lg:flex-col'>
                    <img
                        src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwzMXx8Y29ycG9yYXRlfGVufDB8fHx8MTcxMDk1MDQ5NHww&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-1/4 rounded-[2%] max-lg:w-full'
                    />
                    <div className='flex flex-col items-start justify-center gap-[24px]'>
                        <h2 className='text-[25px] font-semibold'>{t("legalTitle")}</h2>
                        <p className='text-[20px]'>
                            {t("legalText")}
                        </p>
                    </div>
                </div>
                <div className='flex flex-row-reverse gap-[50px] max-lg:flex-col'>
                    <img
                        src='https://images.unsplash.com/photo-1525853794195-b8e523e4d459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwxM3x8aW50ZXJuYXRpb25hbHxlbnwwfHx8fDE3Mzg4MDExNDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
                        alt=''
                        className='w-1/4 rounded-[2%]  max-lg:w-full'
                    />
                    <div className='flex flex-col items-start justify-center gap-[24px]'>
                        <h2 className='text-[25px] font-semibold'>{t("costTitle")}</h2>
                        <p className='text-[20px]'>
                            {t("costText")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;