import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import "./Contact.css"

function Contact() {
    return (
        <Card>
            <div class="contact-box">
                Contact: <a href="mailto:mkimbal1@uci.edu">mkimbal1@uci.edu</a>
            </div>
        </Card>
    )
}

export default Contact