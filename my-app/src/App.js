import React from 'react';
import Axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log('Constructor');
    super();
    this.state = {
      profile: []
    };
  }
  componentDidMount() {
    console.log('CDM');
    Axios
      .get("https://api.github.com/users/KamrynR")
      .then(res => { this.setState({profile: res.data}); })
      .catch(err => {console.log(err);});
  }
  render() {
    console.log('Render');
    let user = this.state.profile;
    console.log(user);
    return (
    <div className='App'>
      <img className='AppLogo' src={user.avatar_url} alt='Avatar'/>
      <p>Username: {user.login}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
    );
  }
}

export default App;
