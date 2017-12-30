import React, { Component } from 'react'
import styles from './ImageSlider.css'

import { Transition } from 'react-transition-group'

class ImageSlider extends Component {
  state = {
    activeSlide: 0
  }

  nextSlideHandler = () => {
    this.setState((prevState) => {
      let nextSlide = prevState.activeSlide + 1
      if (nextSlide > this.props.images.length - 1) nextSlide = 0
      return {
        activeSlide: nextSlide
      }
    })
  }

  render() {
    const { images, width, height } = this.props
    const arrayOfBooleanSliderStatus = images.map((_, index) => {
      return this.state.activeSlide === index
    })

    const imagesList = images.map((src, index) => (
      <Transition
        in={arrayOfBooleanSliderStatus[index]}
        timeout={0}
        key={src}
      >
        {state => (
          <img
            className={styles.Image}
            src={src} 
            onClick={this.nextSlideHandler}
            alt={''}
            style={{
              opacity: state === 'entered' ? 1 : 0,
              transition: 'opacity 1000ms ease'
            }}
          />
        )}
      </Transition>
    ))

    return (
      <div className={styles.sliderWrapper} style={{width, height}}>
        {imagesList}
      </div>
    )
  }
}

export default ImageSlider