import React from 'react';
import NameCard from './components/NameCard'
import Resume from './components/Resume'
import Skills from './components/Skills'
import './App.css';
import Contact from './Contact';

function App() {
    return (
        <div className="App">
            <NameCard />
            <Resume />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
