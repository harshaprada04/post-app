import { createContext } from "react";
import { useState } from "react";

const Context = createContext({
  details: [],
  setDetails: (a:any)=>{},
  json:[],
  setJson:(a:any)=>{}
});

export function ContextProvider(props:any) {
  const [details, setDetails] = useState<any>([]);
  let [json, setJson]= useState([])

 
  const context = {
    details,
    setDetails,
    json,
    setJson,
  }
  return (
    <div>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </div>
  )
};

export default Context;
