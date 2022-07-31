import styles from "./index.module.scss";

const HomePage:React.FC=()=>{


  return (
    <div className={styles.homepage}>
      <img className={styles.img} src="https://uploadimgtooss.oss-cn-hangzhou.aliyuncs.com/image/2bcb0164bb4739d9d253efbe5096427a-removebg-preview.png" alt=""/>
    </div>
  )
}

export default HomePage;