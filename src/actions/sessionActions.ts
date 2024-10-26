import { auth } from "@/auth";
import { UserViewModel } from "@/models/user";
import { userService } from "@/services";

export async function GetUserId() {
    const session = await auth();
    if (!(session?.user?.id)) throw new Error("Session not found");

    const userId = typeof session.user.id === "string" ? Number(session.user.id) : session.user.id;
    const user = await userService.getById(userId);

    if (isStudent(user)) return user.student?.id as number;
    if (isParent(user)) return user.parent?.id as number;
    if (isTeacher(user)) return user.teacher?.id as number;

    throw new Error("User type not found");
}

function isStudent(user: UserViewModel) {
    return !!user.student;
}

function isParent(user: UserViewModel) {
    return !!user.parent;
}

function isTeacher(user: UserViewModel) {
    return !!user.teacher;
}
