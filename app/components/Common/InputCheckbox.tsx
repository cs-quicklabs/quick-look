const InputCheckbox = ({ ...props }) => {
  const { touched, error, validation, ...rest }: any = { ...props }
  return (
    <input
      className={`h-4 w-4 focus:outline-none text-indigo-600  border-gray-300 rounded focus:ring-0 focus:ring-transparent focus:ring-offset-0 ${
        (error && touched) || (validation && error) ? ' border-red-300' : ' border-gray-300'
      }`}
      {...rest}
    />
  )
}

export default InputCheckbox
