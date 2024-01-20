import { useEffect, useState } from "react";

/*
This components CSS: 
.clock{
    display: flex;
    justify-content: center;
    padding-top: 200px;
    font-size: 40px;
}
*/

const DigitalClock = ({}) => {

    const [currentDate, setCurrentDate] = useState(new Date())
    useEffect(() => {
        setInterval((() => {
            setCurrentDate(new Date())
        }), 1000)
    }, [])
    
  return (
    <div className="clock">
      <div>
        <p>{(currentDate.getHours() % 12 < 10) && 0}{currentDate.getHours() % 12}:</p>
      </div>
      <div>
        <p>{(currentDate.getMinutes() < 10) && 0}{currentDate.getMinutes()}:</p>
      </div>
      <div>
        <p>{(currentDate.getSeconds() < 10) && 0}{currentDate.getSeconds()}</p>
      </div>
    </div>
  );
};

export default DigitalClock;

