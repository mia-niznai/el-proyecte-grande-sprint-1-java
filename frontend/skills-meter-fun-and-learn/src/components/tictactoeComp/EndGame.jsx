import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
    const endGameStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // position: "absolute",
        // top: 100,
        // left: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(0, 0, 0, 0.8)",
    };

    const winTextStyle = {
        color: "white",
        fontSize: "5rem",
    };

    const winHistoryStyle = {
        color: "white",
        fontSize: "2rem",
        margin: "2rem 0",
    };

    return (
        <Container style={endGameStyle}>
            {!draw && <h2 style={winTextStyle}>{player ? "B WON" : "A WON"}</h2>}
            {draw && <h2 style={winTextStyle}>Draw</h2>}

            <Row className={`col-6`} style={winHistoryStyle}>
                <Col className={`text-center`}>A's WINS: {winCount.A}</Col>
                <Col className={`text-center`}>B's WINS: {winCount.B}</Col>
            </Row>

            <Row className={`col-6`}>
                <Col>
                    <Button className={`form-control`} variant="primary" onClick={restartGame}>
                        Restart Game
                    </Button>
                </Col>
                <Col>
                    <Button className={`form-control`} variant="danger" onClick={clearHistory}>
                        Clear History
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default EndGame;
