export interface EmployeeModel {
  employeeId: number;        // numeric ID
  fullName: string;          // employee full name
  email: string;             // email address
  phone: string;             // phone number (kept as string for safety)
  gender: string;            // "Male" | "Female" | "Other" (optional: restrict as string literal)
  dateOfJoining: Date;       // stored as Date object
  departmentId: number;      // department foreign key
  designationId: number;     // designation foreign key
  employeeType: string;      // e.g., "Full-Time", "Part-Time", "Contract"
  salary: number;            // numeric salary
}
