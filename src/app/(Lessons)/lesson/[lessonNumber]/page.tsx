import LessonComponent from '@/components/LessonComponent';

const LessonPage = ({ params }: { params: { lessonNumber: any } }) => {
    const lessonNumber = params.lessonNumber;

    if (!lessonNumber) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <LessonComponent lessonNumber={lessonNumber as string} />
        </div>
    );
};

export default LessonPage;
