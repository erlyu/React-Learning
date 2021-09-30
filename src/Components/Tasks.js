// hook calls useState


const Tasks = ({tasks}) => {
    // const [a, setA] = useState(false);
    // a = var name
    // setA = setter, used to modify var
    // useState = identifies state of the object, this is the essence of the hook

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