import axios from 'axios';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleDeleteClick = async () => {
    const res = await axios.delete('/workouts/' + workout._id);

    if (res.status === 200 && res.data) {
      dispatch({ type: 'DELETE_WORKOUTS', payload: res.data });
      console.log('Workout Deleted');
    }
  };

  return (
    <main className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Weight(kg): </strong>
        {workout.weight}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDeleteClick}>delete</span>
    </main>
  );
};

export default WorkoutDetails;
