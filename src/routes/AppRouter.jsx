import { Route, Routes } from 'react-router-dom';
import Login from '../features/auth/login/login';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
}
