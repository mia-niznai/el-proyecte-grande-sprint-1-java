import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Square({ clickedArray, handleClick }) {
    return (
        <div>
        <Row style={{
            height: "360px",
            width: "360px"
        }}
             className={`mx-auto`}>
            {clickedArray.map((item, index) => {
                if (item === "") {
                    return (
                        <Col xs={4}>
                        <Button
                            key={index}
                            variant="light"
                            onClick={() => handleClick(index)}
                            style={{
                                height: "120px",
                                width: "120px",
                                cursor: "pointer",
                                fontSize: "4rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {item}
                        </Button>
                        </Col>
                    );
                } else {
                    return (
                        <Col xs={4}>
                        <Button
                            key={index}
                            variant="primary" //
                            style={{
                                height: "120px",
                                width: "120px",
                                cursor: "not-allowed",
                                fontSize: "4rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgb(34, 80, 123)",
                            }}
                        >
                            {item}
                        </Button>
                        </Col>
                    );
                }
            })}
        </Row>
        </div>
    );
}

export default Square;
