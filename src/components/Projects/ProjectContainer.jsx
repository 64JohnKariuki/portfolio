import React, { useEffect, useState } from 'react';
import ProjectHeader from './ProjectHeader';
import GalleryContainer from '../GalleryContainer';
import All_Projects from './All_Projects';
import AboutPage from '../../pages/About/About';

const ProjectContainer = ({ headerInfo, imageArray, renderType, showFilter = true, style }) => {
    // No need for local state; use props directly unless transformation is required
    useEffect(() => {
        // Scroll behavior can be set here if required
        window.scroll({
            top: 100,
            behavior: "smooth",
        });
    }, []); // Empty array ensures this runs only once on component mount

    // console.log("props: " + JSON.stringify(this.props));
    // console.log("state: " + JSON.stringify(this.state));
    // }
    //Main Scroll, will scroll on most pages, interchange 350, 100 to not show nav
    // componentDidMount() {
    //     window.scroll({
    //         top: 100,
    //         behavior: "smooth"
    //     });
    //     // console.log("ProjectContainer: window did mount");
    // }

    //Cause issue with home '/' scroll mid way"
    // componentWillUpdate() {
    //     return (window.scroll({
    //         top: 350,
    //         behavior: "smooth"
    //     }));
    // }

    const renderProject = (renderType) => {
        // Check which project type (Gallery, Projects Page, or Ind. Project)
        // Gallery Container
        // Projects Page

        if (renderType === "gallery" || renderType === "feature") {
            return <GalleryContainer
                style={style}
                showFilter={showFilter}
                imageArray={imageArray}
            />
        }
        else if (renderType === "allprojects") {
            return <All_Projects
                imageArray={imageArray}
            />
        }
        else if (renderType === "aboutme") {
            return <AboutPage />;
        }
        else {
            return <span>No Pictures</span>
        }
    }

    // **Alan > Deconstruct Defaults
    
    return (
        <div id="projectcontainer" className="">
            <ProjectHeader
             {...headerInfo} // **Alan > Passing a spread operator as props
                // title={title}
                // desc={desc}
                // date={date}
                // bgImage={bgImage}
                // style={style}
            />
            {renderProject(...renderType)}
        </div>
    );
    
};

export default ProjectContainer;