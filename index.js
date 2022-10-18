const http=require("http");
const data={
  Name:"Deepak",
  Age:"25",
  Email:"17btcse063@shiats.edu.in",
  City:"Allhabad",
  State:"Uttar pradesh",
}
const jsonData=JSON.stringify(data);

const server=http.createServer((request,response)=> {
                              response.write=> (`<h1>Hello! Johan I am fullstack Devloper</h1>`);
  response.write(jsonData);
  response.end();
})

server.listen(9000,()=>{
  console.log(
    "Connected to port 9000");
})
