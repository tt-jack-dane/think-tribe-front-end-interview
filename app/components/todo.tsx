import {useState} from "react";

export default function Todo () {
    const [todos, setTodos] = useState<string[]>([
        "Brush teeth",
        "Eat food",
        "Sleep",
    );
    const [currentToDo, setCurrentToDo] = useState<string>("");

    function newToDo() {
        setTodos((todos) => {
            todos.push(currentToDo);
            return todos;
        });
    }

    return (
        <>
            <form>
                <label for="newToDo">New ToDo:</label>
                <input
                    type="text"
                    name="newToDo"
                    value={currentToDo}
                    onChange={e => setCurrentToDo(e.target.value)}
                    className="bg-white text-black"
                    placeholder="Enter a new ToDo"
                />
                <button
                    type="button"
                    onClick={newToDo}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                >Add new ToDo</button>
            </form>

            <div>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>{todo}</li>
                    )
                })}
            </div>
        </>
    )
}
