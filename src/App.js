import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Cheikhou Diedhiou',
      bio: 'A developer from Lac Rose.',
      imgSrc: 'https://media.licdn.com/dms/image/D4E03AQGj2HcU6UwFsQ/profile-displayphoto-shrink_200_200/0/1690204455292?e=1698883200&v=beta&t=jzTwkCd7QEw0-gOiOme8NP9Ls7E9POwDkjqmOLeGdxs',
      profession: 'Developpeur React js',
    },
    show: false,
    timeInterval: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimeInterval, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimeInterval = () => {
    this.setState((prevState) => ({
      timeInterval: prevState.timeInterval + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Regarder le Profil'}
        </button>

        {show && (
          <div className="profile">
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time Interval since Mounting: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
