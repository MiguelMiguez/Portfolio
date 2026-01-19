import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Layout />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
