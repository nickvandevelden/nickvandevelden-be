import './App.css';
import { Layout } from './components/Layout';
import { Landscape } from './pages/Landscape';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { isMobileOnly, withOrientationChange } from 'react-device-detect';

let App = (props) => {
  const { isLandscape } = props;

  if (isMobileOnly && isLandscape)
    return (
      <Layout>
        <Landscape />
      </Layout>
    );
  else {
    return (
      <Layout>
        <Home />
        <About />
        <Contact />
      </Layout>
    );
  }
};

App = withOrientationChange(App);

export default App;
