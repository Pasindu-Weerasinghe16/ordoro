
import './App.css';

function App() {
  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> 
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
