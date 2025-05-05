import { useId } from "react"

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

export default TextInput