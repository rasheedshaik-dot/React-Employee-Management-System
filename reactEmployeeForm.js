import { useEffect, useState } from "react";

export default function EmployeeForm({
  addEmployee,
  editEmployee,
  updateEmployee,
}) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
  });

  useEffect(() => {
    if (editEmployee) setEmployee(editEmployee);
  }, [editEmployee]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee.name || !employee.email || !employee.role) {
      alert("Please fill required fields");
      return;
    }

    editEmployee ? updateEmployee(employee) : addEmployee(employee);

    setEmployee({ name: "", email: "", role: "", department: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{editEmployee ? "Edit Employee" : "Add Employee"}</h2>

      <input
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        value={employee.role}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <button>{editEmployee ? "Update" : "Add"}</button>
    </form>
  );
}
