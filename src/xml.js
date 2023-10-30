class XMLHttpRequestRequest {
    static get(url) {
      return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                      const data = JSON.parse(xhr.responseText);
                      console.log(data);
                      resolve(data);
                  } else {
                      console.error( xhr.statusText);
                      reject(xhr.statusText);
                  }
              }
          };
          
          xhr.send();
      });
    }
  
    static post(url, body) {
      return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', url, true);
          xhr.setRequestHeader('Content-Type', 'application/json');
          
          xhr.onreadystatechange = function() {
              if (xhr.status === 200) {
                  
                      const data = JSON.parse(xhr.responseText);
                      console.log(data);
                      return data;
               } else {
                      console.log( xhr.statusText);
                      
                  }
              
          };
          console.log(body)
          xhr.send(JSON.stringify(body));
      });
    }
  
  }

  export {XMLHttpRequestRequest}