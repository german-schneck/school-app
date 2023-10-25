// Dependencies
import {FormikHelpers} from 'formik';

// Types
import {Student} from '../../../hooks/useStudents';

export interface FormValues {
  students: Array<Student['id']>;
}

export interface EditClassroomStudentsFormProps {
  initialValues?: FormValues;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void;
}
