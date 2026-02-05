import { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employees"));
    if (stored) setEmployees(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (emp) => {
    setEmployees([...employees, { ...emp, id: Date.now() }]);
  };

  const updateEmployee = (updatedEmp) => {
    setEmployees(
      employees.map((emp) => (emp.id === updatedEmp.id ? updatedEmp : emp))
    );
    setEditEmployee(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
        editEmployee={editEmployee}
        updateEmployee={updateEmployee}
      />

      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
        onEdit={setEditEmployee}
      />
    </div>
  );
}
