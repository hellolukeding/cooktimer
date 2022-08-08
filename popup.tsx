import { useState } from "react"
import Timer from "~components/PopupComponents/Timer"
import Weather from "~components/PopupComponents/Weather"
import PopupStore from "~store/PopupStore"
import styles from "./index.module.scss"

function IndexPopup() {
  const [data, setData] = useState("")
  PopupStore.Init()
  return (
    <div  className={styles.popup}>
      
      <Timer/>
      <Weather/>
    </div>
  )
}

export default IndexPopup