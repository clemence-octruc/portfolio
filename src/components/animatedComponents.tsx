// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "@react-spring/web";

// @ts-ignore
const FadeIn = ({ children, classes="", direction, speedFactor=1}) => {
    const [inView, setInview] = useState(false);

    const transition = useSpring({
        delay: 500,
        config: {
            mass: 0.5+(speedFactor / 2),
            friction: 26*speedFactor,
            tension: 170,

        },
        to: {
            x: !inView ? (direction == "left" ? -100 : direction == "right" ? 100 : 0) : 0,
            y: !inView ? (direction == "top" ? -100 : direction == "bottom" ? 100 : 0) : 0,
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