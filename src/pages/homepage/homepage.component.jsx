import React from 'react';
import Directory from '../../components/directory.component/directory.component';
import './homepage.styles.scss'
import '../../components/directory.component/directory.component.jsx'

const HomePage = () => (
    <div className="homepage">
        <h1>welcome to homepage</h1>
        <Directory />
    </div>
    );

export default HomePage;