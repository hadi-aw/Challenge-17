// U51313007
// src/TaskGenerator.js
import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const motivationalMessages = [
    "Keep pushing forward!",
    "You can do it!",
    "Stay positive and keep working hard!",
];

const TaskGenerator = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [currentTask, setCurrentTask] = useState(tasks[0]);

    const nextTask = () => {
        const nextIndex = (currentTaskIndex + 1) % tasks.length;
        setCurrentTaskIndex(nextIndex);
        setCurrentTask(tasks[nextIndex]);
    };

    const markAsCompleted = () => {
        tasks[currentTaskIndex].isCompleted = true;
        setCurrentTask({ ...tasks[currentTaskIndex] });
    };

    return (
        <div>
            <FancyText title text={'Task: ${currentTask.name}'} />
            <FancyText text={'Status: ${currentTask.isComplete ? 'Completed ✔' : 'Pending'}'} />
            <button onClick={markAsCompleted}>Mark as Completed</button>
            <button onClick={nextTask}>Next Task</button>
            <FancyText text={motivationalMessages[currentTaskIndex % motivationalMessages.length]} />
        </div>
    );
};

export default TaskGenerator;