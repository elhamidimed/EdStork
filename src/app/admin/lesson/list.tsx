import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  ListProps,
} from "react-admin";

// Assuming the structure of your lesson records
interface LessonRecord {
  id: string; // Assuming you have an ID field at the top level
  lesson_content: {
    course: {
      title: string;
      description: string;
      chapters: Array<{
        title: string;
        pages: Array<object>;
      }>;
    };
  };
}

const LessonList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="lesson_content.course.title" label="Course Title" />
      <TextField
        source="lesson_content.course.description"
        label="Course Description"
      />
      <FunctionField<LessonRecord>
        label="Chapters Count"
        render={(record?: LessonRecord) =>
          record ? record.lesson_content.course.chapters.length.toString() : ""
        }
      />
      <FunctionField<LessonRecord>
        label="First Chapter Title"
        render={(record?: LessonRecord) =>
          record ? record.lesson_content.course.chapters[0].title : ""
        }
      />
      {/* Additional custom fields as needed */}
    </Datagrid>
  </List>
);

export default LessonList;
