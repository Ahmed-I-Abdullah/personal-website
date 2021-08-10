import {
  Typography,
  Link,
  Divider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link as ScrollLink } from "react-scroll";

const sendEmail = () => {
  const link =
    "mailto:ahmed.abdullah@ucalgary.ca" +
    "?subject=" +
    encodeURIComponent("Inquiry From Personal Website");
  window.location.href = link;
};

const Footer = () => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer style={{ backgroundColor: "#1c2d41", zIndex: "1000" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: extraSmall ? "10px 10% 10px 10%" : "10px 25% 10px 25%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" style={{ color: "#bac6d4" }}>
              Navigation
            </Typography>
            <ScrollLink to="about" smooth duration={1000}>
              <Link
                style={{ color: "#fff" }}
                component="button"
                variant="body2"
              >
                About
              </Link>
            </ScrollLink>
            <ScrollLink to="experience" smooth duration={1000}>
              <Link
                style={{ color: "#fff" }}
                component="button"
                variant="body2"
              >
                Experience
              </Link>
            </ScrollLink>
            <ScrollLink to="projects" smooth duration={1000}>
              <Link
                style={{ color: "#fff" }}
                component="button"
                variant="body2"
                onClick={() => {}}
              >
                Projects
              </Link>
            </ScrollLink>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" style={{ color: "#bac6d4" }}>
              Contact
            </Typography>
            <Link
              style={{ color: "#fff" }}
              component="button"
              variant="body2"
              onClick={() => {
                sendEmail();
              }}
            >
              Email
            </Link>
            <Link
              style={{ color: "#fff" }}
              component="button"
              variant="body2"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/ahmed-i-abdullah/",
                  "_blank"
                );
              }}
            >
              Linked In
            </Link>
            <Link
              style={{ color: "#fff" }}
              component="button"
              variant="body2"
              onClick={() => {
                window.open("https://github.com/Ahmed-I-Abdullah", "_blank");
              }}
            >
              Github
            </Link>
          </div>
        </div>
        <div>
          <Divider style={{ background: "#fff" }} />
          <p style={{ color: "#fff" }}>
            {" "}
            © {new Date().getFullYear()} Copyright Ahmed Abdullah.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
