import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react'
import Link from "next/link";
import { DeleteButton } from "../ui/button";

export function AddTeacherButton() {
    return (
        <Button className="bg-green-500 hover:bg-green-600 transition-colors duration-300">
        <Link href="/teachers/add">
          <PlusCircle className="h-4 w-4" />
        </Link>
      </Button>
    )
}

export function DeleteTeacherButton({deleteTeacher, teacherId}: {deleteTeacher:any, teacherId: any}) {
    return (
        <form action={deleteTeacher}>
            <input type="hidden" name="teacher_id" value={teacherId} />
            <DeleteButton />
        </form>
    )
}