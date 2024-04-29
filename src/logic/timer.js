import React, { useState, useEffect } from 'react';

let hour = 15
let minute = 5
let second = 20

// {Does a countdown timer for the Flash Sale}
// Returns a new object to state everytime a curTime value is changed
function useTimer(){
  let [curTime, setTime] = useState({
    hours: hour,
    minutes: minute,
    seconds: second
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (curTime.seconds > 0) {
        setTime(prevState => ({
          ...prevState,
          seconds: prevState.seconds -1
        }));
      } else {
        setTime(prevState => ({
          ...prevState,
          seconds: prevState.seconds + 60
        }));
        if (curTime.minutes > 0) {
          setTime(prevState => ({
            ...prevState,
            minutes: prevState.minutes - 1
          }));
        } else {
          setTime(prevState => ({
            ...prevState,
            minutes: prevState.minutes + 60
          }));
          if (curTime.hours > 0) {
            setTime(prevState => ({
              ...prevState,
              hours: prevState.hours -1
            }));
          }
        }
      }
      if (curTime.hours <= 0 && curTime.minutes <= 0 && curTime.seconds <= 0){
        setTime(prevState => ({
          ...prevState,
          hour: prevState.hours,
          minutes: prevState.minutes,
          seconds: prevState.seconds
        }));
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [curTime]);

  return { curTime };
}

  export default useTimer;