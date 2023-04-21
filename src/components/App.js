import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Preview from './Preview';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>} />
      <Route path="/preview" element={<Preview></Preview>} />
    </Routes>
  );
}

export default App;
