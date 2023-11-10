import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import { inroadspic } from "../../images";
import "../../../Styles/analytics.scss";

let inroadspic =require("../../../images/inroadspic.png");

const ImpactAnimateKinya = () => {
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
        <motion.div variants={item1} className="left__analytics">
          <div className="left__text">
            <h1 className="font text-4xl font-bold tracking-tight sm:text-6xl mb-8">
              Pollinate Seed Grant
            </h1>
            <p>
            Gukina amakarita bizaba bifite ubutumwa bugufi bitanga, hanyuma  a toolkit kizaba gifite amakuru yuzuye azakoreshwa n'abakinnyi kugira ngo barebe ibisubizo byinshi mu biganiro byabo. 'umushinga wacu ngenderwaho usobanurwa n'igitekerezo cya Pollinate Seed Grant, buzatuma habaho ibikoresho bishobora gukoreshwa ahantu hamwe n'abakobwa bombi b'urubyiruko mu kunoza ibiganiro by'abaturage bijyanye no gukuramo inda no kugabanya  akato gahabwa abakuramo inda.
            </p>
          </div>
          {/* <div className="left__analytics__container">
            {analytics.map((analytic, index) => (
              <div className="analytic__container" key={index}>
                <div className="analytics__icon">
                <a href={analytic.link} target="_blank"> {analytic.desc}</a>
               
                </div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div> */}
        </motion.div>
        <motion.div variants={item2} className="right__analytics">
          <img src={inroadspic} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImpactAnimateKinya;
