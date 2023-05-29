import logo from './logo.svg';
import styles from './App.module.css';
import  MyComponent  from './components/MyComponent';

// const ComponentsA = () => import('./components/ComponentsA');
// const ComponentsB = () => import('./components/ComponentsB');

function App() {
  return (
    <div class={styles.App}>
      <MyComponent name="Solid"/>
    </div>
  );
}

export default App;
