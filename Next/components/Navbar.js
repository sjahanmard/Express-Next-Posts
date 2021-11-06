import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Image from "next/Image";
import sad from "../assets/sad.jpg";
import { Box } from "@mui/system";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = (props) => {
  const { user } = useUser();
  console.log("navbar", user);
  return (
    <AppBar position="relative">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box justifyContent="start" alignItems="center" display="flex">
          {user ? (
            <>
              {" "}
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "inline-block",
                  marginRight: 15,
                  border: "2px solid white",
                }}
              >
                <img src={user.picture} alt="User" width={50} height={50} />
              </div>
              <Typography sx={{ fontSize: { xs: 14, sm: 20 } }} component="div">
                {user.given_name} {user.family_name}
              </Typography>
              <a href="/api/auth/logout">
                <IconButton style={{ color: "white" }} component="div">
                  <LogoutIcon />
                </IconButton>
              </a>
            </>
          ) : (
            <Button
              variant="filled"
              color="secondary"
              startIcon={<LoginIcon />}
            >
              <a href="/api/auth/login"> Login With Email</a>
            </Button>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          <HomeWorkIcon style={{ fontSize: 50, margin: 5 }} />
          <Typography variant="h6" fontWeight={700} color="inherit" noWrap>
            NEWS
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
