import styles from '@/components/WebsiteCreationModal/ModalItem/style.module.scss';
import {IModalItem} from '@/constants/WebsiteCreationModal/type';
//import {FieldErrors, useForm, UseFormRegister} from 'react-hook-form';
import {UseFormRegister} from 'react-hook-form';
import {useEffect} from 'react';

interface IConditionalInput {
    item: IModalItem;
    register: UseFormRegister<IModalItem>
    errors: any
}

export default function ConditionalInput ({item, register, errors}: IConditionalInput) {
    //const {formState:{errors}} = useForm<IModalItem>()
    const pattern =  /[0-9+()-]+/;
    const validateRules =(value:string)=> (/[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/).test(value) ;



    useEffect(()=>{
        console.log('ConditionalInput:',errors)
    },[errors])

    return (
        item.type === 'tel' ? (
<>
    <input
        placeholder={item.placeholder}
        className={styles['modal-item__input']}
        required={item.required}
        type={item.type}
        {...register(item.name,{required: 'Пожалуйста, введите номер телефона',
               pattern: {value:pattern, message: 'Неверный формат'}})
    }
    />
    {errors.item.name &&(
    <div style={{color:'red'}}>{errors.item.name?.message}</div>
    )}
</>

        ) : (
            <input
                placeholder={item.placeholder}
                className={styles['modal-item__input']}
                required={item.required}
                type={item.type}
                //{...register(item.name, {
                //	...((pattern && { pattern: { value: pattern, message: 'Неверный формат' } }) || {}),
                //})}
                // pattern={pattern}
                // onInput={(e) => {
                // 	e.currentTarget.value = e.currentTarget.value.replace(/[^\d+()-]/g, '');
                // }}
                {...register(item.name, {validate: validateRules})}
            />
        )
        // {
        //     errors?.name && (
        //         <div style={{color: 'red'}}>{errors.name.message}</div>
        //     )
        // }
    )
}
