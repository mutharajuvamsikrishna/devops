import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const App = () => {
  // code use ncallback function
  function getData(callback) {
    setTimeout(() => {
      const chese = "get chese 1";
      console.log(chese);
      callback(chese)
      return chese;
    }, 200);
  }
 getData((callback=>{
  console.log(callback)
 }))
};
//use promise
 const delay=(ms)=>{
  return new Promise(resolve=>setTimeout(resolve,ms))
 }
const  getPizza=async()=>{
await delay(2000);
const pizza="get pizza"
console.log(pizza)
return                  pizza;
}
getPizza().then(result=>{
  console.log(result)
})
export default App;
