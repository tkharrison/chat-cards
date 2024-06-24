import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./CardFlip.css";

const CardFlip: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flip-container" onClick={handleFlip}>
      <div className={`flipper ${flipped ? "flipped" : ""}`}>
        <Card className="front">
          <CardContent>
            <Typography variant="h5" component="div">
              Front Side
            </Typography>
          </CardContent>
        </Card>
        <Card className="back">
          <CardContent>
            <Typography variant="h5" component="div">
              Back Side
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardFlip;
