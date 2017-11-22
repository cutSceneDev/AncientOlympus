import React, { Component } from 'react'
import styles from './ImageSlider.css'

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
     return (
        <img
          className={styles.Image}
          src={this.props.images[this.state.activeSlide]} 
          onClick={this.nextSlideHandler}
          width={this.props.width}
          height={this.props.height}
          alt="" 
        />
    )
  }
}

export default ImageSlider