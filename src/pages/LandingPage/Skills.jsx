import React from 'react';
import html from '../../assets/IMG/SKILLS/html.svg';
import css from '../../assets/IMG/SKILLS/css.svg';
import js from '../../assets/IMG/SKILLS/js.svg';
import react from '../../assets/IMG/SKILLS/react.png';
import redux from '../../assets/IMG/SKILLS/redux.svg';
import node from '../../assets/IMG/SKILLS/node.svg';
import psql from '../../assets/IMG/SKILLS/psql.svg';
import vsc from '../../assets/IMG/SKILLS/vsc.svg';
import tailwind from '../../assets/IMG/SKILLS/tailwind.svg';
import sass from '../../assets/IMG/SKILLS/sass.svg';
import bootstrap from '../../assets/IMG/SKILLS/bootstrap.svg';
import ps from '../../assets/IMG/SKILLS/PS.svg';
import git from '../../assets/IMG/SKILLS/git.svg';
import github from '../../assets/IMG/SKILLS/github.svg';
import responsive from '../../assets/IMG/SKILLS/responsive.png';
import firebase from '../../assets/IMG/SKILLS/firebase.svg';

const Skills = () => {
    return (
<section id="skills" className="skills">
            <div className="skills-container">
                <h3 className="title-skills">Skills</h3>
                <hr className="patita-primary"></hr>
                <div className="logos-tecnos">
                    <img src={html} alt="HTML 5" title="HTML 5" className="tecno html" />
                    <img src={css} alt="CSS 3" title="CSS 3" className="tecno css" />
                    <img src={js} alt="JAVASCRIPT" title="JAVASCRIPT" className="tecno javascript" />
                    <img src={react} alt="REACT" title="REACT" className="tecno react" />
                    <img src={redux} alt="REDUX" title="REDUX" className="tecno redux" />
                    <img src={node} alt="NODE JS" title="NODE JS" className="tecno node" />
                    <img src={psql} alt="POSTGRESQL" title="POSTGRESQL" className='tecno psql'/>

                    {/* <img src={firebase} alt="FIREBASE" title="FIREBASE" className="tecno firebase" /> */}

                    <img src={tailwind} alt="TAILWIND" title="TAILWIND" className="tecno tailwind" />
                    
                    {/* <img src={sass} alt="SASS" title="SASS" className="tecno sass" />
                    <img src={bootstrap}alt="BOOTSTRAP" title="BOOTSTRAP" className="tecno bootstrap" /> */}
                    
                    <img src={vsc} alt="VSCODE" title="VSCODE" className="tecno vsc" />
                    <img src={git} alt="GIT" title="GIT" className="tecno git" />
                    <img src={github} alt="GITHUB" title="GITHUB" className="tecno github" />
                    <img src={ps} alt="PHOTOSHOP" title="PHOTOSHOP" className="tecno photoshop" />
                    <img src={responsive} alt="RESPONSIVE DESIGN" title="RESPONSIVE DESIGN"
                    className="tecno responsive" />

                    

                    

                    
                </div>
            </div>
        </section>
    );
};

export default Skills;