import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../features/common/sidebar/Sidebar';
import routes from '../config/Routes';
import { checkUser } from '../Redux/User/registerSlice';

const App = () => {
  const appRoutes = useRoutes(routes);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {user.logged_in && <Sidebar />}
      <main className="mainCnt">{appRoutes}</main>
    </>
  );
};

export default App;
