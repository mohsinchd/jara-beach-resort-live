import Dashboard from '@pages/dashboard/Dashboard';
import { Home } from '@pages/home';
import { ROUTES } from '@routes';
import { useSetupAxios } from '@services';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  useSetupAxios();

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
