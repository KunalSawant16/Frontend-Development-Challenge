// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WorkoutForm from './components/WorkoutForm';
import WorkoutTable from './components/WorkoutTable';
import Pagination from './components/Pagination';
import { getInitialData, saveData } from './services/WorkoutService.js';
import "./App.js"

function App() {
  const [workouts, setWorkouts] = useState(getInitialData());
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 5;

  useEffect(() => {
    saveData(workouts);
    setFilteredWorkouts(workouts);
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const searchWorkout = (name) => {
    if (name) {
      setFilteredWorkouts(
        workouts.filter((workout) => workout.name && workout.name.toLowerCase().includes(name.toLowerCase()))
      );
    } else {
      setFilteredWorkouts(workouts);
    }
  };

  const filterWorkout = (type) => {
    if (type) {
      setFilteredWorkouts(
        workouts.filter((workout) => workout.type && workout.type.toLowerCase() === type.toLowerCase())
      );
    } else {
      setFilteredWorkouts(workouts);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = filteredWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  return (
    <div className="App container text-center mt-5 col-6 b1 rounded-2 border border-success">
      <Header />
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutTable workouts={currentWorkouts} searchWorkout={searchWorkout} filterWorkout={filterWorkout}  />
      <Pagination workoutsPerPage={workoutsPerPage} totalWorkouts={filteredWorkouts.length} paginate={paginate} />
    </div>
  );
}

export default App;
