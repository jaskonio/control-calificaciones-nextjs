"use client"

import { BaseCard } from "@/app/components/ui/cards"
import CourseForm from "@/app/components/courses/courseForm"
import { addCourse } from "@/actions/coursesActions"


export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <BaseCard
        title="Añadir Nueva Clase"
        content={(
          <CourseForm course_id={0} name="" parallel="A" submitHandler={addCourse}></CourseForm>
        )}
      ></BaseCard>
    </div>
  )
}