// Dependencies
import React, {useCallback} from 'react';

// Types
import {EditClassroomStudentsScreenProps} from './types';

// Hooks
import useClassrooms from '../../shared/hooks/useClassrooms';

// Components
import EditClassroomStudentsForm, {
  FormValues,
} from '../../shared/components/forms/EditClassroomStudentsForm';

function EditClassroomStudentsScreen({
  route: {
    params: {classroomId},
  },
}: EditClassroomStudentsScreenProps): React.ReactElement {
  const {classrooms, updateClassroom} = useClassrooms();

  /**
   * Handles the submission of the Edit Classroom Students form.
   * @param {FormValues} values - The form values.
   * @returns {void}
   */
  const handleSubmitEditClassroomStudents = useCallback(
    (values: FormValues): void => {
      updateClassroom(classroomId, {
        students: values.students,
      });
    },
    [updateClassroom, classroomId],
  );

  return (
    <EditClassroomStudentsForm
      initialValues={{
        students: classrooms[classroomId].students,
      }}
      onSubmit={handleSubmitEditClassroomStudents}
    />
  );
}

export default EditClassroomStudentsScreen;
