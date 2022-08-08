import { makeAutoObservable } from "mobx";

class PopupStore{
  public city="";
  public date="";
  public week="";
  public type="";
  public high_temp="";
  public low_temp="";
  public tips=""

  constructor(){
    makeAutoObservable(this);

  }

  public async Init(){
    const weatherInfo=await fetch("https://api.vvhan.com/api/weather").then(res=>res.json())
    this.city=weatherInfo.city;
    const info=weatherInfo.info;
    this.date=info.date;
    this.high_temp=info.high;
    this.low_temp=info.low;
    this.type=info.type;
    this.week=info.week;
    this.tips=info.tip;
   
  }

}

export default new PopupStore();
