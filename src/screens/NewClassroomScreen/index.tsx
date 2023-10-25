// Dependencies
import React, {useCallback} from 'react';
import {ScrollView, View} from 'react-native';

// StyleSheeet
import styles from './styles';

// Components
import NewClassroomForm, {
  FormValues,
} from '../../shared/components/forms/NewClassroomForm';
import Title from '../../shared/components/Title';

// Hooks
import useClassrooms from '../../shared/hooks/useClassrooms';
import useLoader, {LoadersId} from '../../shared/hooks/useLoader';

function NewClassroomScreen(): React.ReactElement {
  const {createClassroom} = useClassrooms();
  const [isLoadingCreationClassroom] = useLoader(
    LoadersId.IS_CREATING_CLASSROOM,
  );

  /**
   * Handles the submission of the create classroom form.
   *
   * @param values - The form values.
   */
  const handleSubmitCreateClassroom = useCallback(
    ({name, description}: FormValues) => {
      createClassroom({
        name,
        description,
      });
    },
    [createClassroom],
  );

  return (
    <ScrollView contentContainerStyle={styles.layout}>
      <View style={styles.field}>
        <Title
          title={'Create a new classroom'}
          description={
            'Write the essential data of the class to add it to the school.'
          }
        />
      </View>
      <NewClassroomForm
        isLoading={isLoadingCreationClassroom}
        onSubmit={handleSubmitCreateClassroom}
      />
    </ScrollView>
  );
}

export default NewClassroomScreen;
