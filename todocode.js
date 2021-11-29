let response =[];   //To store JSON content
var count=0;        //to count checked tasks

//Reload page while clicking icon and title in navbar
document.querySelector("#logo").addEventListener("click", load);
document.querySelector("#todo").addEventListener("click", load);

//Load data from API
window.addEventListener("load",load);

//Function to load
function load(){
  count=0;
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            response = JSON.parse(this.responseText);
            displaydata();
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}


//Display JSON contents in table
function displaydata(){
  var list ="";
  for(i=0;i<response.length;i++){
      list +=`<tr>
              <td><input id="check" type="checkbox" onchange="strike(this)" ${response[i].completed ? "checked disabled='true'" : ""}></td>
              
              <td ><span id="sli${i}" ${response[i].completed ? "class='strikeout'" : ""}>${response[i].title}</span> </td>
              <td><button class="deletebutton" onclick="del_task(this)"><i style="color:white;" class="far fa-trash-alt"></i></button></td>
              </tr>`
  }
  document.getElementById("data").innerHTML=list;
}

//To strike out checked tasks
function strike(cthis) {
  var i = cthis.parentNode.parentNode.rowIndex;
    cthis.parentNode.parentNode.style.textDecoration = cthis.checked? 'line-through':'none';
    cthis.parentNode.parentNode.style.color = cthis.checked? 'indigo':'blue';
    // cthis.parentNode.parentNode.style.backgroundColor = cthis.checked? 'cornflowerblue':'lightskyblue';
    if(cthis.checked==true){
      response[i].completed = true;
      console.log(response[i].completed);
      count++;
      if(count==5){
        setTimeout(() => { alert("Congrats. 5 Tasks have been Successfully Completed") }, 100);
      }
    }
    else{
      response[i].completed = false;
      console.log(response[i].completed);
      count--;
    }
    
   
}


//To delete tasks     
function del_task(dthis)
{
  var i = dthis.parentNode.parentNode.rowIndex;
  if(response[i].completed == true){
    count--;
  }
  response.splice(i,1);
  document.getElementById("mytable").deleteRow(i)
  
}




//To add new tasks
function submit(){
  var userId = 1;
  var id = response.length + 1;
  var title = document.getElementById("title");
  var completed = false;
  if(title.value.trim() !== ''){

  response.push({
    "userId":userId,
    "id":id,
    "title":title.value,
    "completed":completed
  });
  
  displaydata();
  title.value='';
}

}