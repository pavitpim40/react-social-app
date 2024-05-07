import Router from './routes/Router';
import { CssBaseline } from '@mui/material';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import PostContextProvider from './context/PostContext';
function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <CssBaseline />
          <Router />
        </PostContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
