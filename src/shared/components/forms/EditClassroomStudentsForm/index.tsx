// Dependencies
import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useFormik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Components
import EmptyIndicator from '../../indicators/EmptyIndicator';

// StyleSheeet
import styles from './styles';
import theme from '../../../styles/theme';

// Hooks
import useForm from '../../../hooks/useForm';
import useStudents, {Student} from '../../../hooks/useStudents';

// Types
import {FormValues, EditClassroomStudentsFormProps} from './types';

const defaultInitialValues = {
  students: [],
};

function EditClassroomStudentsForm({
  initialValues = defaultInitialValues,
  onSubmit,
}: EditClassroomStudentsFormProps): React.ReactElement {
  const {students} = useStudents();

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit,
  });

  const {handleChangeField} = useForm<FormValues>(formik);

  /**
   * Handles the selection of a student.
   * @param isSelected - Whether the student is selected or not.
   * @param studentId - The ID of the student.
   */
  const handleSelectStudent = useCallback(
    (isSelected: boolean, studentId: Student['id']) => {
      if (isSelected) {
        handleChangeField('students', [...formik.values.students, studentId]);
      } else {
        handleChangeField(
          'students',
          formik.values.students.filter(id => id !== studentId),
        );
      }
      formik.handleSubmit();
    },
    [formik, handleChangeField],
  );

  return (
    <FlatList
      style={styles.layout}
      contentContainerStyle={styles.container}
      data={Object.keys(students)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={() => (
        <EmptyIndicator
          title={'No students registered'}
          description={
            'There are no students registered in the school. To add students to this course, you need to add them first.'
          }
        />
      )}
      renderItem={({item: id}) => {
        const isSelected = formik.values.students.includes(Number(id));
        return (
          <View style={styles.student}>
            <BouncyCheckbox
              size={38}
              isChecked={isSelected}
              fillColor={theme.colors.cyan}
              unfillColor={theme.colors.white}
              onPress={(isChecked: boolean) =>
                handleSelectStudent(isChecked, Number(id))
              }
            />
            <View style={styles.field}>
              <Text style={styles.title}>
                {students[id].firstName} {students[id].lastName}
              </Text>
              <Text style={styles.email}>{students[id].email}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}

export type {FormValues};
export default EditClassroomStudentsForm;
