// Dependencies
import * as yup from 'yup';
import {Gender, Region} from '../../../../store/students/types';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),

  lastName: yup.string().required('Last name is required'),

  gender: yup
    .string()
    .oneOf([Gender.MALE, Gender.FEMALE], 'Invalid gender')
    .required('Gender is required'),

  email: yup.string().email('Invalid email').required('Email is required'),

  age: yup
    .date()
    .max(
      new Date(new Date().getFullYear() - 18, 0, 1),
      'Age must be at most 18 years old',
    )
    .required('Age is required'),

  region: yup
    .string()
    .oneOf([Region.AMER, Region.EMEA, Region.APAC], 'Invalid region')
    .required('Region is required'),
});

export default validationSchema;
