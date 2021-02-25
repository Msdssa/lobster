import axios from "axios"
import {baseURL} from "../config";

export function getIndex(){
  console.log(`向${baseURL+"/index"}发送请求`);
  return new Promise(
    function(resolve,reject){
      axios.get("/index")
      .then(res=>{
        resolve(res.data)
      })
    }
  )
    
}
export function getDetails(lid){
  console.log(`向${baseURL+"/details"}发送请求,携带参数?lid=${lid}`)
  return new Promise(
    function(resolve,reject){
      axios.get("/details",{
        params:{ lid }
      }).then(res=>{
        resolve(res.data)
      })
    }
  )
}