import { State } from "@/lib/definition";
import { onSubmitCreateTeacher } from "@/lib/teacherActions";
import { useActionState } from "react";

export default function Page() {

    return (
        <div>
            <h2>Create teacher</h2>
            <form>
                <label htmlFor="username">username</label>
                <input id="username" type="text" name="username" />

                <label htmlFor="username">password</label>
                <input id="password" type="password" name="password" />

                <label htmlFor="username">firstName</label>
                <input id="firstName" type="text" name="firstName" />

                <label htmlFor="username">lastName</label>
                <input id="lastName" type="text" name="lastName" />

                <label htmlFor="username">birthDate</label>
                <input id="birthDate" type="date" name="birthDate" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}