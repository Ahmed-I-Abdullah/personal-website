import React, { useState, useEffect } from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import icons from "../utils/icons";
import "./skills3.scss";

const useStyles = makeStyles({
  mainContainer: {
    width: "76%",
    margin: "0px 12%",
    marginBottom: "150px",
  },
  skillsContainer: {
    display: "flex",
    overflow: "hidden",
  },
  title: {
    paddingTop: "80px",
    color: "#fffffe",
  },
  horizontalLine: {
    color: "#ff8906",
    width: "10em",
    border: "4px solid",
    borderRadius: "5px",
    marginBottom: "30px",
  },
  orbitContainer: {
    margin: "auto",
  },
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  centeralCircleContainer: {
    position: "relative",
    top: "calc(50% + 25px)",
    left: "calc(50% + 25px)",
    borderRadius: "50%",
  },
  centralCircle: {
    borderRadius: "50%",
    background: "#fff",
    "&>svg": {
      color: "#000 !important",
      fill: "#000",
    },
  },
  pulsingIcon: {
    display: "flex",
    cursor: "pointer",
    borderRadius: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#000",
    animation:
      "grow-shrink 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 2s infinite",
  },
  smallerIcons: {
    '&>svg': {
      fontSize: '10px',
      width: '20px',
      height: '20px',
  
   
    }
  }
});

const OrbitItem = ({ component, color, index, setSelectedItem }) => {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const [itemOpacity, setItemOpacity] = useState(1);
  const [itemBorder, setItemBorder] = useState(0);
  
  return (
    <div
      className={extraSmall ? `${classes.smallerIcons} ${classes.pulsingIcon}`:classes.pulsingIcon}
      style={{
        background: color,
        width: extraSmall ? "30px" :"60px",
        height: extraSmall ? "30px" :"60px",
        opacity: itemOpacity,
        borderWidth: itemBorder,
      }}
      onClick={() => {
        setSelectedItem(icons[index]);
      }}
      onMouseOver={() => {
        setItemOpacity(0.6);
        setItemBorder(3);
      }}
      onMouseOut={() => {
        setItemOpacity(1);
        setItemBorder(0);
      }}
    >
      {component}
    </div>
  );
};

const Skills3 = () => {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState(icons[0]);
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));

  const handleUpdateCenter = () => {
    const nextIndex = selectedItem
      ? selectedItem.idx === icons.length - 1
        ? 0
        : selectedItem.idx + 1
      : 0;
    setSelectedItem(icons[nextIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleUpdateCenter();
    }, 1500);

    return () => clearInterval(interval);
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem) {
      setSelectedItem(icons[0]);
    }
  }, [selectedItem]);

  return (
    <div className={classes.mainContainer}>
      <div id="skills">
        <h1 className={classes.title}>Skills</h1>
        <hr className={classes.horizontalLine} />
        <div
          style={{ display: "block", width: "300px", margin: "auto", marginBottom: extraSmall ? "-110px": "200px" }}
        >
          <div
            style={{ left: extraSmall ? "auto" : small ? "-30%" : "-64%", marginTop: extraSmall ? "90px" : "" }}
            className={`container ${classes.orbitContainer}`}
          >
            <div
              className={`${classes.flexCenter} ${classes.centeralCircleContainer}`}
              style={{
                background: selectedItem?.color,
                top: extraSmall ? "calc(10% + 15px)" : small ? "calc(35% + 25px)" : "",
                left: extraSmall ? "calc(10% + 15px)" : small ? "calc(35% + 25px)" : "",
                height: extraSmall ? "108px" : "165px",
                width: extraSmall ? "108px" : "165px",
              }}
            >
              <div
                style={{
                  height: extraSmall ? "100px" : "150px",
                  width: extraSmall ? "100px" : "150px",
                }}
                className={`${classes.flexCenter} ${classes.centralCircle}`}
              >
                {selectedItem?.component}
                <div style={{ height: "5px" }} />
                <h4 style={{ padding: 0, margin: 0 }}>{selectedItem?.name}</h4>
              </div>
            </div>

            {icons.map((icon, index) => {
              return (
                <div
                  key={icon.key}
                  style={{ width: "100%", height: "100%" }}
                  className="orbit"
                >
                  <OrbitItem
                    component={icon.component}
                    color={icon.color}
                    index={index}
                    setSelectedItem={setSelectedItem}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills3;
