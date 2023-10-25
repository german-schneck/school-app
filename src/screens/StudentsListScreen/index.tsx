// Dependencies
import React, {useCallback} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import StudentCard from '../../shared/components/cards/StudentCard';
import EmptyIndicator from '../../shared/components/indicators/EmptyIndicator';
import Button from '../../shared/components/Button';
import Title from '../../shared/components/Title';

// StyleSheet
import styles from './styles';

// Hooks
import useStudents, {Student} from '../../shared/hooks/useStudents';

// Types
import {RootStackNavigationProp} from '../../shared/types/navigator';

function StudentsListScreen(): React.ReactElement {
  const navigation =
    useNavigation<RootStackNavigationProp<'StudentsListScreen'>>();

  const {students, deleteStudent} = useStudents();

  /**
   * Handles the press event for the "Add Student" button.
   */
  const handlePressNewStudent = useCallback(() => {
    navigation.navigate('NewStudentScreen');
  }, [navigation]);

  /**
   * Handles the press event for deleting a student.
   * @param id - The ID of the student to delete.
   */
  const handlePressDeleteStudent = useCallback(
    (id: Student['id']) => {
      Alert.alert(
        'Confirmation',
        'Are you sure you want to delete this student?',
        [
          {text: 'Cancel', style: 'cancel'},
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => deleteStudent(id),
          },
        ],
      );
    },
    [deleteStudent],
  );

  return (
    <FlatList
      data={Object.keys(students)}
      keyExtractor={(item, index) =>
        `${students[item].firstName},${students[item].lastName}-${index}`.toString()
      }
      renderItem={({item}) => (
        <StudentCard
          id={students[item].id}
          firstName={students[item].firstName}
          lastName={students[item].lastName}
          email={students[item].email}
          age={students[item].age}
          onPress={handlePressDeleteStudent}
        />
      )}
      contentContainerStyle={styles.flatlistContainer}
      style={styles.layout}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() =>
        Object.keys(students).length > 0 && (
          <View style={styles.header}>
            <View style={styles.field}>
              <Title
                title={'Students'}
                description={
                  'These are all the students enrolled in the school'
                }
              />
            </View>
            <Button caption={'Add Student'} onPress={handlePressNewStudent} />
          </View>
        )
      }
      ListEmptyComponent={() => (
        <View style={styles.empty}>
          <EmptyIndicator
            title={'No students added'}
            description={'No students added yet. Start adding now!'}
            action={{
              text: 'Add Student',
              onPress: handlePressNewStudent,
            }}
          />
        </View>
      )}
    />
  );
}

export default StudentsListScreen;
