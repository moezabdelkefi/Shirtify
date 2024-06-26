'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import CustomButton from '../../_components/CustomButton.jsx'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../../config/motion'
import state from '../store'

import '../../_css/index.css'

const Home = () => {
  const toggleBackVisibility = () => {
    state.isBackVisible = !state.isBackVisible
  }
  const snap = useSnapshot(state)
  const toggleModel = () => {
    state.currentModel = (state.currentModel + 1) % 3
  }

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text" style={{ color: 'var(--text-color)' }}>
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p
                className="max-w-md font-normal text-gray-600 text-base"
                style={{ color: 'var(--text-color)' }}
              >
                Craft your one-of-a-kind shirt with our innovative 3D customization tool. Set your
                creativity free and establish your distinct fashion statement.{' '}
                <strong>Unleash your imagination</strong> and define your own style.
              </p>

              <div className="flex gap-4">
                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
                <button onClick={toggleModel} className="w-fit px-4 py-2.5 font-bold text-sm">
                  Switch Model
                </button>
                <button
                  onClick={toggleBackVisibility}
                  className="w-fit px-4 py-2.5 font-bold text-sm"
                >
                  Back Visibility
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
