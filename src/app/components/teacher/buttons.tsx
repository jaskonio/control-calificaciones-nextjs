import { fetchDeleteTeacher } from '@/lib/services/schoolYearService';
import { CreateButton, DeleteButton, UpdateButton } from '../ui/button';


export function CreateTeacher() {
  return (
    <CreateButton href='/teacher/create' placeholder='Create Teacher'/>
  );
}

export function UpdateTeacher({ id }: { id: string }) {
  return (
      <UpdateButton href={`/teacher/${id}/edit`}/>
  );
}

export function DeleteTeacher({ id }: { id: string }) {
  const deleteTeacherWithId = fetchDeleteTeacher.bind(null, id);

  return (
    <>
    <form action={deleteTeacherWithId}>
      <DeleteButton />
    </form>
    </>
  );
}
