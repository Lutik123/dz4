class Controller {
    constructor(request) {
      this.request = request;
    }
  
    get(url) {
      return this.request.get(url);
    }
    getByID(url,id) {
        return this.request.getByID(url,id);
      }
  
    post(url, body) {
      return this.request.post(url, body);
    }
    delete(url, id) {
        return this.request.delete(url, id);
      }
    // Методы для других типов запросов (PUT, DELETE и т.д.)
  }

  export {Controller}