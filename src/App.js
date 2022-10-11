import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import CommitHistory from './pages/commitHistory/CommitHistory';
import Login from './pages/login/Login';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route
            path="/commits"
            element={
              <PrivateRoute>
                <CommitHistory />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
