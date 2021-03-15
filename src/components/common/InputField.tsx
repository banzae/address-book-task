import React, { ReactElement } from 'react'

export interface InputFieldProps {
    type?: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string | number;
    placeholder?: string;
    error?: string;
    autoComplete?: string;
    minDate?: Date;
    defaultValue?: string;
}

function InputField(props: InputFieldProps): ReactElement {
    return <div  className="form-group">
        <input {...props} />
        {props.error ? <small className='invalid'>{props.error}</small> : null}
    </div>
}

export default InputField
