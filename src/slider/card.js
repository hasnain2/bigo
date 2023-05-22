import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

const LightTextTypography = withStyles({
  root: {
    color: "#B8B8B8",
  },
})(Typography);
const GreenTextTypography = withStyles({
  root: {
    color: "#008000",
  },
})(Typography);

export default function ActionAreaCard({ item }) {
  const [isMouseOver, setMouseOver] = React.useState(false);
  const onMouseOver = () => {
    setMouseOver(true);
  };
  const onMouseOut = () => {
    setMouseOver(false);
  };
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="380"
          image={isMouseOver ? item.image : item.image1}
          alt="green iguana"
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
        />
        <CardContent>
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ display: "flex", flex: 1 }}>
              <LightTextTypography
                gutterBottom
                variant="h5"
                component="div"
                display="inline"
                align="right"
              >
                {item.subTitle}
              </LightTextTypography>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
              }}
            >
              <Typography display="inline" align="right">
                <Rating name="read-only" value={item.ratings} readOnly />
              </Typography>
              <LightTextTypography display="inline" align="right">
                ({item.reviews})
              </LightTextTypography>
            </div>
          </div>
          <Typography fontWeight="bold">{item.title}</Typography>
          <LightTextTypography>{item.price}</LightTextTypography>
          <GreenTextTypography>
            Pre Order Est Delivery Jul 03
          </GreenTextTypography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
