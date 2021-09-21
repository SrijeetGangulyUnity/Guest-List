var     Name_of_guest_array = [];

function Submit() {
  var Guestname= document.getElementById("entername1").value
  Name_of_guest_array.push(Guestname);
  document.getElementById("displaynames").innerHTML = Name_of_guest_array;
  console.log(Name_of_guest_array);
  var length_of_the_array = Name_of_guest_array.length;
  console.log(length_of_the_array);
}

function Showlist() {
    var i = Name_of_guest_array.join("<br>");
    console.log(Name_of_guest_array);
    document.getElementById("shownames").innerHTML = i.toString();
}
function Sorting() {
    Name_of_guest_array.sort();
    var i = Name_of_guest_array.join("<br>")
    console.log(Name_of_guest_array);
    document.getElementById("sortednames").innerHTML = i.toString();
}

function Search() {
    var s=document.getElementById("Searchnames").value;
    var found=0;
    var j;
    for(j=0; j<Name_of_guest_array.length; j++) {
        if(s==Name_of_guest_array[j])
        found=found+1
    }
    document.getElementById("Searchnames").innerHTML = "Name Found "+found+"Time/s";
    console.log ("Found Name "+found+"Time/s")
}
