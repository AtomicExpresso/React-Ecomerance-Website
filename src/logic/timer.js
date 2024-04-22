import React, { useState, useEffect } from 'react';

let hours = 15
let minutes = 10
let seconds = 20

// Does a countdown timer for the Flash Sale
function useTimer(){
  let [curHour, setHour] = useState(hours);
  let [curMinute, setMinute] = useState(minutes);
  let [curSecond, setSecond] = useState(seconds);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (curSecond > 0) {
        setSecond(curSecond - 1);
      } else {
        setSecond(seconds = 60);
        if (curMinute > 0) {
          setMinute(curMinute - 1);
        } else {
          setMinute(minutes = 60);
          if (curHour > 0) {
            setHour(curHour - 1);
          }
        }
      }
      if (curHour <= 0 && curMinute <= 0 && curSecond <= 0){
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [curHour, curMinute, curSecond]);

  return { curHour, curMinute, curSecond };
}

  export default useTimer;