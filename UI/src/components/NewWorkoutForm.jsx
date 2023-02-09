import axios from 'axios';
import { useState } from 'react';

const NewWorkout = () => {
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const clearFields = () => {
    setReps('');
    setTitle('');
    setWeight('');
  };

  const handleClearFieldsClick = (e) => {
    e.preventDefault();

    clearFields();
  };

  const handleAddDataClick = async (e) => {
    e.preventDefault();

    const workout = { title, reps, weight };

    try {
      let res = await axios.post('/workouts', workout, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });

      if (res.status === 200) {
        console.log('New Workout Added');
        clearFields();
        setError(null);
        console.log(res);
      }
    } catch (err) {
      console.log('ERROR: ', err);
      setError(err.message);
    }
  };

  return (
    <main>
      <form className="create">
        <h3>Add a new workout</h3>

        <label>Exercise Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

        <label>Weight (in Kg)</label>
        <input type="number" onChange={(e) => setWeight(e.target.value)} value={weight} />

        <label>Reps</label>
        <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} />

        <button onClick={handleAddDataClick}>Add</button>
        {error && <div className="error">Error: {error}</div>}
        <button onClick={handleClearFieldsClick}>Clear</button>
      </form>
    </main>
  );
};

export default NewWorkout;
