// import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';



function App() {
  const isAuth = useSelector(state => state.login.isLogin);
  return (
    <>
    <Header/>
    {!isAuth && <Auth />}
    {isAuth && <UserProfile />}
    </>
  );
}

export default App;
