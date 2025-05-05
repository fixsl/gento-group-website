"use client"

import { useEffect, useState } from "react";

import TextInput from "./TextInput";
import SubmitFeedback from "./SubmitFeedback";

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


const ContactForm = () => {

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
    })

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({})
    const [feedback, setFeedback] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrors({ ...errors, [e.target.name]: false })
        setFormData({ ...formData, [e.target.name]: e.target.value })
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

                        setFeedback(true)

                    }
                })
                .catch((error) => {
                    console.error(error);
                }).finally(() => {
                    setIsLoading(false)
                })
        }
    }

    useEffect(() => {

        setTimeout(() => {
            setFeedback(false)
        }, 6000);

    }, [feedback])


    return (
        <>
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
                        className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center justify-center"
                        disabled={isLoading} // Optional: disable the button while loading
                    >
                        {isLoading ? (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                                ></path>
                            </svg>
                        ) : (
                            "Let’s talk"
                        )}
                    </button>
                </div>
            </form >
            {feedback && (
                <SubmitFeedback varient="success" message='Email sent successfully.' />
            )}
        </>
    )
}

export default ContactForm