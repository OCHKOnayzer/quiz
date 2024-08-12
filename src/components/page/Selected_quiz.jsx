import React from 'react';
import classes from './style/style.module.css';
import About from '../UI/widgets/about/About';
import Slides from '../UI/widgets/slids/Slides';
import SectionLanding from '../UI/section/Section_landing/SectionLanding';
import slide1image1 from '../others/image/slide/slider1image1.jpg';
import slide2image1 from '../others/image/slide/slider2image1.jpg'
const Selected_quiz = () => {
  return (
    <div className={classes.landing_wrapper}>
        <div className={classes.landing_conteiner}>
            <div className={classes.widgets_wrapper}>
                <About/>
                <Slides image1 = {slide1image1} image2 = {slide2image1}/>
                <Slides image1 = {slide2image1} image2 = {slide1image1}/>
            </div>  
            <SectionLanding children={'Мир разработки'} children_description={'Самые актуальные тесты на платформе'} section_category={'IT'}/>
            <SectionLanding children={'Знание истории'} children_description={'Самые актуальные тесты на платформе'} section_category={'HISTORY'}/>
        </div>
    </div>
  )
}

export default Selected_quiz