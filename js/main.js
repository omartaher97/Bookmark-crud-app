var siteName = document.getElementById("Site Name");
var siteUrl = document.getElementById("Site URL");

var sitesContianer = [];



console.log(validationUrl);
function addSite() {

   

    if (validationUrl()==true) {
        var site = {

            bookmarkName: siteName.value,
            websiteUrl: siteUrl.value,
    
        }
       
        sitesContianer.push(site);
        displaySite(sitesContianer);
    
        clearItems();
    
    }
    else{return alert("please put a valid url")}

   
}

function displaySite(arr) {
    var cartoona = ``;
    for (var i = 0; i < arr.length; i++) {

        cartoona += `      <tr>
        <td>${i+1}</td>
        <td>${arr[i].bookmarkName}</td>
        <td><button onclick="visitWeb(${i})" class="btn  btn-success btn-sm">Visit</button></td>
        <td><button onclick="deleteItem(${i}) " class="btn btn-danger btn-sm">delete</button></td>
    </tr>`

    }

    document.getElementById("tableBody").innerHTML=cartoona;

}

function clearItems() {

    siteName.value="";
    siteUrl.value="";
    
}

function deleteItem(siteIndex) {

    sitesContianer.splice(siteIndex,1);
    displaySite(sitesContianer);
    
}
function visitWeb(index) {

    window.open(sitesContianer[index].websiteUrl)
    
}



function validationUrl() {

  

    var regex= /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    if (regex.test(siteUrl.value)==true) {
        return true;

        
    }
    else{
        return false;
    }
    
}