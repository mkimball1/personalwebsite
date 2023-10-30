import React from 'react';
import './NameCard.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import linkedin from './images/linkedin.png';
import github from './images/github.png'

function NameCard(){
    return (
        <Card>
            <div className="my_container">
                <div className='name'>
                    <div>
                        <Card.Title class='title' > Martin Kimball</Card.Title>
                        <Card.Subtitle class="subtitle"> Computer Science At UC Irvine</Card.Subtitle>
                    </div>
                </div>
                <div className='images'>
                    <a href="https://www.linkedin.com/in/kimballmartin/" target="_blank" rel="noreferrer"> <Image src={linkedin} className='logo' rounded /> </a>
                    <a href="https://github.com/mkimball1" target="_blank" rel="noreferrer"> <Image src={github} className='logo' rounded /> </a>
                </div>
            </div>
        </Card>
    );
}

export default NameCard