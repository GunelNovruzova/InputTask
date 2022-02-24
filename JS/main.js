
var ul=document.getElementById('list')


function Add(){
    var inp=document.getElementById('inp').value
    if(inp.value!=0){
        var li =document.createElement('li');
        li.innerHTML=inp;
        ul.append(li);
        var span=document.createElement('span')
        var x=document.createTextNode('X')

        span.onclick =function Delete(){
            li.remove()
        }
span.appendChild(x)
li.appendChild(span)
document.getElementById('list').appendChild(li);
    }
    else{
        alert("error")
    }
}
