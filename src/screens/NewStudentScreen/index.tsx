// Dependencies
import React, {useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import Title from '../../shared/components/Title';

// StyleSheet
import styles from './styles';

// Components
import NewStudentForm, {
  FormValues,
} from '../../shared/components/forms/NewStudentForm';

// Hooks
import useStudents from '../../shared/hooks/useStudents';
import useLoader, {LoadersId} from '../../shared/hooks/useLoader';

function NewStudentScreen(): React.ReactElement {
  const {createStudent} = useStudents();
  const [isLoadingCreationStudent] = useLoader(LoadersId.IS_CREATING_STUDENT);

  /**
   * Handles the submission of creating a new student.
   * @param {FormValues} values - The form values.
   * @returns {void}
   */
  const handleSubmitCreateStudent = useCallback(
    (values: FormValues): void => {
      const {firstName, lastName, age, email, gender, region} = values;
      if (age) {
        createStudent({
          firstName,
          lastName,
          email,
          age,
          gender,
          region,
        });
      }
    },
    [createStudent],
  );

  return (
    <ScrollView contentContainerStyle={styles.layout}>
      <View style={styles.field}>
        <Title
          title={'Register new student'}
          description={'Enter the data to register the new student.'}
        />
      </View>
      <NewStudentForm
        isLoading={isLoadingCreationStudent}
        onSubmit={handleSubmitCreateStudent}
      />
    </ScrollView>
  );
}

export default NewStudentScreen;
