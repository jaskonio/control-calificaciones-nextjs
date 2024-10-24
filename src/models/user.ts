import { User } from "@prisma/client";
import { TeacherViewModel } from "./teacher";
import { ParentViewModel } from "./parent";
import { StudentViewModel } from "./student";

export type CreateUserModel = Omit<User, 'id'> & {
}

export type UserViewModel = CreateUserModel & {
    id: number;

    student?: StudentViewModel;
    teacher?: TeacherViewModel;
    parent?: ParentViewModel;
}