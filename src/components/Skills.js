import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './Skills.css'

function Skills() {
    return (
        <Card> 
            <Card.Header> Skills </Card.Header>
            <Card.Title> Programming Languages</Card.Title>
                <div class="container">
                    <Badge pill bg="secondary"> Python </Badge>
                    <Badge pill bg="secondary"> Java </Badge>
                    <Badge pill bg="secondary"> Javascript </Badge>
                    <Badge pill bg="secondary"> HTML </Badge>
                    <Badge pill bg="secondary"> CSS </Badge>
                    <Badge pill bg="secondary"> SQL </Badge>
                    <Badge pill bg="secondary"> XML </Badge>
                    <Badge pill bg="secondary"> C </Badge>
                    <Badge pill bg="secondary"> C++ </Badge>
                </div>
            <Card.Title> Technologies </Card.Title>
                <div class="container">
                    <Badge pill bg="secondary"> React </Badge>
                    <Badge pill bg="secondary"> Node </Badge>
                    <Badge pill bg="secondary"> Express </Badge>
                    <Badge pill bg="secondary"> MongoDB </Badge>
                    <Badge pill bg="secondary"> Git </Badge>
                    <Badge pill bg="secondary"> Docker </Badge>
                    <Badge pill bg="secondary"> AWS </Badge>
                    <Badge pill bg="secondary"> MySQL </Badge>
                    <Badge pill bg="secondary"> VS Code </Badge>
                    <Badge pill bg="secondary"> Eclipse </Badge>
                    <Badge pill bg="secondary"> PyCharm </Badge>
                </div>
            <Card.Title> Design </Card.Title>
                <div class="container">
                    <Badge pill bg="secondary"> Photoshop </Badge>
                    <Badge pill bg="secondary"> Illustrator </Badge>
                    <Badge pill bg="secondary"> Indesign </Badge>
                    <Badge pill bg="secondary"> Lightroom </Badge>
                    <Badge pill bg="secondary"> Premier Pro </Badge>
                </div>
            <Card.Title> Soft Skills </Card.Title>
                <div class="container">
                    <Badge pill bg="secondary"> Strong Communication </Badge>
                    <Badge pill bg="secondary"> Team Leader </Badge>
                    <Badge pill bg="secondary"> Highly Adaptable </Badge>
                    <Badge pill bg="secondary"> Receptive to Feedback </Badge>
                </div>
        </Card>
    )
}

export default Skills