import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';

const PlaceholderPage = ({ title }) => {
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PlaceholderPage title="Trang Chủ" />} />
        <Route path="originals" element={<PlaceholderPage title="Originals" />} />
        <Route path="categories" element={<PlaceholderPage title="Categories" />} />
        <Route path="rankings" element={<PlaceholderPage title="Rankings" />} />
        <Route path="canvas" element={<PlaceholderPage title="Canvas" />} />
      </Route>
    </Routes>
  );
}

export default App;