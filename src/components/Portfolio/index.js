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
            description: 'Review App for javascript.',
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
          name: 'TransferCard',
          description: 'Travel with ease with our new contactless virtual train ticket, transferCard.',
          link: 'https://transfercard.herokuapp.com/',
          github: 'https://github.com/itsrheine/transferCard'
        },
        {
            name: 'Budget Tracker',
            description: 'Online budget Tracking Web App',
            link: 'https://shielded-castle-29266.herokuapp.com/',
            github: 'https://github.com/daejo/budget-tracker'
        },
    ])

    return (   
        <div class="portfolio-grid">
            {projects.map((project, i) => (
                <Project
                    project={project}
                    i={i}
                />
            ))}
        </div>
    );
}

export default Portfolio;