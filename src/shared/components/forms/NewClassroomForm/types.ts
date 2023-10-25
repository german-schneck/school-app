// Dependencies
import {FormikHelpers} from 'formik';

// Types
import {Classroom} from '../../../../store/classrooms/types';

export interface FormValues {
  name: Classroom['name'];
  description: Classroom['description'];
}

export interface NewClassroomFormProps {
  isLoading: boolean;
  initialValues?: FormValues;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void;
}
