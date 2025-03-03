import React from "react";
import {useTranslation} from "react-i18next";
import Form from "../Form/Form";

const Book = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className='bg-[url(https://images.unsplash.com/photo-1628676403821-b3c60cdf21de?ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw5fHxjb3VudHJpZXN8ZW58MHx8fHwxNzM4ODQzMTI2fDA&ixlib=rb-4.0.3q=80&w=2160)] bg-cover bg-center p-[32px]'>
                <div className='bg-white p-[32px] flex flex-col text-center items-center gap-[16px] rounded-[10px]'>
                    <h1 className='text-[36px] font-semibold max-lg:text-[32px]'>{t('surrogacy_title')}</h1>
                    <p className='text-[24px] max-lg:text-[18px]'>{t('surrogacy_text')}</p>
                    <a onClick={()=> (document.getElementById
                ('my_modal_5') as HTMLDialogElement).showModal() } className='bg-[#694b1a] w-[20%] py-[16px] px-[20px] text-white text-[18px] cursor-pointer hover:bg-[#fff1e0] hover:text-[#694b1a] transition rounded-[5px] max-lg:w-[70%]'>
                        {t('book')}
                    </a>
                </div>
            </div>
            <Form/>
        </div>
    );
};

export default Book;