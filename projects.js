import { getData } from "./utils.js";

const url="https://raw.githubusercontent.com/wolfkinghun/projectjson/main/jsonfile"
export const projects=()=>{
    getData(url,renderProjects)
}
function renderProjects(data){
    console.log(data);
}