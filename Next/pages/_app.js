import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#607D8B" },
      secondary: { main: "#01579B" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <Navbar />

        <Component {...pageProps} />
      </UserProvider>{" "}
    </ThemeProvider>
  );
}

export default MyApp;
