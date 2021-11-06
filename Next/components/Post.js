import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Image from "next/Image";
import sad from "../assets/sad.jpg";
import Link from "next/link";
import moment from "moment";

export default function Post(props) {
  return (
    <Grid
      container
      justifyContent="center"
      style={{ paddingBottom: 10, paddingTop: 40 }}
    >
      <Card
        sx={{ width: { xs: "100vw", sm: 600 }, p: 1 }}
        style={{ background: "#fceaef" }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={props.item.picture}
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontSize: { xs: 16, sm: 20 } }}
            component="div"
          >
            {props.item.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Grid container justifyContent="start" alignItems="center">
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                overflow: "hidden",
                display: "inline-block",
                marginRight: 15,
                border: "2px solid #01579B",
              }}
            >
              <img src={props.item.senderPicture} width="50" height="50" />
            </div>
            <Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" component="div">
                  {props.item.name}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" component="div">
                  {moment(props.item.date).format("DD.MM.YYYY HH:mm")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="center">
            <Button size="small" variant="outlined" color="secondary">
              <Link href={`/posts/${props.item._id}`}>Learn More</Link>
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
