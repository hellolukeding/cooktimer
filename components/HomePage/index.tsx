import styles from "./index.module.scss";

const Header: React.FC = () => {


  return (
    
      <div className={styles.header}>
        <img src="https://typora-noteimage-lukeding.oss-cn-hangzhou.aliyuncs.com/imgage/123-removebg-preview.png" alt="" />
        <div className={styles.dec}>
          <h3>cooktimer</h3>
          <h5>To take time efficiently</h5>
        </div>
      </div>
    
  )
}

export default Header;