interface InputFormProps {
    label: string,
    placeholder: string,
    errorMessage: string | undefined,
    register: object,
}

export function InputForm({label, placeholder, errorMessage, register}: InputFormProps) {
    return (
        <>
            <div className="form-group">
                <label>{label}</label>
                <input placeholder={placeholder} {...register}/>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </>
    );
}