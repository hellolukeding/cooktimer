import { useEffect, useState } from "react";
import Content from "~components/Content";
import Header from "~components/HomePage";
import styles from "./index.module.scss";


const IndexOption: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<{ desc: string, url: string }>({ desc: "", url: "" })
  useEffect(() => {
    fetch("https://res.abeim.cn/api-bing_img?export=json&idx=0").then(res => res.json()).then(result => {
      if (result.code === 200) {
        setImgSrc({
          desc: result.img_copy,
          url: result.img_url
        })
      }
    })
      
  },[])

  return (
    <div className={styles.option} style={{ backgroundImage: `url(${imgSrc.url})` }}>
      <Header />
      <Content/>
      <p> {imgSrc.desc}</p>
    </div>
  )
}

export default IndexOption;