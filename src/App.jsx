import Router from './routes/Router';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import PostContextProvider from './context/PostContext';
function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
