import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import AppRouter from './routes/AppRouter';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `'Open Sans', sans-serif`,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
