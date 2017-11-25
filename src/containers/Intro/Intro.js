import React, { Component } from 'react'
import styles from './Intro.css'

import ImageSlider from '../../components/UI/ImageSlider/ImageSlider'
import Auth from './Auth/Auth'
import Button from '../../components/UI/Button/Button'

import sliderImage1 from '../../assets/slider1.jpg'
import sliderImage2 from '../../assets/slider2.jpg'
import sliderImage3 from '../../assets/slider3.jpg'
import sliderImage4 from '../../assets/slider4.jpg'
import sliderImage5 from '../../assets/slider5.jpg'

class Intro extends Component {
  state = {
    authIsActive: false
  }

  handleAuthOpenClick = () => {
    this.setState({authIsActive: true})
  }

  handleAuthCloseClick = () => {
    this.setState({authIsActive: false})
  }

  render() {
    const sliderImagesList = [
      sliderImage1,
      sliderImage2,
      sliderImage3,
      sliderImage4,
      sliderImage5
    ]

    return (
      <div className={styles.Intro}>
        <Auth
          authIsActive={this.state.authIsActive} 
          authClose={this.handleAuthCloseClick}
        />

        <h1>Ancient Olympus</h1>

        <ImageSlider 
          width="500" 
          height="250" 
          images={sliderImagesList} 
        />

        <p>Greek mythology is a corpus of stories created throughout a long period of time, often in various places by neighboring, though different tribes. The lack of consistency is apparent in many cases, as for example there may be two, three or more versions of a certain myth, most usually differing in minor points. The parentage of Greek heroes is often problematic. Different areas and royal houses may contest their affiliation to a famous hero; or, the myth may have become so popular, re-told so many times, that various versions circulated depending on the storytellers' imagination; or, the thread of the myth was lost somehow and, when resuscitated, parts of it had become obscure for the newer generations.</p>
        
        <Button handleClick={this.handleAuthOpenClick}>START GAME</Button>
      </div>
    )
  }

}

export default Intro