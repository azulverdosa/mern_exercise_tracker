import axios from 'axios';
import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const NewWorkout = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
    if (!user) {
      setError('Please login to access this area');
      return;
    }

    const workout = { title, reps, weight };

    try {
      const res = await axios.post('/workouts', workout, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${user.token}`,
        },
      });

      if (res.status === 200) {
        console.log('New Workout Added');
        clearFields();
        setError(null);
        setEmptyFields([]);
        dispatch({ type: 'CREATE_WORKOUT', payload: res.data });
      }
    } catch (err) {
      console.error('ERROR: ', err);

      setEmptyFields(err?.response?.data?.emptyFields);
      setError(err?.response?.data?.error || err?.message || 'something went wrong in the server');
    }
  };

  return (
    <main>
      <form className="create">
        <h3>Add a new workout</h3>

        <label>Exercise Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes('title') ? 'error' : ''}
        />

        <label>Weight (in Kg)</label>
        <input
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          className={emptyFields.includes('weight') ? 'error' : ''}
        />

        <label>Reps</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={emptyFields.includes('reps') ? 'error' : ''}
        />

        <button onClick={handleAddDataClick}>Add</button>
        {error && <div className="error">Error: {error}</div>}
        <button onClick={handleClearFieldsClick}>Clear</button>
      </form>
    </main>
  );
};

export default NewWorkout;
