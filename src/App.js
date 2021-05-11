import './App.css';
import styled from 'styled-components';
import HomeContent from './Components/HomeContent';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import User from './Components/User';
import SignIn from './Components/SignIn';
import { updateSignOutUser } from './Features/signInSlice'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from './Features/signInSlice'

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(updateSignOutUser());
    }).catch((err) => {
      alert(err.message);
    })
  }

  return (
    <Router>
      {
        !userName ? (
          <SignIn />
        ) : (
          <Container>
            <Navigation>
              <LogoContainer>
                <Link to="/">
                  <Logo src="https://imgur.com/WGXVyuA.png" />
                </Link>
              </LogoContainer>
              <SearchBar placeholder="Search..." />
              <OptionsDiv>
                <Notifs>
                  Notifs
            </Notifs>
                <Dropdown>
                  <DropdownSel>
                    <UserBtn><UserPhoto src="https://imgur.com/oWr9MTw.png" /></UserBtn>
                    <Ul>
                      <Li>
                        <Link to="/user" style={{ color: "black", textDecoration: "none" }} >Profile</Link>
                      </Li>
                      <Li>
                        <Link to="/signin" onClick={signOut} style={{ color: "black", textDecoration: "none" }} >LogOut</Link>
                      </Li>
                    </Ul>
                  </DropdownSel>
                </Dropdown>
              </OptionsDiv>
            </Navigation>
          </Container>
        )
      }


      <Switch>
        <Route exact path="/">
          <HomeContent />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
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
`

const Logo = styled.img`
  height: 45px;
`

const SearchBar = styled.input`
  width: 90%;
  height: 45px;
  border-radius: 30px;
  padding-left: 10px;
  font-size: 18px;
  border: 1.5px solid black;
`

const OptionsDiv = styled.div`
  display: flex;
  padding: 5px 15px;
  align-items: center;
`

const Notifs = styled.p`
  margin-right: 10px;
  font-size: 18px;
`

const UserPhoto = styled.img`
  height: 50px;
  border-radius: 50%;
`

const Dropdown = styled.div`
  height: 10vh;
  align-items: center;
  margin-top: 15px;
`

const Ul = styled.ul`
  position: absolute;
  left: -10px;
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
  opacity: 0;
  transition: all 0.4s ease;
`

const DropdownSel = styled.div`
  position: relative;
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
  &:focus + ${Ul} {
    pointer-events: all;
    opacity: 1;
  }
  &:focus + ${Li} {
    pointer-events: all;
  }
`
