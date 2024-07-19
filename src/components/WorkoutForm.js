import React, { useState } from 'react';


const WorkoutForm = ({ addWorkout  }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && type && minutes) {
      addWorkout({ name, type, minutes });
      setName('');
      setType('');
      setMinutes('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-bottom border-success">
      <div className=''>
        <label className='p-2'>User Name:-</label>
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-1"          
        />
      </div>
      <div className='p-2'>
        <label>Workout Type:- </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="r1">
          <option value="">Select Workout Type</option>
          <option value="Running">Running</option>
          <option value="Cycling">Cycling</option>
          <option value="Swimming">Swimming</option>
          <option value="Yoga">Yoga</option>
        </select>
        
      </div>
      <div className='p-2'>
        <label>Workout Minutes:- </label>
        <input
          type="number"
          placeholder="Workout Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="rounded-1" 
        />
      </div>
      
      <button type="submit" class="btn btn-success mt-2 mb-3">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
