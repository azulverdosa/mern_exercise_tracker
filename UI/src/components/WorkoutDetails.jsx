import axios from 'axios';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  if (!user) {
    return;
  }

  const handleDeleteClick = async () => {
    const res = await axios.delete('/workouts/' + workout._id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${user.token}`,
      },
    });

    if (res.status === 200 && res.data) {
      dispatch({ type: 'DELETE_WORKOUT', payload: res.data });
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
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="fa-solid fa-trash" onClick={handleDeleteClick}></span>
      {/* button?? */}
    </main>
  );
};

export default WorkoutDetails;
