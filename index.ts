import axios from 'axios';
const url: string = 'https://jsonplaceholder.typicode.com/todos/1'

interface ITodoItem {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(response => {
    const data = response.data as ITodoItem;

    const { id, title, completed } = data;

    console.log(`
    This is todo item's id: ${id}
    This is todo item's title: ${title}
    Is completed? ${completed ? 'Yes' : 'No'}.
    `)
})