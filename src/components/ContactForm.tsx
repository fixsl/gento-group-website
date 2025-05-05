"use client"

import { useId, useState } from "react";

interface FormData {
    firstName: string;
    email: string;
    lastName: string;
    company: string;
    message: string
}

interface FormErrors {
    firstName?: string;
    email?: string;
    lastName?: string;
    company?: string;
    message?: string
}

function TextInput({
    label,
    error,
    ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string, error?: string }) {
    let id = useId()

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2.5">
                <input
                    type="text"
                    id={id}
                    {...props}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className={`mt-1 text-sm/6 ${error ? 'text-red-500' : 'text-neutral-500'} `}>{error}</p>
            </div>
        </div>
    )
}

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
    })

    const [errors, setErrors] = useState<FormErrors>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {


        setErrors({ ...errors, [e.target.name]: false })
        setFormData({ ...formData, [e.target.name]: e.target.value })

        console.log('handle', e.target.name);

    }

    const validateForm = (): boolean => {
        let newErrors: FormErrors = {}

        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required *'
        if (formData.email && !formData.email.includes('@'))
            newErrors.email = 'Enter a valid email.'
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required.'
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required *'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0 // Returns true if no errors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        console.log('valdate', validateForm());


        e.preventDefault()
        if (validateForm()) {
            setIsLoading(true);

            // make fetch request with post method and pass the body
            fetch('api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        // clear form inputs
                        setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            company: '',
                            message: '',
                        })

                        // // display notistack message
                        // enqueueSnackbar(
                        //     'Thanks for contacting! We will get back to you soon.',
                        //     {
                        //         variant: 'success',
                        //         autoHideDuration: 6000,
                        //         anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                        //     },
                        // );

                        setIsLoading(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setIsLoading(false);
                })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <TextInput
                    label="Fist Name"
                    name="firstName"
                    placeholder="Enter First Name"
                    autoComplete="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                />
                <TextInput
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                />
                <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="Enter Email Address"
                />
                <TextInput
                    label="Company"
                    name="company"
                    autoComplete="company"
                    value={formData.company}
                    onChange={handleChange}
                    error={errors.company}
                    placeholder="Enter Your Company Name"
                />
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            // defaultValue={''}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.message && (
                            <p className={`mt-1 text-sm/6 ${errors.message ? 'text-red-500' : 'text-neutral-500'} `}>{errors.message}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    {isLoading ? 'loading' : 'Let’s talk'}

                </button>
            </div>

        </form >
    )
}

export default ContactForm