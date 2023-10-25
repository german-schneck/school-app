/**
 * Action types for students.
 */
export enum StudentsActionTypes {
  FETCH_STUDENTS = 'FETCH_STUDENTS',
  SET_STUDENTS = 'SET_STUDENTS',
  UPDATE_STUDENT = 'UPDATE_STUDENT',
  CREATE_STUDENT = 'CREATE_STUDENT',
  DELETE_STUDENT = 'DELETE_STUDENT',
}

/**
 * The state of the students.
 */
export interface StudentsState {
  data: Record<string, Student>;
}

/**
 * Action for fetching students.
 */
export interface FetchStudentsAction {
  type: typeof StudentsActionTypes.FETCH_STUDENTS;
}

/**
 * Action for setting students.
 */
export interface SetStudentsAction {
  type: typeof StudentsActionTypes.SET_STUDENTS;
  payload: {
    data: StudentsState['data'];
  };
}

/**
 * Action for updating a student.
 */
export interface UpdateStudentAction {
  type: typeof StudentsActionTypes.UPDATE_STUDENT;
  payload: {
    id: Student['id'];
    data: Partial<Student>;
  };
}

/**
 * Action for creating a student.
 */
export interface CreateStudentAction {
  type: typeof StudentsActionTypes.CREATE_STUDENT;
  payload: {
    data: {
      firstName: Student['firstName'];
      lastName: Student['lastName'];
      email: Student['email'];
      age: Student['age'];
      gender: Student['gender'];
    };
  };
}

/**
 * Action for deleting a student.
 */
export interface DeleteStudentAction {
  type: typeof StudentsActionTypes.DELETE_STUDENT;
  payload: {
    id: Student['id'];
  };
}

/**
 * The structure of a student.
 */
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: Date;
  gender: Gender;
}

/**
 * Actions that can be dispatched for students.
 */
export type StudentsActions =
  | FetchStudentsAction
  | SetStudentsAction
  | UpdateStudentAction
  | CreateStudentAction
  | DeleteStudentAction;
