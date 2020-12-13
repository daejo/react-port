import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentPage } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentPage.name)}</h1>
      <p>{currentPage.description}</p>
      <Project category={currentPage.name} />
    </section>
  );
}
export default Portfolio;