import './App.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  );
}

export default App;
