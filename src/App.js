import './App.css';

import { Header, Search, Footer } from './components';


function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
