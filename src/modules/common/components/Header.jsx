import React from 'react';
import { Link } from 'react-router-dom'



export default function Header() {
    return <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/statistic">STATISTIC</Link>
    </header>
}