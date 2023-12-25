import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home/Home';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import WishPage from './pages/wishlist/Wishlist';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} setSelectedCar={setSelectedCar} />}/>
          <Route path="/wishlist" render={(props) => <WishPage {...props} selectedCar={selectedCar} />}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
