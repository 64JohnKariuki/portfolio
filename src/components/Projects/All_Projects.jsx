import React, { useEffect } from 'react';
import {
    CONSTANT_NEW, CONSTANT_OLD, CONSTANT_PORTRAITS,
    ACTION_TYPE_FILTER,
    CONSTANT_EVENTS,
    CONSTANT_PARTY
} from '../configs/constants';
import { Row, Col } from 'mdbreact';
import ProjectTemplate from './ProjectTemplate';
import { Tabs, Tab, TabList } from 'react-web-tabs';
import { connect, useDispatch, useSelector } from "react-redux";
import ReactGA from 'react-ga';

const All_Projects = () => {
    const dispatch = useDispatch();
    
    const projectObject = useSelector(state => state.All_ProjectsReducer.projectObject);

    useEffect(() => {
        window.scroll({
            top: 350,
            behavior: "smooth"
        });
        ReactGA.event({
            category: "LandedOn: /All_Projects_Page",
            action: 'Landed On',
        });

        // Will Reload Reducer when coming back to projects page
        dispatch({ type: CONSTANT_NEW });
    }, [dispatch]);

    const renderAllProjects = () => {
        if (!projectObject) {
            return;
        }
        return projectObject.map((obj, i) => (
            <ProjectTemplate
                key={i + obj.title}
                projectObject={obj}
            />
        ));
    };

    const filterProjects = (filter) => {
        if (filter === CONSTANT_NEW) {
            dispatch({ type: CONSTANT_NEW, value: filter });
        } else if (filter === CONSTANT_OLD) {
            dispatch({ type: CONSTANT_OLD, value: filter });
        } else {
            dispatch({ type: ACTION_TYPE_FILTER, value: filter });
        }
    };

    const renderFilter = () => {
        const cursorStyle = { cursor: "pointer" };
        return (
            <Tabs id="Tab" defaultTab="one" className="GalleryContainer ">
                <TabList className="TabList" style={{ border: 'none', margin: '0em 0 2em 0em' }}>
                    <Tab style={cursorStyle} tabFor="one" onClick={() => filterProjects(CONSTANT_NEW)}>Newest <i className="fa fa-arrow-up"> </i></Tab>
                    <Tab style={cursorStyle} tabFor="two" onClick={() => filterProjects(CONSTANT_OLD)}>Oldest  <i className="fa fa-arrow-down"> </i></Tab>
                    <Tab style={cursorStyle} tabFor="three" onClick={() => filterProjects(CONSTANT_EVENTS)}>Events </Tab>
                    <Tab style={cursorStyle} tabFor="four" onClick={() => filterProjects(CONSTANT_PORTRAITS)}>Portraits </Tab>
                    <Tab style={cursorStyle} tabFor="five" onClick={() => filterProjects(CONSTANT_PARTY)}>Party </Tab>
                </TabList>
            </Tabs>
        );
    };

    return (
        <div>
            <section className="project-margins text-center allprojectmargintop">
                <Row>
                    <Col>
                        {renderFilter()}
                    </Col>
                </Row>
                <Row>
                    {renderAllProjects()}
                </Row>
            </section>
        </div>
    );
};

export default All_Projects;