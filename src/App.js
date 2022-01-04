import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <main className="container">
      <Header/>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
