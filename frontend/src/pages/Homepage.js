import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <article>
                <h3>Career Goals and Details About this Application</h3>
                <p>
                    {/* Explain your career goals. */}
                    My main goal for my career is to find work with purpose. I want to 
                    have the feeling that my work does some good in the world. It doesn't 
                    have to come with renown, or external praise, but internal moral fulfillment. 
                    It's also important for me to have some enjoyment out of doing the work, and for 
                    me right now, that is building things that persist after I finish working on it.
                    In five years, I want to see myself in an engineering position, working on something 
                    that I find impactful.
                </p>
                <p>
                    {/* Briefly explain the technologies used in the website. */}
                    Here's a list of the major technologies used in this website:
                    <dl>
                        <dt>MongoDB</dt>
                        <dd>
                            A document-oriented database program, MongoDB is how the 
                            application keeps and organizes persistent data.
                        </dd>
                        <dt>Express</dt>
                        <dd>
                            The back-end framework of the application, Express.js, lets us 
                            easily implement RESTful APIs in the form of a model for CRUD operations, 
                            as well as a controller to connect the view and the model.
                        </dd>
                        <dt>React</dt>
                        <dd>The front-end framework of this application. React allows us to easily
                            implement a single-page application and divert many of the computing tasks
                            to the browser. It also gives easier access to functionality with hooks
                            that allow a user to update and re-render the state of components dynamically.
                        </dd>
                        <dt>Node</dt>
                        <dd>
                            Node is the runtime environment used for this application. Although 
                            Node.js is single-threaded, the utilization of an event loop
                            allows asynchronous and event-driven calls to be made, 
                            so that the application isn't halted by every request. 
                        </dd>
                    </dl>
                </p>


            </article>
        </>
    )
}

export default HomePage;