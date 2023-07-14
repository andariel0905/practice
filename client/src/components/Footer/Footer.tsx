import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
    return (
        <footer className="bg-dark text-light" >
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <p>Tu contenido del footer aquí</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;