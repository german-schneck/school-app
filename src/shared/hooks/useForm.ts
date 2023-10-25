// Dependencies
import {FormikErrors, FormikTouched, FormikValues, FormikHelpers} from 'formik';

/**
 * Custom hook for handling form logic.
 *
 * @template FormValues - The type of form values.
 */
interface UseFormProps<FormValues extends FormikValues> {
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  setTouched: FormikHelpers<FormValues>['setTouched'];
  setFieldValue: FormikHelpers<FormValues>['setFieldValue'];
}

/**
 * The return type of the useForm hook.
 *
 * @template FormValues - The type of form values.
 */
type UseFormReturn<FormValues extends FormikValues> = {
  handleChangeField: (field: keyof FormValues, value: any) => void;
  getErrorFromField: (field: keyof FormValues) => string | undefined;
};

/**
 * Custom hook for handling form logic.
 *
 * @template FormValues - The type of form values.
 * @param props - The props for the useForm hook.
 * @returns The useForm return object.
 */
function useForm<FormValues extends FormikValues>({
  errors,
  touched,
  setTouched,
  setFieldValue,
}: UseFormProps<FormValues>): UseFormReturn<FormValues> {
  /**
   * Handles the change of a form field.
   *
   * @param field - The field to change.
   * @param value - The new value of the field.
   */
  const handleChangeField = (field: keyof FormValues, value: any) => {
    setTouched({...touched, [field]: true});
    setFieldValue(field.toString(), value);
  };

  /**
   * Gets the error message from a form field.
   *
   * @param field - The field to get the error message from.
   * @returns The error message of the field, or undefined if there is no error.
   */
  const getErrorFromField = (field: keyof FormValues) => {
    return errors[field.toString()] && touched[field.toString()]
      ? (errors[field] as string)
      : undefined;
  };

  return {
    handleChangeField,
    getErrorFromField,
  };
}

export default useForm;
