import { fetchAllTeacher } from "@/lib/teacherActions";
import { DeleteTeacher, UpdateTeacher } from "./buttons";

export default async function TeacherTable() {
    const teachers = await fetchAllTeacher();

    return (
        <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  username
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                  firstName
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                  lastName
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                  birthDate
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {teachers?.map((teacher) => (
                  <tr
                    key={teacher.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <p>{teacher.username}</p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {teacher.firstName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {teacher.lastName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {teacher.birthDate}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateTeacher id={teacher.id ? teacher.id: ''} />
                        <DeleteTeacher id={teacher.id ? teacher.id: ''} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}