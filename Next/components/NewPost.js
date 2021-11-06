import { Button, Grid, Typography } from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";

import { useState, useRef } from "react";
import Image from "next/Image";
import { colors } from "./configs";
import { useUser } from "@auth0/nextjs-auth0";

const NewPost = (props) => {
  const { user } = useUser();
  const [postPic, setPostPic] = useState("");
  const [errorPostPic, setErrorPostPic] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log("newpost", props.posts);
  const picRef = useRef();

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPostPic(readerEvent.target.result);
    };
  };

  const handleImageErase = (e) => {
    setPostPic("");
    picRef.current.value = null;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postPic === "") {
      setErrorPostPic("Please choose an Image");
      return;
    } else {
      setErrorPostPic(null);
      console.log(postPic);

      if (!user) return toast.info("Please Login First");
      console.log(title, description);
      let res = await axios.post(`http://localhost:9000/api/posts`, {
        name: user.given_name + " " + user.family_name,
        title,
        description,
        picture: postPic,
        senderPicture: user.picture,
        date: new Date(),
      });
      console.log(res);
      if (res.data.success === true) {
        props.addingNewPost();
        console.log(res.data.content);
        return toast.success(res.data.message);
      } else {
        return toast.error(res.data.message);
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      style={{ marginBottom: 80, paddingTop: 40 }}
    >
      <Card
        sx={{ width: { xs: "100vw", sm: 600 } }}
        style={{ background: "#f3e5f5" }}
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <Box sx={{ m: 1, height: 300 }}>
            {postPic ? (
              <Box
                sx={{ width: "100%", height: "100%" }}
                position="relative"
                justifyContent="center"
              >
                <img src={postPic} alt="Please Upload An Image" layout="fill" />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: colors.grayLight,
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  textAlign="center"
                  sx={{ pt: "27%" }}
                >
                  Please Upload An Image
                </Typography>
              </Box>
            )}
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <IconButton onClick={() => picRef.current.click()}>
                <UploadIcon sx={{ mx: 2 }} />
                <input
                  ref={picRef}
                  onChange={addImage}
                  type="file"
                  hidden
                  accept="image/*"
                  id="pic"
                  name="picture"
                />
              </IconButton>
              <IconButton onClick={handleImageErase}>
                <DeleteForeverIcon sx={{ mx: 2 }} />
              </IconButton>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              {errorPostPic && (
                <Typography
                  color="error"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ErrorOutlineIcon />
                  {errorPostPic}
                </Typography>
              )}
            </Grid>
          </Grid>
          <CardActions>
            <TextField
              size="small"
              label="Title"
              variant="filled"
              sx={{ display: "block" }}
              color="primary"
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </CardActions>
          <CardActions>
            <TextField
              label="Post Description"
              variant="filled"
              multiline
              minRows={1}
              sx={{ display: "block" }}
              color="primary"
              fullWidth
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </CardActions>
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              fullWidth
              type="submit"
            >
              {" "}
              Submit New Post
            </Button>
          </CardActions>
        </form>
      </Card>
    </Grid>
  );
};

export default NewPost;
