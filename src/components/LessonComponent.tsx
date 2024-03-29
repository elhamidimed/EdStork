'use client'
import React, { useEffect, useState } from 'react';

const LessonComponent = ({ lessonNumber }: { lessonNumber: string }) => {
    const [lessonContent, setLessonContent] = useState<any>(null);

    useEffect(() => {
        const fetchLessonData = async () => {
            try {
                const response = await fetch(`/api?lessonNumber=${lessonNumber}`);
                if (response.ok) {
                    const data = await response.json();
                    setLessonContent(data);
                } else {
                    console.error('Failed to fetch lesson data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        };

        fetchLessonData();
    }, [lessonNumber]);

    if (!lessonContent) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Lesson {lessonNumber}</h1>
            <pre>{JSON.stringify(lessonContent, null, 2)}</pre>
        </div>
    );
};

export default LessonComponent;