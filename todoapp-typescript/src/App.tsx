import './App.css'
import ToDoCreate from './components/ToDoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='space-y-8'>
      <ToDoCreate />
      <TodoList />
    </div>


  )
}

export default App

