import React from "react";
import {useTranslation} from "react-i18next";
import Form from "../Form/Form";

const Consulting = () => {
    const {t} = useTranslation()
    return (
        <div className='flex flex-row justify-between max-lg:flex-col-reverse'>
            <div className='bg-[#876327] w-full flex flex-col items-start justify-center p-[64px] gap-[16px] max-lg:p-[32px]'>
                <h1 className='text-[60px] text-[#d5c1a4] font-semibold max-lg:text-[48px] max-sm:text-[32px]'>{t('surrogacy_legal_consulting_title')}</h1>
                <p className='text-[22px] max-lg:text-[18px] text-[#f2ce7d]'>
                    {t('surrogacy_legal_consulting_text')}
                </p>
                <a onClick={()=> (document.getElementById
                ('my_modal_5') as HTMLDialogElement).showModal() } className='py-[16px] px-[20px] text-[20px] text-white text-center border-white border-[3px] w-[30%] max-lg:text-[18px] max-lg:w-full transition hover:bg-[#e3c493] hover:text-[#694b1a] cursor-pointer'>
                    {t('book_consultation')}
                </a>
            </div>
            <img
                src='https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw2fHxsYXd8ZW58MHx8fHwxNzM4NzIzNTU4fDA&ixlib=rb-4.0.3q=80&w=1080'
                alt=''
                className="w-1/2"
            />

            <Form/>
        </div>
    );
};

export default Consulting;