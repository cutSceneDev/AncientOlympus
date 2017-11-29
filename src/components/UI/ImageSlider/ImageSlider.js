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
    const arrayOfBooleanSliderStatus = this.props.images.map((_, index) => {
      return this.state.activeSlide === index
    })

    const images = this.props.images.map((src, index) => (
      <Transition
        in={arrayOfBooleanSliderStatus[index]}
        timeout={100}
        unmountOnExit
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
              transition: 'all 500ms ease-out'
            }}
          />
        )}
      </Transition>
    ))

    return (
      <div className={styles.sliderWrapper} style={{width: this.props.width, height: this.props.height}}>
        {images}
      </div>
    )
  }
}

export default ImageSlider