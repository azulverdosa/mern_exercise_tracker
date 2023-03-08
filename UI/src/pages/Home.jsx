import { useEffect } from 'react';
import axios from 'axios';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import urlJoin from 'url-join';
import WorkoutDetails from '../components/WorkoutDetails';
import NewWorkoutForm from '../components/NewWorkoutForm';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    // (async () => {
    //   try {
    //     const res = await axios.get('/workouts');
    //     //note - urlJoin vs proxy - when and how to use

    //     if (res.status === 200 && res.data) {
    //       dispatch({ type: 'SET_WORKOUTS', payload: res.data });
    //     } else {
    //       throw res;
    //     }
    //   } catch (err) {
    //     console.log('error?', err);
    //     // this err could be for anything in the try, not just axios calls
    //   }
    // })();
    // IIFE - https://developer.mozilla.org/en-US/docs/Glossary/IIFE

    const fetchWorkous = async () => {
      try {
        const res = await axios.get('/workouts', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${user.token}`,
          },
        });
        //note - urlJoin vs proxy - when and how to use

        if (res.status === 200 && res.data) {
          dispatch({ type: 'SET_WORKOUTS', payload: res.data });
        } else {
          throw res;
        }
      } catch (err) {
        console.log('error?', err);
        // this err could be for anything in the try, not just axios calls
      }
    };
    if (user) {
      fetchWorkous();
    }
  }, [dispatch, user]);

  return (
    <main className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout, index) => (
            <WorkoutDetails key={workout._id} workout={workout}></WorkoutDetails>
          ))}
      </div>
      <NewWorkoutForm />
    </main>
  );
};

export default Home;
