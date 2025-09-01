import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import LevelSelect from './components/LevelSelect';
import QuestionStepper from './components/QuestionStepper';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import Statistics from './components/Statistics';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/level" element={<LevelSelect />} />
        <Route path="/stepper" element={<QuestionStepper />} />
        <Route path="/interview" element={<QuestionCard />} />
        <Route path="/results" element={<Results />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Layout>
  );
}

export default App;

