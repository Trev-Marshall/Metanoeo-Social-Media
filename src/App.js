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

function App() {
  return (
    <Router>
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
            <Link to="/user">
              <UserPhoto src="https://imgur.com/oWr9MTw.png" />
            </Link>
          </OptionsDiv>
        </Navigation>
      </Container>

      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <HomeContent />
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