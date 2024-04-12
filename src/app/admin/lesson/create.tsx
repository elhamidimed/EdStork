import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  Create,
  SelectInput,
} from "react-admin";

const LessonCreate = () => (
  <Create>
    <SimpleForm>
      <SelectInput
        source="id"
        choices={[
          { id: "lesson_1", name: "Lesson 1" },
          { id: "lesson_2", name: "Lesson 2" },
          { id: "lesson_3", name: "Lesson 3" },
        ]}
      />
      <TextInput source="lesson_content.course.title" helperText={false} />
      <ArrayInput source="lesson_content.course.chapters">
        <SimpleFormIterator inline>
          <TextInput source="title" helperText={false} />

          <TextInput source="content" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
export default LessonCreate;
