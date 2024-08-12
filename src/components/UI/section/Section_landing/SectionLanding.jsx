import React from 'react';
import classes from './style.module.css';
import Card_components from './card_component_folder/Card_components.jsx';
import link from './image/arrLink.svg';

const SectionLanding = ( { children,children_description, section_id, childLink,section_category } ) => {
  return (
    <section className={classes.landing_section}> 
        <div className={classes.section_title}>
            <div>
                <p>
                    {children}
                </p>
                <div className={classes.section_link}>
                    <img src={link}/>
                </div>
            </div>
            <span className={classes.section_description}>{children_description}</span>
        </div>
        <div className={classes.section_content}>
          <Card_components section_category={section_category}/>
        </div>
    </section>
  )
}

export default SectionLanding