/*let list = document.getElementById("listado");
 for (let pro of usuarios) {
  for (let item in pro) {
      if (item == "name") {
          list.innerHTML += "<h2>" + pro[item] + "</h2>";
      }
      if (item == "email") {
           list.innerHTML += "<h3>" + pro[item] + "</h3>";
      }
  }
}*/

let list = document.getElementById("listado");
let temp="";
for (let item of usuarios){
  /*temp=temp+"<div><h2>"+item["name"]+"</h2><h3>"+item["email"]+"</h3></div>"
  temp=temp= "<div>"
  +"<h2>"+item["name"]+"</h2> "
  +"<p>CORREO: <strong>"+item["email"]+"</strong></p>"
  +"<p>Empresa <strong>Company</strong></p>"
  +"<a href='#519595959'>telefono</a>"
  +"<a href='https://www.google.com'>Website</a>"
  +"</div>"*/

temp=temp+`<div>
                <h2>${ item.name }</h2> 
                <p>CORREO: <strong>${item.email}</strong></p>
                <p>Empresa <strong>${item.username}</strong></p>
                <a href="#${item.phone}">${item.phone}</a>
                <a href="https://${item.website}">${item.website}</a>

              </div>`


}
list.innerHTML=temp
