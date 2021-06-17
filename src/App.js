import './App.css';
import styled from 'styled-components';
import HomeContent from './Components/HomeContent';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import db from './firebase'
import User from './Components/User';
import SignIn from './Components/SignIn';
import { selectUserPhoto, updateSignOutUser, updateUser } from './Features/signInSlice'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './Components/SearchBar';
import Settings from './Components/Settings';
import { useState, useEffect } from 'react';
import NotifDropdown from './Components/NotifDropdown'
import NotificationsIcon from '@material-ui/icons/Notifications';


function App() {
  const [defaultPosts, setDefaultPosts] = useState({});
  const [userDropdown, setUserDropdown] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [notifModal, setNotifModal] = useState(false);
  const dispatch = useDispatch();
  const userPhoto = useSelector(selectUserPhoto);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(updateSignOutUser());
    }).catch((err) => {
      alert(err.message);
    });
    localStorage.removeItem('userMetanoeo');
  }

  console.log(JSON.parse(localStorage.getItem('userMetanoeo')));
  useEffect(() => {
    const postsRef = db.collection('defaultPosts').doc('posts');
    if (localStorage.getItem('userMetanoeo')) {
      postsRef.get().then((doc) => {
        setDefaultPosts(doc.data());
        dispatch(
          updateUser(JSON.parse(localStorage.getItem('userMetanoeo')))
        )
      }).catch((error) => {
        console.log(error);
      })
    } else {
      return
    }
  }, [dispatch]);

  console.log(userPhoto);
  return (
    <Router>
      {
        !userPhoto ? (
          <SignIn setDefaultPosts={setDefaultPosts} />
        ) : (
          <Container>
            <Navigation>

              <LogoContainer>
                <Link to="/">
                  <RespLogo src="https://imgur.com/o3r5mzT.jpg" />
                  <Logo src="https://imgur.com/WGXVyuA.png" />
                </Link>
              </LogoContainer>

              <SearchDiv>
                <SearchBar />
              </SearchDiv>

              <OptionsDiv>

                <NotifsResponsive>
                  <NotificationsIcon onClick={() => setNotifModal(true)} className="notif">Notifs</NotificationsIcon>
                  <NotifDropdown notifModal={notifModal} setNotifModal={setNotifModal} />
                </NotifsResponsive>

                <NewPost onClick={() => setPostModal(true)}>
                  New Post
                </NewPost>

                <NewPostResponsive onClick={() => setPostModal(true)}>
                  +
                </NewPostResponsive>

                <Notifs>
                  <NotifPara onClick={() => setNotifModal(true)} className="notif">Notifs</NotifPara>
                  <NotifDropdown notifModal={notifModal} setNotifModal={setNotifModal} />
                </Notifs>

                <Dropdown>
                  <DropdownSel>
                    <UserBtn onClick={() => setUserDropdown(!userDropdown)}>
                      <UserPhoto src={userPhoto} />
                    </UserBtn>
                    {userDropdown &&
                      <Ul>
                        <Li>
                          <Link to="/user" style={{ color: "black", textDecoration: "none" }} >Profile</Link>
                        </Li>
                        <Li>
                          <Link to="/signin" onClick={signOut} style={{ color: "black", textDecoration: "none" }} >LogOut</Link>
                        </Li>
                      </Ul>
                    }

                  </DropdownSel>
                </Dropdown>

              </OptionsDiv>

            </Navigation>


            <Switch>
              <Route path="/user">
                <User />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/">
                <HomeContent postModal={postModal} setPostModal={setPostModal} defaultPosts={defaultPosts} />
              </Route>
            </Switch>
          </Container>
        )
      }
    </Router>
  );
}


export default App;

const Container = styled.div`
  position: relative; 
`

const Navigation = styled.nav`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  position: fixed;
  z-index: 2;
  background-color: white;
`

const LogoContainer = styled.div`
  height: 45px;
  background-color: black;
  margin: 15px;
  @media (max-width: 800px) {
    height: fit-content;
  }
`

const Logo = styled.img`
  height: 45px;
  @media (max-width: 800px) {
    display: none;
  }
`
const RespLogo = styled.img`
  height: 100%;
  @media (min-width: 800px) {
    display: none;
  }
`

const OptionsDiv = styled.div`
  display: flex;
  padding: 5px 5px 5px 15px;
  align-items: center;
  justify-content: center;
`

const Notifs = styled.div`
  margin: auto 10px auto 10px;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`

const NotifPara = styled.p`
  transition: color 300ms ease;
  &:hover {
    color: lightgrey;
  }
`

const UserPhoto = styled.img`
  height: 50px;
  border-radius: 50%;
  width: 50px;
`

const Dropdown = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  color: black;
`

const Ul = styled.ul`
  position: absolute;
  left: -15px;
  margin-top: 10px;
  width: 85px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 9px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  overflow: hidden;
  transition: all 0.4s ease;
`

const DropdownSel = styled.div`
  position: relative;
  margin: auto 0;
`


const Li = styled.li`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: .65;
    background-color: lightgray;
  }
`

const UserBtn = styled.button`
  background-color: #00000000;
  border: none;
  cursor: pointer;
  transition: opacity 250ms ease;
  &:hover {
    opacity: .75;
  }
`

const NewPost = styled.button`
  background: rgb(255,0,213);
  background: linear-gradient(141deg, rgba(255,0,213,1) 0%, rgba(180,120,221,1) 48%, rgba(33,123,203,1) 100%);
  border-radius: 10px;
  color: white;
  font-weight: 300;
  font-size: .9em;
  border: none;
  padding: 4px 7px;
  height: 40px;
  width: 100px;
  transition: color 500ms ease; 
  &:hover {
    color: black;
  }
  @media (max-width: 800px) {
    display: none;
  }
`

const SearchDiv = styled.div`
flex: 1;
`

const NewPostResponsive = styled(NewPost)`
  width: 40px;
  border-radius: 50%;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

const NotifsResponsive = styled.div`
  position: relative;
  display: none;
  transition: color 500ms ease;
  &:hover {
    color: black;
  }
  @media (max-width: 800px) {
    display: block;
  }
`