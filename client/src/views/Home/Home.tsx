import React from "react";
import Container from "react-bootstrap/Container";

function Home () {
    const ContainerStyle = {
        height: "90vh"
    }
    return (
        <Container style={ContainerStyle}>
            <h1>Home</h1>
        </Container>
    )
};

export default Home;