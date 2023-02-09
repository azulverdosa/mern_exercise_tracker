const WorkoutDetails = ({ workout }) => {
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
    </main>
  );
};

export default WorkoutDetails;
