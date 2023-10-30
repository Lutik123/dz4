class FetchRequest {
   static get(url) {
     return fetch(url)
       .then(res => res.json())
       .then(data => {
         console.log(data);
         return data;
       })
       .catch(error => {
         console.error(error);
         throw error;
       });
   }
   static getByID(url,id) {
      return fetch(url+id)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          return data;
        })
        .catch(error => {
          console.error(error);
          throw error;
        });
    }
 
   static post(url, data) {
      
     return fetch(url, {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     })
       .then(res =>  res.json()) 
       .then(data => {
        console.log(data)
         return data;
       })
       .catch(error => {
         console.error(error);
         throw error;
       });
   }
   static delete(url, id) {
      return fetch(url+id, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          return data;
        })
        .catch(error => {
          console.error(error);
          throw error;
        });
    }

 }


export {FetchRequest}



















/*
static async gettusk () {
   const response = await fetch('http://37.220.80.108/tasks')
   .then(response => response.json())
   .then(data => console.log(data))
   return response
  } catch(error) {
   console.log(error)
  }
  */