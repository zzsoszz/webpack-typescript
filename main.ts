import { sayHello } from "./greet";
import * as $  from "jquery";
import * as SystemJS from "systemjs";


$(document).ready(function(){
    $("#btn").click(function(){
          alert(sayHello("TypeScript"));
    });
});
