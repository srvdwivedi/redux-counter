import classes from './Header.module.css';
import { loginActions } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.login.isLogin);

  const logoutHandler = () => {
    dispatch(loginActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
