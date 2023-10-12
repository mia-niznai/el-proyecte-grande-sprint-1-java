import React from "react";
import Button from "react-bootstrap/Button";

function Square({ clickedArray, handleClick }) {
    return (
        <div className="board">
            {clickedArray.map((item, index) => {
                if (item === "") {
                    return (
                        <Button
                            key={index}
                            variant="light"
                            onClick={() => handleClick(index)}
                            style={{
                                height: "5rem",
                                width: "5rem",
                                cursor: "pointer",
                                fontSize: "4rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {item}
                        </Button>
                    );
                } else {
                    return (
                        <Button
                            key={index}
                            variant="primary" //
                            style={{
                                height: "5rem",
                                width: "5rem",
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
                    );
                }
            })}
        </div>
    );
}

export default Square;
