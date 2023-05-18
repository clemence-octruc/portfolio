// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "@react-spring/web";

// @ts-ignore
const FadeIn = ({ children, classes }) => {
    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 500,
        to: {
            x: !inView ? -100 : 0,
            opacity: !inView ? 0 : 1,
        },
    });
    return (
        <Waypoint onEnter={() => setInview(true)} topOffset={"30%"}>
            <animated.div style={transition} className={classes}>
                {children}
            </animated.div>
        </Waypoint>
    );
};

export default FadeIn;