// Dependencies
import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import ClassroomCard from '../../shared/components/cards/ClassroomCard';
import EmptyIndicator from '../../shared/components/indicators/EmptyIndicator';
import Button from '../../shared/components/Button';

// StyleSheet
import styles from './styles';

// Hooks
import useClassrooms from '../../shared/hooks/useClassrooms';

// Types
import {RootStackNavigationProp} from '../../shared/types/navigator';
import Title from '../../shared/components/Title';

function ClassroomsListScreen(): React.ReactElement {
  const navigation =
    useNavigation<RootStackNavigationProp<'ClassroomsListScreen'>>();

  const {classrooms} = useClassrooms();

  /**
   * Handles the press event on a classroom card.
   * @param id - The ID of the classroom.
   */
  const handlePressClassroom = useCallback(
    (id: number) => {
      navigation.push('ClassroomDetailScreen', {
        classroom: classrooms[id],
      });
    },
    [navigation, classrooms],
  );

  /**
   * Handles the press event to navigate to the NewClassroomScreen.
   */
  const handlePressNewClassroom = useCallback(() => {
    navigation.navigate('NewClassroomScreen');
  }, [navigation]);

  return (
    <FlatList
      data={Object.keys(classrooms)}
      keyExtractor={(item, index) =>
        `${classrooms[item].name}-${index}`.toString()
      }
      renderItem={({item}) => (
        <ClassroomCard
          id={classrooms[item].id}
          name={classrooms[item].name}
          description={classrooms[item].description}
          onPress={handlePressClassroom}
        />
      )}
      contentContainerStyle={styles.flatlistContainer}
      style={styles.layout}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() =>
        Object.keys(classrooms).length > 0 && (
          <View style={styles.header}>
            <View style={styles.field}>
              <Title
                title={'Classrooms'}
                description={
                  'These are the available classrooms within the school'
                }
              />
            </View>
            <Button
              caption={'Add Classroom'}
              onPress={handlePressNewClassroom}
            />
          </View>
        )
      }
      ListEmptyComponent={() => (
        <View style={styles.empty}>
          <EmptyIndicator
            title={'No classrooms added'}
            description={
              'There are no classrooms created yet. Start creating one now.'
            }
            action={{
              text: 'Add Classroom',
              onPress: handlePressNewClassroom,
            }}
          />
        </View>
      )}
    />
  );
}

export default ClassroomsListScreen;
