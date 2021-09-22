import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import ApartMent from './components/layout/ApartMent';
import Floor from './components/layout/Floor';
import Building from './components/layout/Building';
import Location from './components/layout/Location';
import Gallery from './components/layout/Gallery';
function App() {
  return (
    <Provider store={store}>
      <Router basename='/cubdots'>
        <div className="App">
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/building" component={Building} exact />
          <Route path="/floor/:floorId" component={Floor} exact />
          <Route
            path="/floor/:floor/:apartment_id"
            component={ApartMent}
            exact
          />
          <Route path="/location" component={Location} exact />
          <Route path="/gallery" component={Gallery} exact />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
