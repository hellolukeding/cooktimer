import { observer } from "mobx-react";
import PopupStore from "~store/PopupStore";
import styles from "./index.module.scss";

const Weather:React.FC=()=>{
  const {city,date,week,type,high_temp,low_temp,tips} = PopupStore;
  console.log(city)
  return (
    <div className={styles.weather}>
      <ul>
        <li>{`今天是${date}，${week},天气：${type}`}</li>
        <li>{high_temp}</li>
        <li>{low_temp}</li>
        <li>{tips}</li>
      </ul>
    </div>
  )
}

export default observer(Weather);