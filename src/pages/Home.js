import React from 'react'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from '../components/Data'
import HeroSlider from '../components/slider/HeroSlider'
import ImgLeftSide from '../components/ImgLeftSide'
import ImgRightSide from '../components/ImgRightSide'
import InstagramGallery from '../components/InstagramGallery'
import SuscribeSection from '../components/SuscribeSection'


const Home = () => {
    return (
        <>
            <HeroSlider/>
            <ImgLeftSide {...homeObjOne}/>
            <ImgRightSide {...homeObjTwo}/>
            <ImgLeftSide {...homeObjThree}/>
            <ImgRightSide {...homeObjFour}/> 
            <InstagramGallery/>
            <SuscribeSection/>
        </>
    )
}

export default Home
