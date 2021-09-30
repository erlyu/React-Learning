// import logo from './logo.svg';
// import './App.css';
// importing react is only needed for class absed components!
// import React from 'react';
import Header from './Components/Header';
import Task from './Components/Tasks';

const App = () => {

  return (
    <div className='container'>
      {/* This is one way of adding the header component */}
      {/* You can also use titles to retrieve properties from the components! */}
      {/* Properties (or props for short) will be used as an arguemnt for the component! */}
      <Header/>
      <Task/>
    </div>
  );
}

// Another way is via class based component VVVV:
// class App_two extends React.Component {
//   //render takes care of outputs
//   render() {
//     return <h1>This is a second way to make a list</h1>
//   }
// }

export default App;
