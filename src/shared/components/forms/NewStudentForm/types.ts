// Dependencies
import {FormikHelpers} from 'formik';

// Types
import {Student} from '../../../../store/students/types';

export interface FormValues {
  firstName: Student['firstName'];
  lastName: Student['lastName'];
  email: Student['email'];
  gender: Student['gender'];
  age?: Student['age'];
}

export interface NewStudentFormProps {
  isLoading: boolean;
  initialValues?: FormValues;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void;
}
