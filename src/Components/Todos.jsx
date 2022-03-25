import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";

export const Todos = () => {
    const [text, setText] = useState("");
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = () => {
        axios.get("https://shielded-headland-23335.herokuapp.com/todos").then((res) => {
            dispatch(addTodo([...res.data]));
        })
    }

    const addTodos = () => {
        axios.post("https://shielded-headland-23335.herokuapp.com/todos", {
            title: text
        }).then(() => { getTodos() });
    }

    //delete todos

    return (<div>
        <input type="text" onChange={(e) => { setText(e.target.value) }} />
        <button onClick={() => { addTodos() }}>Add Todos</button>
        <div>
            {todos.map(el => <div>{el.title}</div>)}
        </div>
    </div>);
}