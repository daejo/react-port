import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Taskinator',
            desciption: 'Task manager app',
            link: 'https://daejo.github.io/taskinator/',
            github: 'https://github.com/daejo/taskinator'
        },
        {
            name: 'Code Quiz',
            description: 'A timed quiz that gauges your knowledge regarding JavaScript.',
            link: 'https://daejo.github.io/code-quiz/',
            github: 'https://github.com/daejo/code-quiz'
        },
        {
            name: 'Meteor-o-logics',
            description: 'Online weather API Web App',
            link: 'https://daejo.github.io/meteor-o-logics/',
            github: 'https://github.com/daejo/meteor-o-logics'
        },
        {
            name: 'WD-Sched 20',
            description: 'Daily task planner web app',
            link: 'https://daejo.github.io/wd-sched/',
            github: 'https://github.com/daejo/wd-sched'
        },
        {
          name: 'Travel Dashboard',
          description: 'Web & Mobile Interactive Travel App',
          link: 'https://itsrheine.github.io/Travel-Dashboard/',
          github: 'https://github.com/itsrheine/Travel-Dashboard'
        },
        {
            name: 'Budget Tracker',
            description: 'Online budget Tracking Web App',
            link: 'https://shielded-castle-29266.herokuapp.com/',
            github: 'https://github.com/daejo/budget-tracker'
        },
    ])

    return (
        <div id="content">
            <div class="post-container">
                <div class="post">
                    <div class="post-author">
                        <h1>Portfolio</h1>
                    </div>
                    
                    <div>
                        {projects.map((project, i) => (
                            <Project
                                project={project}
                                i={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;