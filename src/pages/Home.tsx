import { useEffect } from 'react';

import DepartmentsList from '../components/DepartmentsList';
import { useAppDispatch } from '../hooks';
import { getDepartments } from '../store/departments';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDepartments());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <div>Not The Metropolitan Museum of Art</div>
      <DepartmentsList></DepartmentsList>
    </div>
  );
};

export default Home;
