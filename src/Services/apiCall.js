const apiCall = async(url,method,data)=>{

    const response=await fetch(`http://localhost:5016${url}`,{
        method,
        headers:{
            "content-type":"application/json"
        },
        body:data?JSON.stringify(data):undefined


    })
  return response.json ();
}

export default apiCall;