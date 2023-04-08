import axios from "axios";
import requestConfig from "./requestConfig";


const BASE_URL = "http://localhost:3001";

class TeacherAPI {
  //get all teachers
  static getTeachers = () => {
    return axios.get(`${BASE_URL}/teacher`, requestConfig);
  };
  //add teacher
  static addTeacher = (values: {
    name: string;
    email: string;
    password: string;
    phone: string;
  }) => {
    return axios.post(`${BASE_URL}/teacher`, values, requestConfig);
  };
  //delete teacher
  static deleteTeacher = (id: string) => {
    return axios.delete(`${BASE_URL}/teacher/${id}`, requestConfig);
  };
  //update teacher
  static editTeacher = (values: {
    id: string;
    name: string;
    email: string;
    phone: string;
  }) => {
    let teacher = {
      name: values.name,
    };
    return axios.put(
      `${BASE_URL}/teacher/${values.id}`,
      teacher,
      requestConfig
    );
  };

  //teacher login
  static teacherLogin = (email: string, password: string) => {
    const data = {
      email: email,
      password: password,
    };
    return axios.post(`${BASE_URL}/teacher/login`, data, requestConfig);
  };

  //get students of the specific teacher by teacher id
  static getStudents = () => {
    const teacher = JSON.parse(localStorage.getItem("teacher") || "{}");
    const teacherId = teacher._id;
    return axios.get(
      `${BASE_URL}/teacher/${teacherId}/students`,
      requestConfig
    );
  };

  //get all exams by student
  static getExamsByStudentId = (id: string) => {
    return axios.get(`${BASE_URL}/student/${id}/exams`, requestConfig);
  };
}

export default TeacherAPI;