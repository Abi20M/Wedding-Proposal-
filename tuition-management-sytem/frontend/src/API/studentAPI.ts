import axios from "axios";
import requestConfigJson from "./requestConfig";

const BASE_URL = "http://localhost:3001";

class StudentAPI {
  //get all students
  static getStudents = () => {
    return axios.get(`${BASE_URL}/student`, requestConfigJson);
  };
  
  //add student
  static addStudent = (values: {     
    name: string;
    email: string;
    phone: string;
    school: string;
    grade: string;
    birthDate: string;
    address: string;
    gender: string;
    parent: string; }) => {
    return axios.post(`${BASE_URL}/student`, values, requestConfigJson);
  };
  //delete student
  static deleteStudent = (id: string) => {
    return axios.delete(`${BASE_URL}/student/${id}`, requestConfigJson);
  };
  //update student
  static editStudent = (values: {
    id: string;
    name: string;
    email: string;
    phone: string;
    school: string;
    grade: string;
    birthDate: string;
    address: string;
    gender: string;
    parent: string;
  }) => {
    let student = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      school: values.school,
      grade: values.grade,
      birthDate: values.birthDate,
      address: values.address,
      gender: values.gender,
      parent: values.parent,
    };
    return axios.put(
      `${BASE_URL}/student/${values.id}`,
      student,
      requestConfigJson
    );
  };

  //student login
  static studentLogin = (email: string, password: string) => {
    const data = {
      email: email,
      password: password,
    };
    return axios.post(`${BASE_URL}/student/login`, data, requestConfigJson);
  };

  //get classes by student id
  static getClassesByStudentId = () => {
    const student = JSON.parse(localStorage.getItem("student") || "{}");
    const studentId = student._id;
    return axios.get(`${BASE_URL}/student/${studentId}/classes`, requestConfigJson);
  };

  //get exams by student id
  static getExamsByStudentId = () => {
    const student = JSON.parse(localStorage.getItem("student") || "{}");
    const studentId = student._id;
    return axios.get(`${BASE_URL}/student/${studentId}/exams`, requestConfigJson);
  };
}

export default StudentAPI;