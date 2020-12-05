import './App.css';
import { Layout } from './components/Layout';
import { Landscape } from './components/Landscape';
import { Description } from './components/Description';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { isMobileOnly, withOrientationChange } from 'react-device-detect';

let App = (props) => {
  const { isLandscape } = props;

  if (isMobileOnly && isLandscape)
    return (
      <Layout>
        <Description />
        <Landscape />
      </Layout>
    );
  else {
    return (
      <Layout>
        <Description />
        <Home />
        <About />
        <Contact />
        <Experience />
        <Footer />
      </Layout>
    );
  }
};

App = withOrientationChange(App);

export default App;
