import React from 'react';
import './Resume.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';

import resume from './images/kimballmartin_resume_w25.jpg'

function Resume() {
    return (
        <Card>
            <Card.Header className='header'>
                <h3 style={{ textAlign: 'left' }}>Resume</h3>
                <a href={resume} download> <h3 style={{textAlign: 'right'}}> Download </h3> </a>
            </Card.Header>
            <Card.Body> 
                <Image src={resume} className='resume_img'/>
            </Card.Body>
        </Card>
    )
}

export default Resume