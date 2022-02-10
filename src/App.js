import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header text="Feedback UI" />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </Route>
            <Route path="/about" component={AboutPage} />
          </Switch>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
