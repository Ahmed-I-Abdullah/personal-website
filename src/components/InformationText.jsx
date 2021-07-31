import { useTheme } from "@material-ui/core";
import TextScramble from "react-textscramble";

let phrases = [
  "My values are achievement, integrity, curiosity, and empathy. These values are important to the way I live and work.",
  "I believe in change and lifetime learning",
];
let freezeDuration = 2600;

const InformationText = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        marginTop: "50px",
        color: theme.palette.text.primary,
        fontSize: "1.35em",
        padding: 0,
      }}
    >
      <TextScramble
        phrases={phrases}
        freezeDuration={freezeDuration}
        isInfiniteLoop={true}
      />
    </div>
  );
};

export default InformationText;