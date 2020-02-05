import { Dispatcher } from "flux";

const dispatcher = new Dispatcher(); //it's a singleton so it's gonna be only one dispatcher by application
//stores will register with this dispatcher to say that they'd like to be informed when actions occur

export default dispatcher;
