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
    const weatherInfo=await fetch("https://api.vvhan.com/api/weather").then(res=>res)
   
    console.log(weatherInfo)
  }

}

export default new PopupStore();
