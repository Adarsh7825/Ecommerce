import React from "react";
import Layout from "./../components/Layout.js";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { useSpring, animated } from "react-spring";

const Contact = () => {
    const animationProps = useSpring({
        opacity: 1,
        transform: "translateY(0px)",
        from: { opacity: 0, transform: "translateY(100px)" },
    });

    return (
        <Layout title={"Contact us"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <animated.img
                        src="/images/contactus.jpg"
                        alt="contactus"
                        style={{
                            width: "100%",
                            ...animationProps,
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <animated.h1
                        className="bg-dark p-2 text-white text-center"
                        style={animationProps}
                    >
                        CONTACT US
                    </animated.h1>
                    <animated.p className="text-justify mt-2" style={animationProps}>
                        Any queries and information about the product, feel free to call us anytime. We are available 24/7.
                    </animated.p>
                    <animated.p className="mt-3" style={animationProps}>
                        <BiMailSend /> : www.help@ecommerceapp.com
                    </animated.p>
                    <animated.p className="mt-3" style={animationProps}>
                        <BiPhoneCall /> : 012-3456789
                    </animated.p>
                    <animated.p className="mt-3" style={animationProps}>
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </animated.p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
