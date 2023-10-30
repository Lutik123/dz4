
import {FetchRequest} from "./Fetch.js";
import {Controller} from "./controller.js";
import {XMLHttpRequestRequest} from "./xml.js"
//import {controller} from "./controller.js";

const fetchController = new Controller(FetchRequest);


//fetchController.post('http://37.220.80.108/tasks', {name: "John",lastName: "Toretto"});
//fetchController.get('http://37.220.80.108/tasks/');
//fetchController.getByID('http://37.220.80.108/tasks/',130);
//fetchController.delete('http://37.220.80.108/tasks/',200);

const XMLHttpRequestRequestController = new Controller(XMLHttpRequestRequest)


//XMLHttpRequestRequestController.get('http://37.220.80.108/tasks')
//XMLHttpRequestRequestController.post('http://37.220.80.108/tasks', { name: "John", lastName: 'Dominick' })







