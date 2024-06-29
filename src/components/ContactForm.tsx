import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/ContactForm.scss';
import {InputForm} from "./InputForm.tsx";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type FormData = {
    name: string;
    email: string;
    message: string;
};

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
});

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = data => {
        toast.success("Form submitted successfully!", {
            position: "top-center"
        });
        console.log(data);
        reset();
    };

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <InputForm
                    label="Name"
                    placeholder="Name"
                    errorMessage={errors.name?.message}
                    register={register('name')}
                />
                
                <InputForm
                    label="Email"
                    placeholder="Email"
                    errorMessage={errors.email?.message}
                    register={register('email')}
                />

                <InputForm
                    label="Message"
                    placeholder="Message"
                    errorMessage={errors.message?.message}
                    register={register('message')}
                />

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
