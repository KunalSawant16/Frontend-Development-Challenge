import React from 'react';

const WorkoutItem = ({ workout }) => {
  return (
    <tr>
      <td>{workout.name}</td>
      <td > {workout.type}</td>
      <td >{workout.minutes}</td>
    </tr>
  );
};

export default WorkoutItem;
