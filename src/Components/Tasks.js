// hook calls useState
// import { useState } from "react"
const tasks = [
    {
        id: 1,
        text: 'take deep breaths',
        day: 'everyday',
        reminder: true,
    },
    {
        id: 2,
        text: 'drink some water',
        day: 'every 2 hours',
        reminder: true,
    },
    {
        id: 3,
        text: 'relax my friend',
        day: '24/7, homie got ur back',
        reminder: true,
    },
]

const Tasks = () => {
    return (
        <>
        {tasks.map((task) =>
            // key has to be unique so each 'task' item is unqiue
            // `objName - ${objID}` is equv to "task- + {task.id}"
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            //used to deal with large lists!
            (<h3 key={`task - ${task.id}`}>{task.text}</h3>)
        )}
        </>
    )
}

export default Tasks