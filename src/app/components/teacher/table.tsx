import { fetchAllTeacher } from "@/lib/services/schoolYearService";
import { DeleteTeacher } from "./buttons";
import { UpdateButton } from "../ui/button";

export default async function TeacherTable() {
    const columns = [
      {label: 'Username', key:'username'},
      {label: 'Nombre', key:'firstName'},
      {label: 'Apellido', key:'lastName'},
      {label: 'Fecha de nacimiento', key:'birthDate'}
    ]
  
    const teachers = await fetchAllTeacher();

    return (
      <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {
                  columns.map((column, index) => (
                    <th key={index} scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      {column.label}
                    </th>
                  ))
                }

                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                teachers.map((row:any, rowIndex) => (
                  <tr 
                    key={rowIndex}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                    {
                      columns.map((column, colIndex) => (
                        <td 
                          key={colIndex}
                          className="whitespace-nowrap py-3 pl-6 pr-3"
                          >
                            {row[column.key]}
                        </td>
                      ))
                    }

                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateButton key={rowIndex} href={`/teacher/${row['id']}/edit`}/>
                        <DeleteTeacher key={rowIndex} id={row['id']}/>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
}