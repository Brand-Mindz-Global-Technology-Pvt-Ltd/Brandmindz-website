"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminPage } from "../../AdminClient";
import { enquiryApi, type Enquiry } from "@/lib/admin-api";
export default function EnquiryPage({ params }: { params: Promise<{ id: string }> }) {
 const router=useRouter(); const [item,setItem]=useState<Enquiry>(); const [id,setId]=useState(""); const [editing,setEditing]=useState(false);
 useEffect(()=>{void params.then(({id:value})=>{setId(value);return enquiryApi.byId(value).then(r=>setItem(r.data?.[0]))})},[params]);
 if(!item)return <AdminPage><p>Loading...</p></AdminPage>; const change=(key:string,value:string)=>setItem({...item,[key]:value}); const keys=["name","email","phone","company_name","designation","location","message"];
 return <AdminPage><div className="admin-header"><h1 className="admin-title">Enquiry Details</h1><button className="admin-btn" onClick={async()=>{if(editing)await enquiryApi.update({...item,enq_id:Number(id)});setEditing(!editing)}}>{editing?"Save":"Edit"}</button></div><div className="admin-card admin-form">{keys.map(key=><label key={key}>{key.replaceAll("_"," ")}{editing?(key==="message"?<textarea value={String(item[key]||"")} onChange={e=>change(key,e.target.value)}/>:<input value={String(item[key]||"")} onChange={e=>change(key,e.target.value)}/>):<p>{String(item[key]||"-")}</p>}</label>)}<button onClick={()=>router.back()}>Back</button></div></AdminPage>;
}
