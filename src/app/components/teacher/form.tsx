'use client';

import { Teacher } from "@/lib/definition";
import { onSubmitCreateOrUpdateTeacher } from "@/lib/services/schoolYearService";
import { useFormState } from "react-dom";

export default function TeacherForm({teacher}: {teacher:Teacher|null}) {
    console.log('Teacher Form')
    console.log(teacher)

    const initialState = {
        errors: {}, 
        message: ''
    }

    const [state, formAction] = useFormState(onSubmitCreateOrUpdateTeacher, initialState)

    let birthDate = '';

    if (teacher != null) {
        const [day, month, year] = teacher.birthDate.split('/');
        const date = `${year}-${month}-${day}`;
        birthDate = date;
    }

    return (
        <div>
            <form action={formAction}>
                <input type="hidden" name="id" defaultValue={teacher?.id}/>

                <label htmlFor="username">Username</label>
                <input id="username" type="text" name="username" defaultValue={teacher?.username}/>
                <div id="customer-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.username && state.errors.username.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                </div>
        
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" name="password" defaultValue={teacher?.password}/>
                <div id="customer-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.password && state.errors.password.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                </div>
            
                <label htmlFor="firstName">Nombre</label>
                <input id="firstName" type="text" name="firstName" defaultValue={teacher?.firstName}/>
                <div id="customer-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.firstName && state.errors.firstName.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                </div>

                <label htmlFor="lastName">Apellido</label>
                <input id="lastName" type="text" name="lastName" defaultValue={teacher?.lastName}/>
                <div id="customer-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.lastName && state.errors.lastName.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                </div>

                <label htmlFor="birthDate">Fecha de Nacimiento</label>
                <input id="birthDate" type="date" name="birthDate" defaultValue={birthDate}/>
                <div id="customer-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.birthDate && state.errors.birthDate.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                    </p>
                    ))}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}