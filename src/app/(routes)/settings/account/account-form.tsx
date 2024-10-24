import { UserViewModel } from "@/models/user";
import { AccountTeacherForm } from "./account-teacher-form";
import { AccountParentForm } from "./account-parent-form";
import { AccountStudentForm } from "./account-student-form";

export function AccountForm({ user }: { user: UserViewModel }) {
  if (user.student) return (<AccountStudentForm></AccountStudentForm>)
  if (user.teacher) return (<AccountTeacherForm></AccountTeacherForm>)
  if (user.parent) return (<AccountParentForm></AccountParentForm>)

  return (
    <div>Cuenta Administrador</div>
  )
}