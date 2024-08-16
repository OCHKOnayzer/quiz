import React,{FC} from 'react';
import classes from './style.module.css';
import Card_components from './card_component_folder/Card_components';
import link from './image/arrLink.svg';

type SectionLandingProps = {
  title:string,
  description:string,
  section_category:string
}

const SectionLanding:FC<SectionLandingProps> = ({ title,description,section_category } ) => {
  return (
    <section className={classes.landing_section}> 
        <div className={classes.section_title}>
            <div>
                <p>
                    {title}
                </p>
                <div className={classes.section_link}>
                    <img src={link}/>
                </div>
            </div>
            <span className={classes.section_description}>{description}</span>
        </div>
        <div className={classes.section_content}>
          <Card_components section_category={section_category}/>
        </div>
    </section>
  )
}

export default SectionLanding