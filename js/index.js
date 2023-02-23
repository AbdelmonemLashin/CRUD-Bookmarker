var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var webSites = [];

if (localStorage.getItem("siteKey") != null) {
  webSites = JSON.parse(localStorage.getItem("siteKey"));
  disply();
} else {
  webSites = [];
}


function addSite() {
  var site = {
    id: Date.now(),
    name: siteName.value,
    url: siteUrl.value
  };

  webSites.push(site);
  disply();
  localStorage.setItem("siteKey", JSON.stringify(webSites));
  clear();
} 


function disply() {
  var trs = "";

  for (var i = 0; i < webSites.length; i++)
  {
    trs += `<tr>

<td class="td" style="width: 10%";>${webSites[i].id}</td>
<td class="td">${webSites[i].name}</td>
              
<td class="td">${webSites[i].url}</td>
<td onclick="visiteSite(${webSites[i].id})" class="td"><button class="btn btn-info w-50">Visit</button></td>
<td onclick="deleteSite(${webSites[i].id})" class="td" ><button class="btn btn-danger w-50">Delete</button></td>

</tr>`;
  }
  document.getElementById("tableBody").innerHTML = trs;
}

function deleteSite(idweb){
for(i=0;i<webSites.length;i++)
{
  if(webSites[i].id==idweb)
  {

    webSites.splice(i, 1);

    localStorage.setItem("siteKey", JSON.stringify(webSites));
    disply();
  }
}
}


function visiteSite(idweb){
  for(i=0;i<webSites.length;i++)
  {
    if(webSites[i].id==idweb)
    {

 
  
var newUrl=webSites[i].url
window.location.replace("https://"+newUrl);


  }
}
}


   
function clear() {
  document.getElementById("siteName").value = "";
  document.getElementById("siteUrl").value = "";
}


