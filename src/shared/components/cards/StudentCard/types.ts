import {Student} from '../../../../store/students/types';

export interface StudentCardProps {
  id: Student['id'];
  firstName: Student['firstName'];
  lastName: Student['lastName'];
  email: Student['email'];
  age: Student['age'];
  onPress: (id: Student['id']) => void;
}
