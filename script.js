function f1(){
    name=document.getElementById("name").value;
    document.getElementById("display").innerHTML="happy birthday " + name;
    document.getElementById("image").src="https://m.media-amazon.com/images/I/81hwYi+mnpL._AC_UF894,1000_QL80_.jpg";
}

document.getElementById("click").addEventListener("click", f1)
