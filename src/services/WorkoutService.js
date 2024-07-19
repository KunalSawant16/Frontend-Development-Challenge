const getInitialData = () => {
  const data = localStorage.getItem('workouts');
  return data ? JSON.parse(data) : [
    {
      id: 1,
      name: 'John Doe',
      type : 'Running',
      minutes: 30 
      
    },
    {
      id: 2,
      name: 'Jane Smith',
      type: 'Swimming',
       minutes: 60
    },
    {
      id: 3,
      name: 'Mike Johnson',
      type: 'Yoga',
       minutes: 50
    }
  ];
};

const saveData = (data) => {
  localStorage.setItem('workouts', JSON.stringify(data));
};

export { getInitialData, saveData };
