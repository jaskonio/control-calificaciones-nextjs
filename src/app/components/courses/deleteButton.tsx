import TableDeleteButton from '../ui/tableButtons';

const DeleteCourseButton = ({ record, onDelete }: { record: any, onDelete: any }) => {
  const canDelete = !record.classes || record.classes.length === 0;

  return (
    <TableDeleteButton canDelete={canDelete} data={record} onDelete={onDelete}></TableDeleteButton>
  );
};

export default DeleteCourseButton;
