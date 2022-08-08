import dayjs from "dayjs";
import { observer } from "mobx-react";
import { SVGProps, useEffect, useState } from "react";
import PopupStore from "~store/PopupStore";
import styles from "./index.module.scss";


export function IcBaselineLocationOn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"></path></svg>
  )
}

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
  return <div className={styles.timer}>
    <p>{time}</p>
    <div className={styles.index}>
      <IcBaselineLocationOn className={styles.icon} />
      <p>{PopupStore.city}</p>
    </div>
  </div>
}

export default observer(Timer);