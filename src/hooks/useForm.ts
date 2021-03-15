import React, {useState} from 'react'

interface FormResult<T> {
    values: T;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDropdownChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    setValues: (values: T) => void
}

const useForm = <T>(initialValues: T, callback: CallableFunction): FormResult<T> => {
    const [values, setValues] = useState(initialValues)

    const handleSubmit = (e: React.FormEvent) => {
        e && e.preventDefault()
        callback(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        setValues((val: T) => ({
            ...val,
            [e.target.name]: e.target.type === 'radio' || e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }))
    }

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.persist()
        setValues((val: T) => ({
            ...val,
            [e.target.name]: e.target.value
        }))
    }

    return {
        handleSubmit,
        handleChange,
        handleDropdownChange,
        values,
        setValues
    }
}

export default useForm
