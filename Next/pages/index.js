import Head from "next/head";
import NewPost from "../components/NewPost";
import Post from "../components/Post";
import { data } from "../data";
import { Container, Grid, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import wall3 from "../assets/wall3.jpg";
import { useState } from "react";
import axios from "axios";

export default function Home({ posts }) {
  const [updatedPosts, setUpdatedPosts] = useState([...posts.content]);
  const addingNewPost = async () => {
    // setUpdatedPosts((prevState) => [...prevState, newPost]);

    let res = await axios.get("http://localhost:9000/api/posts");
    setUpdatedPosts(res.data);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${wall3.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "auto",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Container
        style={{
          minHeight: "100vh",
          zIndex: 3,
          position: "relative",
          background: "inherit",
          overflow: "hidden",
        }}
      >
        <Container
          style={{
            position: "absolute",
            filter: "blur(3px)",
            zIndex: -2,
            height: "100%",
            background: "inherit",
          }}
        ></Container>
        <NewPost addingNewPost={addingNewPost} />
        {[...updatedPosts].reverse().map((item, i) => (
          <Post key={i} item={item} />
        ))}
      </Container>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:9000/api/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
};
