import { useState } from "react";
import styles from "./styles.module.css";
const useDate = () => {
  const date = new Date();
  const getDay = () => date.getDay();
  const getMonth = () => date.getMonth();
  const format = () => date.toString();
  const addDay = (numberOfDays) => {
        //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
    console.log(date.getDate())
    date.setDate(date.getDate() + numberOfDays)
    return date.toUTCString().slice(5, 11)
  };
  const addMonth = (numberOfMonths) => {
    //N.B if month after adding is greater than 11, date returned should be a new year
    console.log(date.getMonth())
    date.setMonth(date.getMonth()+ numberOfMonths)
    return date.toUTCString().slice(12, 17)
  };

  return { date, getDay, getMonth, format, addDay, addMonth };
};

export default function App() {
  const { date, getDay, getMonth, format, addDay, addMonth } = useDate();
  const [newDate, setNewDate] = useState();
  const [newMonth, setNewMonth] = useState();
  const [calctDate, setCalctDate] = useState();
  const [calctMonth, setCalctMonth] = useState();


  const handleNewDate = (newDate) => {
    const calDate = addDay(newDate);
    setCalctDate(calDate);
  };

  const handleNewMonth = (newMonth) => {
      const calMonth = addMonth(newMonth);
      setCalctMonth(calMonth)
  };
 

  // useEffect(() => {
  //   console.log('Input changed');
  // }, [input]);


  return (
    <div>
      <br />
      Date: {Date()}
      <br />
      Day: {getDay()}
      <br />
      Month: {getMonth()}
      <br />
      Chnage in Month: {calctDate}
      <br/>
      Change in Year: {calctMonth}
      <br />
      <input type="text" onChange={(e)=> setNewDate(e.target.value)} />
      <button
        onClick={() => {
          handleNewDate(newDate);
        }}
      >
        Add Number of Days in a Month
      </button>
      <br/>
      <input type="text" onChange={(e)=> setNewMonth(e.target.value)} />
      <button
        onClick={() => {
          handleNewMonth(newMonth);
        }}
      >
        Add Number of Month in a Year
      </button>
    </div>
  );
}
