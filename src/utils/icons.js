import {
  SiJavascript,
  SiJava,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiDjango,
  SiAmazonaws,
  SiTensorflow,
  SiDocker,
  SiOctave,
  SiGit,
} from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import cplusplusIcon from "@iconify-icons/simple-icons/cplusplus";
import { Icon } from "@iconify/react";
import { v4 as uuidv4 } from "uuid";

const iconSize = 40;

const icons = [
  {
    component: (
      <SiJavascript
        size={iconSize}
        color="#fff"
        style={{ display: "block", width: "100%" }}
      />
    ),
    color: "#f7e018",
    name: "JavaScript",
    key: uuidv4(),
    idx: 1,
  },
  {
    component: <SiJava size={iconSize} color="#fff" />,
    color: "linear-gradient(180deg, #E76F00 0%, #5382A1 67.71%)",
    name: "Java",
    key: uuidv4(),
    idx: 2,
  },
  {
    component: <SiPython size={iconSize} color="#fff" />,
    color:
      "linear-gradient(117.47deg, #4586B9 36.51%, rgba(255, 230, 52, 0.66) 57.38%)",
    name: "Python",
    key: uuidv4(),
    idx: 3,
  },
  {
    component: <SiTypescript size={iconSize} color="#fff" />,
    color: "#007acc",
    name: "TypeScript",
    key: uuidv4(),
    idx: 4,
  },
  {
    component: (
      <Icon
        icon={cplusplusIcon}
        style={{ fontSize: iconSize, color: "#fff" }}
      />
    ),
    color: "#00599d",
    name: "C++",
    key: uuidv4(),
    idx: 5,
  },
  {
    component: <GoDatabase size={iconSize} color="#fff" />,
    color: "#f57f17",
    name: "SQL",
    key: uuidv4(),
    idx: 6,
  },
  {
    component: <SiHtml5 size={iconSize} color="#fff" />,
    color: "#e64c18",
    name: "HTML5",
    key: uuidv4(),
    idx: 7,
  },
  {
    component: <SiCss3 size={iconSize} color="#fff" />,
    color: "#3bb2e0",
    name: "CSS3",
    key: uuidv4(),
    idx: 8,
  },
  {
    component: <SiReact size={iconSize} color="#fff" />,
    color: "#61dbfb",
    name: "React",
    key: uuidv4(),
    idx: 9,
  },
  {
    component: <SiRedux size={iconSize} color="#fff" />,
    color: "#7749bd",
    name: "Redux",
    key: uuidv4(),
    idx: 10,
  },
  {
    component: <SiDjango size={iconSize} color="#fff" />,
    color: "#092e20",
    name: "Django",
    key: uuidv4(),
    idx: 11,
  },
  {
    component: <SiAmazonaws size={iconSize} color="#fff" />,
    color: "linear-gradient(180deg, #162B3C 36.98%, #FF9A00 100%)",
    name: "AWS",
    key: uuidv4(),
    idx: 12,
  },
  {
    component: <SiTensorflow size={iconSize} color="#fff" />,
    color: "#eb8c23",
    name: "TensorFlow",
    key: uuidv4(),
    idx: 13,
  },
  {
    component: <SiDocker size={iconSize} color="#fff" />,
    color: "#2496ed",
    name: "Docker",
    key: uuidv4(),
    idx: 14,
  },
  {
    component: <SiOctave size={iconSize} color="#fff" />,
    color: "linear-gradient(180deg, #21A1CA 0%, #FF7F2A 84.9%)",
    name: "Octave",
    key: uuidv4(),
    idx: 15,
  },
  {
    component: <SiGit size={iconSize} color="#fff" />,
    color: "#f05030",
    name: "Git",
    key: uuidv4(),
    idx: 16,
  },
];

export default icons;
