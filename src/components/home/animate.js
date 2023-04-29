import { motion, useAnimation } from "framer-motion";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { analytics } from "../../Data/dummy";
import "../../Styles/analytics.scss";

let sad = require("../../images/Woman infertility-pana.png");

const includedFeatures = [
  "Post abortion bleeding",
  "Sterility",
  "Hysterectomy: Uterus removal",
  "Post abortion infections",
  "Post abortion hormonal imbalances",
  "Post abortion mental illnesses",
];

const Animate = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="app__analytics">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="analytics__container"
      >
        <motion.div variants={item2} className="right__analytics">
          <img src={sad} alt="" draggable={false} />
        </motion.div>
        <motion.div variants={item1} className="left__analytics">
          <div className="left__text">
            <h1 className="font text-4xl font-bold tracking-tight sm:text-6xl mb-8">
              Health consequences
            </h1>
          </div>
          <div className="left__analytics__container">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Forty percent of Rwandan women having an abortion are subject to
              complications that require medical attention. Yet women are likely
              to experience complications at different rates based on where they
              obtain the abortion and who performed it. The complication rate is
              as high as 54–55% among poor women in both rural and urban areas.
              <br />
              In 2009 alone healthcare facility in Rwanda treated abortion
              complications on 17000 women who had illegal abortion.
              <div className="mt-8 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Health related consequences of unsafe abortion
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <XMarkIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Animate;
