import './App.css';
import Landing from './pages/Landing';
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Landing />
    </div>
    </ThemeProvider>
  );
}

export default App;
