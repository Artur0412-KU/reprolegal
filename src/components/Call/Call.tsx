import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {useTranslation} from "react-i18next";

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
}

const Call = () => {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const subject = encodeURIComponent("New Contact Form Submission");
        const body = encodeURIComponent(
            `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`
        );

        window.location.href = `mailto:support@rep-legal.com?subject=${subject}&body=${body}`;
    };
    return (
        <div className='flex items-center justify-center gap-[100px] p-[64px] max-lg:flex-col max-lg:p-[32px] max-lg:gap-[48px]'>
            <div className='flex flex-col gap-[16px] items-end justify-start max-lg:items-center'>
                <h1 className='font-semibold text-[64px] max-lg:text-[32px]'>{t('contactUs')}</h1>
                <h3 className='text-[24px] max-lg:text-[18px] max-lg:text-center'>{t('discoverSolutions')}</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-[16px] w-1/3 max-lg:w-full'>
                <div className='grid grid-cols-2 gap-[24px] w-full'>
                    <div className="flex flex-col w-full">
                        <input
                            placeholder={t('firstName')} {...register("firstName", {required: t('requiredName')})}
                            className={`p-[8px] rounded-[5px] ${errors.firstName ? 'border-red-500 border-[2px]' : ''}`}
                        />
                           {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <input
                            placeholder={t('lastName')} {...register("lastName", {required: t('requiredLastName')})}
                            className={`p-[8px] rounded-[5px] ${errors.lastName ? 'border-red-500 border-[2px]' : ''}`}/>
                        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <input placeholder={t('email')}
                               type="email" {...register("email", {required: t('requiredEmail')})}
                               className={`p-[8px] rounded-[5px] ${errors.email ? 'border-red-500 border-[2px]' : ''}`}/>
                           {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <input placeholder={t('phone')}
                               type='tel' {...register('phone', {required: t('requiredPhone')})}
                               className={`p-[8px] rounded-[5px] ${errors.phone?.message ? 'border-red-500 border-[2px]' : ''}`}/>
                           {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                    </div>

                    <div className="flex flex-col w-full col-span-2">
                        <input placeholder={t('message')} {...register('message', {required: t('requiredMessage')})}
                               className={`p-[8px] rounded-[5px] ${errors.message?.message ? 'border-red-500 border-[2px]' : ''}`}/>
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                    </div>
                </div>

                <input type="submit"
                       className='cursor-pointer bg-[#694b1a] p-[15px] w-full rounded-[5px] text-white transition hover:bg-[#e3c493] hover:text-[#694b1a]'/>
            </form>
        </div>
    );
};

export default Call;