import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'mdbreact';
import ProjectTemplate from './ProjectTemplate';
import { Tabs, Tab, TabList } from 'react-web-tabs';

const All_Projects = ({ imageArray }) => {
    const [projectObject, setProjectObject] = useState([]);

    useEffect(() => {
        setProjectObject(imageArray);
        window.scroll({
            top: 350,
            behavior: "smooth"
        });
    }, [imageArray]);

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
        const projCopy = [...imageArray];
        const reverseCopy = projCopy.reverse();

        const filteredArray = projCopy.filter(proj => proj.category.indexOf(filter) !== -1);

        if (filter === "new") {
            setProjectObject(projCopy);
        } else if (filter === "old") {
            setProjectObject(reverseCopy);
        } else {
            setProjectObject(filteredArray);
        }
    };

    const renderFilter = () => {
        const cursorStyle = { cursor: "pointer" };
        return (
            <Tabs id="Tab" defaultTab="one" className="GalleryContainer ">
                <TabList className="TabList" style={{ border: 'none', margin: '0em 0 2em 0em' }}>
                    <Tab style={cursorStyle} tabFor="one" onClick={() => filterProjects("new")}>Newest <i className="fa fa-arrow-up"> </i></Tab>
                    <Tab style={cursorStyle} tabFor="two" onClick={() => filterProjects("old")}>Oldest  <i className="fa fa-arrow-down"> </i></Tab>
                    <Tab style={cursorStyle} tabFor="three" onClick={() => filterProjects("travel")}>Travel </Tab>
                    <Tab style={cursorStyle} tabFor="four" onClick={() => filterProjects("ppl")}> People </Tab>
                    <Tab style={cursorStyle} tabFor="five" onClick={() => filterProjects("urb")}>Urban & Street </Tab>
                    <Tab style={cursorStyle} tabFor="six" onClick={() => filterProjects("wed")}>Weddings </Tab>
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