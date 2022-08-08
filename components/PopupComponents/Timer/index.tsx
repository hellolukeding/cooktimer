import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Timer: React.FC = () => {
  const [time, setTime] = useState<string>(dayjs().format("HH:mm:ss"))
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div className={styles.timer}>{time}</div>
}

export default Timer;