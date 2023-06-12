

export const getTaskByListId = async (id,KEY) => {
  if(id == undefined) return 
  const response = await fetch(`https://api-todos-prueba.onrender.com/api/v1/list/${id}/tasks`,{
    method: "GET",
    headers:{
      "content-type": "application/json",
      "authorization": KEY,
      "id": id
    }
  })

  try{
    const data = await response.json();
    return data.sort((a,b) => a.id - b.id);
    
  }catch(error){
    return []
  }
  
}


export const addNewTaskByListId = async (id, data,KEY) => {
  const response = await fetch(`https://api-todos-prueba.onrender.com/api/v1/list/${id}/tasks`,{
    method: "POST",
    headers:{
      "content-type": "application/json",
      "authorization": KEY,
      "id": id
    },
    body: JSON.stringify(data)
  })

  const dataResponse = await response.json();
  return dataResponse;
}

export const deleteTaskById = async (listId,taskId,KEY) => {
  const response = await fetch(`https://api-todos-prueba.onrender.com/api/v1/list/${listId}/tasks/${taskId}`,{
    method: "DELETE",
    headers:{
      "content-type": "application/json",
      "authorization": KEY,
    }
  })

  const dataResponse = await response.json();
  return dataResponse;
}

export const editTaskById = async (listId,taskId, data,KEY) => {
  if(listId == undefined || taskId == undefined) return console.log("no se puede editar");
  const response = await fetch(`https://api-todos-prueba.onrender.com/api/v1/list/${listId}/tasks/${taskId}`,{
    method: "PATCH",
    headers:{
      "content-type": "application/json",
      "authorization": KEY,
      
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