import './App.css';
import { Layout } from './components/Layout';
import { Landscape } from './components/Landscape';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
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
        <Experience />
      </Layout>
    );
  }
};

App = withOrientationChange(App);

export default App;
