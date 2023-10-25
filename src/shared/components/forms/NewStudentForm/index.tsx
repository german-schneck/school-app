// Dependencies
import React from 'react';
import {View} from 'react-native';
import {useFormik} from 'formik';

// StyleSheeet
import styles from './styles';

// Components
import TextInput from '../../TextInput';
import Button from '../../Button';
import SelectorInput from '../../SelectorInput';
import DateInput from '../../DateInput';

// Hooks
import useForm from '../../../hooks/useForm';

// Types
import {FormValues, NewStudentFormProps} from './types';
import {Gender, Region} from '../../../../store/students/types';

// Validation
import validationSchema from './validation';

const defaultInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  gender: Gender.MALE,
  age: undefined,
  region: Region.EMEA,
};

function NewStudentForm({
  isLoading,
  initialValues = defaultInitialValues,
  onSubmit,
}: NewStudentFormProps): React.ReactElement {
  const formik = useFormik<FormValues>({
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit,
  });

  const {handleChangeField, getErrorFromField} = useForm<FormValues>(formik);

  return (
    <>
      <View style={styles.field}>
        <TextInput
          label={'First name'}
          value={formik.values.firstName}
          placeholder={'Write the student first name'}
          onChangeText={firstName => handleChangeField('firstName', firstName)}
          error={getErrorFromField('firstName')}
        />
      </View>
      <View style={styles.field}>
        <TextInput
          label={'Last name'}
          value={formik.values.lastName}
          placeholder={'Write the student last name'}
          onChangeText={lastName => handleChangeField('lastName', lastName)}
          error={getErrorFromField('lastName')}
        />
      </View>
      <View style={styles.field}>
        <TextInput
          label={'Email Address'}
          value={formik.values.email}
          placeholder={'Write the student email'}
          onChangeText={email => handleChangeField('email', email)}
          error={getErrorFromField('email')}
        />
      </View>
      <View style={styles.field}>
        <DateInput
          label={'Birthdate'}
          placeholder={'Select the birtdate'}
          value={formik.values.age}
          onChange={age => handleChangeField('age', age)}
          error={getErrorFromField('age')}
        />
      </View>
      <View style={styles.field}>
        <SelectorInput
          label={'Region'}
          value={formik.values.region}
          placeholder={'Select the region'}
          onChange={region => handleChangeField('region', region)}
          error={getErrorFromField('region')}
          items={[
            {
              label: 'North, Central, and South America',
              value: Region.AMER,
            },
            {
              label: 'Europe, the Middle East, and Africa',
              value: Region.EMEA,
            },
            {
              label: 'Asia and Pacific',
              value: Region.APAC,
            },
          ]}
        />
      </View>

      <View style={styles.actions}>
        <Button
          caption={'Add Student'}
          onPress={formik.handleSubmit}
          isLoading={isLoading}
          disabled={!formik.isValid}
        />
      </View>
    </>
  );
}

export type {FormValues};
export default NewStudentForm;
