import { ErrorMessage, useField } from 'formik';
import InputCheckbox from './InputCheckbox';

export const FormikInput = ({ label, ...props }:any) => {
  const [field, meta] = useField(props);
  return (
    <div className='relative'>
      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...field} {...props}
        autoComplete="off"
      />
      {props?.xyz && <label htmlFor={field.name} className='w-24 pl-2 inset-x-0 top-10 absolute sm:text-sm'>
          {props.xyz}
        </label>}
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