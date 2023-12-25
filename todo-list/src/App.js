import { Provider } from 'react-redux';
import store from './store'; // Your Redux store
import DisplayTodos from './components/DisplayTodos';
import TodoItem from './components/TodosItem';
import Todos from './components/Todos';

function App() {
  return (
    
    <Provider store={store}>
      <>
    <DisplayTodos/>
    <TodoItem/>
    <Todos/>
    </>
    </Provider>
   
  );
}
 export default App;