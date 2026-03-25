import './App.css';
import UserForm from './components/UserForm/UserForm';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>React State Lab</h1>
        <p>Приклад використання useState для керування даними форми.</p>
      </header>

      <main className="app__content">
        <UserForm />
      </main>
    </div>
  );
}

export default App;
