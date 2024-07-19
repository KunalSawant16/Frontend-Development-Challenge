import React from 'react';
import WorkoutItem from './WorkoutItem.js';

const WorkoutTable = ({ workouts, searchWorkout, filterWorkout }) => {
  return (
    <div className='mt-3'>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => searchWorkout(e.target.value)}
        className="rounded-1 m-2" 
      />
      <select onChange={(e) => filterWorkout(e.target.value)} className="r1">
        <option value="" >All</option>
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
        <option value="swimming">Swimming</option>
        <option value="yoga">Yoga</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className='p-2'>Type</th>
            <th className='p-3'>Minutes</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <WorkoutItem key={index} workout={workout} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutTable;
