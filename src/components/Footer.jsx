import {
  Typography,
  Link,
  Divider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer style={{ backgroundColor: "#1c2d41" }}>
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
              onClick={() => {}}
            >
              Email
            </Link>
            <Link
              style={{ color: "#fff" }}
              component="button"
              variant="body2"
              onClick={() => {}}
            >
              Linked In
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
