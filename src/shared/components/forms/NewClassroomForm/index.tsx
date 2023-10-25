// Dependencies
import React from 'react';
import {View} from 'react-native';
import {useFormik} from 'formik';

// StyleSheeet
import styles from './styles';

// Components
import TextInput from '../../TextInput';
import Button from '../../Button';

// Hooks
import useForm from '../../../hooks/useForm';

// Types
import {FormValues, NewClassroomFormProps} from './types';

// Validations
import validationSchema from './validation';

const defaultInitialValues = {
  name: '',
  description: '',
};

function NewClassroomForm({
  isLoading,
  initialValues = defaultInitialValues,
  onSubmit,
}: NewClassroomFormProps): React.ReactElement {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit,
  });

  const {handleChangeField, getErrorFromField} = useForm<FormValues>(formik);

  return (
    <View>
      <View style={styles.field}>
        <TextInput
          label={'Name'}
          value={formik.values.name}
          error={getErrorFromField('name')}
          placeholder={'Write the classroom name here'}
          onChangeText={name => handleChangeField('name', name)}
        />
      </View>

      <View style={styles.field}>
        <TextInput
          label={'Description'}
          error={getErrorFromField('description')}
          value={formik.values.description}
          placeholder={'Write the classroom description here'}
          onChangeText={description =>
            handleChangeField('description', description)
          }
        />
      </View>
      <View style={styles.actions}>
        <Button
          caption={'Create classroom'}
          onPress={formik.handleSubmit}
          isLoading={isLoading}
          disabled={!formik.isValid}
        />
      </View>
    </View>
  );
}

export type {FormValues};
export default NewClassroomForm;
