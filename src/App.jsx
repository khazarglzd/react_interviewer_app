import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import LevelSelect from './components/LevelSelect';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/level" element={<LevelSelect />} />
      </Routes>
    </Layout>
  );
}

export default App;

