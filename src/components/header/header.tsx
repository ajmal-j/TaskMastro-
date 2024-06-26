import "./header.css";

import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  let hours = time.getHours();
  const minutes = time.getMinutes();

  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const strHours = hours < 10 ? "0" + hours : hours.toString();
  const strMinutes = minutes < 10 ? "0" + minutes : minutes.toString();

  return (
    <div className='flex items-center p-2 pt-4 mb-5 '>
      <img className='w-[55px]' src='/logo.svg' alt='logo' />
      <span className='text-xl font-thin text-white'>Task Mastro</span>
      <p className='timeDiv'>
        <span className='hour'>{strHours}</span>
        <span className='minutes'>{strMinutes}</span>
        {" " + ampm}
      </p>
    </div>
  );
};

export default Header;
