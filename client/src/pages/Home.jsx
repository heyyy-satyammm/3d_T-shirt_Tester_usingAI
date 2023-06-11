import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation, 
  slideAnimation
} from '../config/motion';
import React from 'react'

const Home = () => {
  const snap= useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
          <img 
            src='./test-logo.png' 
            alt="logo" 
            className = "w-8 h-8 object-contain" 
          />
          </motion.header>

          <motion.div className= "home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation} >
              <h1 className= "head-text">
                LET'S <br className='xl:block hidden' /> DO IT.
              </h1>
            </motion.div>

            <motion.div
              {...headContainerAnimation}
              className= "flex flex-col gap-5">
              <p className= "max-w-md font-normal text-grey-600 text-base">
                <i>Create your unique and exlusive shirt with my brand-new 3D customization tool.</i> <strong>Unleash your Imagination</strong> {" "} <i> and define your own style.</i>
              </p>

              <CustomButton 
                type= "filled"
                title= "Customize It"
                handleClick={() => state.intro = false}
                customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home