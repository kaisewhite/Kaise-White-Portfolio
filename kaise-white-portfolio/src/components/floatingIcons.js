import { Frame } from "framer"
import GatsbyLogo from "../../static/stack/Gatsby-Monogram.svg"
import MaterialUILogo from "../../static/stack/Material-UI.svg"
import ReactLogo from "../../static/stack/react-native.svg"
import JavaScriptLogo from "../../static/stack/JavaScript.svg"
import FramerMotionLogo from "../../static/stack/framer-motion.png"
const floatingIcon = () => {
    return (
        <Frame
              animate={{ y: [50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50] }}
              transition={{
                loop: Infinity,
                duration: 5,
                ease: "linear",
              }}
              size={50}
              background={"transparent"}
              radius={30}
              style={{ marginLeft: 100 }}
            >
              <img src={ReactLogo} style={{ width: 50, height: 50 }}></img>
            </Frame>
            <Frame
              animate={{ y: [20, 10, 0, 10, 20, 30, 40, 50, 40, 30, 20] }}
              transition={{
                loop: Infinity,
                duration: 5,
                ease: "linear",
              }}
              size={50}
              background={"transparent"}
              radius={30}
            >
              <img src={MaterialUILogo} style={{ width: 50, height: 50 }}></img>
            </Frame>
    )
}