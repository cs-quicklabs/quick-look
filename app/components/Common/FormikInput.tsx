import { ErrorMessage, useField } from 'formik';
import InputCheckbox from './InputCheckbox';

export const FormikInput = ({ label, ...props }:any) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-3">{label}</label>
      <input
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage className="text-red-600 mt-2 text-sm" component="div" name={field.name} />
    </div>
  )
}

export const FormikCheckbox = ({ ...props }) => {
  const [field, meta] = useField(props.name);
  const { touched, error } = { ...meta };

  return (
    <>
      <div className="flex items-center">
        <InputCheckbox touched={touched} error={error} {...field} {...props} />
        <label
          htmlFor={props.name}
          className="ml-2 block text-sm text-gray-900"
          dangerouslySetInnerHTML={{ __html: props.label }}
        ></label>
      </div>
      {props.validation && error ? (
        <span className="text-red-600 mt-2 text-sm">{error}</span>
      ) : (
        <ErrorMessage
          name={props.name}
          component="span"
          className="text-red-600 mt-2 text-sm"
        />
      )}
    </>
  );
};