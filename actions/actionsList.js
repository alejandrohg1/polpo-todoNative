
export const getListByUserId = async (id,KEY) => {

  const response = await fetch("https://api-todos-prueba.onrender.com/api/v1/list/",{
    method: "GET",
    headers:{
      "content-type": "application/json",
      "authorization": KEY
    }
  })
  const data = await response.json();
  return data.filter((item)=>item.userId == id).sort((a,b) => b.id - a.id);
}

export const addNewList = async (data,KEY) => {
  const response = await fetch("https://api-todos-prueba.onrender.com/api/v1/list/",{
    method: "POST",
    headers:{
      "content-type": "application/json",
      "authorization": KEY
    },
    body: JSON.stringify(data)

  })
  const dataResponse = await response.json();
  return dataResponse;
}


export const getListById = async (id,KEY) => {
  if(!id && !KEY) return [];
  const response = await fetch("https://api-todos-prueba.onrender.com/api/v1/list/",{
    method: "GET",
    headers:{
      "content-type": "application/json",
      "authorization": KEY
    }
  })

  try{
    const data = await response.json();
    const findList = (data.find(item => item.id == id))
    return findList;
    
  }catch(error){
    console.log(error)
  }
  
}


export const editListById = async (id, data,KEY) => {
  const response = await fetch(`https://api-todos-prueba.onrender.com/api/v1/list/${id}`,{
    method: "PATCH",
    headers:{
      "content-type": "application/json",
      "authorization": KEY,
      "id": id
    },
    body: JSON.stringify(data)
  })

  try{
    const dataResponse = await response.json();
    return dataResponse;
    }catch(error){
      console.log(error)
    }
  }
  


export const deleteListById = async (id,KEY) => {
  const response = await fetch(`https://api-todos-prueba.onrender.com/api/v1/list/${id}`,{
    method: "DELETE",
    headers:{
      "content-type": "application/json",
      "id": id,
      "authorization": KEY

    }
  })

  const dataResponse = await response.json();
  return dataResponse;
}