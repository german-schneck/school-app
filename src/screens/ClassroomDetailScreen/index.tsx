// Dependencies
import React, {useCallback} from 'react';
import {Text, View, Alert, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Hooks
import useClassrooms from '../../shared/hooks/useClassrooms';
import useStudents from '../../shared/hooks/useStudents';

// Components
import Button from '../../shared/components/Button';

// Types
import {ClassroomDetailScreenProps} from './types';
import {RootStackNavigationProp} from '../../shared/types/navigator';

// StyleSheet
import styles from './styles';

function ClassroomDetailScreen({
  route: {
    params: {classroom},
  },
}: ClassroomDetailScreenProps): React.ReactElement {
  const {classrooms, deleteClassroom} = useClassrooms();
  const {students} = useStudents();
  const navigation =
    useNavigation<RootStackNavigationProp<'ClassroomDetailScreen'>>();

  /**
   * Handles the press event for the "Edit Students" button.
   * Navigates to the EditClassroomStudentsScreen with the classroom ID as a parameter.
   */
  const handlePressEditStudents = useCallback(() => {
    navigation.push('EditClassroomStudentsScreen', {
      classroomId: classroom.id,
    });
  }, [navigation, classroom]);

  /**
   * Handles the press event for the "Delete" button.
   * Displays a confirmation alert and deletes the classroom if confirmed.
   */
  const handlePressRemoveClassroom = useCallback(() => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this classroom?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteClassroom(classroom.id),
        },
      ],
    );
  }, [deleteClassroom, classroom.id]);

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>{classroom.name}</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.actions}>
              <Button
                caption={'Edit Students'}
                style={styles.actionButton}
                onPress={handlePressEditStudents}
              />

              <Button
                caption={'Delete'}
                style={styles.actionButton}
                onPress={handlePressRemoveClassroom}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Description</Text>
              <Text style={styles.text}>{classroom.description}</Text>
            </View>

            <View style={[styles.field, styles.studentsTitle]}>
              <Text style={styles.label}>Students</Text>
            </View>
          </View>
        </>
      )}
      style={styles.layout}
      data={classrooms[classroom.id]?.students}
      keyExtractor={studentId => studentId.toString()}
      ListEmptyComponent={() => (
        <Text style={[styles.body, styles.text]}>
          There are no students enrolled in this class
        </Text>
      )}
      renderItem={({item: studentId}) => (
        <View key={studentId} style={[styles.student, styles.body]}>
          <Text style={styles.text}>
            #{studentId}, {students[studentId].firstName}{' '}
            {students[studentId].lastName}
          </Text>
        </View>
      )}
    />
  );
}

export default ClassroomDetailScreen;
