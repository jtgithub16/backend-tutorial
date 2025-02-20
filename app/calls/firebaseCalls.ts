import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";

// use this interface (similar to a struct) to return your data.
interface Student {
    firstName: string
    lastName: string
    year: string | number
  }

export const fetchStudents = async (): Promise<Student []> => {
  // TODO: Implement Firestore call to retrieve all students



}

export const fetchStudentById = async (studentEmail: string) => {
  // TODO: Implement Firestore call to retrieve a student by ID
};

export const addStudent = async (student: {
    firstName: string;
    lastName: string;
    resume?: string;
    major: string;
    graduationYear: string;
  }) => {

    // TODO: Implement Firestore call to add a new student
  };