function tab(x){
    var tabs = document.querySelectorAll('.tab');
    var sheets = document.querySelectorAll('.sheet');
    var tabId = '#tab-'+x, sheetId = '#sheet-'+x;
    var tab = document.querySelector(tabId);
    var sheet = document.querySelector(sheetId);
    if(tab.style.transform=="translateY(16vh)"){
        // tab.style.backgroundColor="#353535"; 
        tab.classList.remove('active');
        sheet.classList.remove('active2');
        tab.style.transform="translateY(91vh)";
        sheet.style.transform="translateY(95vh)";
        document.querySelector('.centralText').style.display="block";
        return;
    }
    document.querySelector('.centralText').style.display="none";
    var i=0;
    tabs.forEach(element => {
        i++;
        if(element!=tab){
            // element.style.backgroundColor="#353535"; 
            element.style.transform="translateY(91vh)";
            element.classList.remove('active');
        }
        else{
            element.style.transform="translateY(16vh)";
            element.className +=' active';
            // element.style.backgroundColor="black";
        }
    });
    i=1;
    sheets.forEach(d=>{
        if(i!=x){
            d.style.transform="translateY(95vh)";
            d.classList.remove('active2');
        }else{
            d.className +=' active2';
            d.style.transform="translateY(20vh)";
        }
        i++;
    });

}

$(function(){
    var $age = $('#age');
    
    // Your birthdate
    var birthDate = new Date(2002, 8, 3); // Months are 0-indexed, so 8 is September
    
    // Current date
    var currentDate = new Date();
    
    // Calculate age
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    // Set age in the #age element
    $age.text(age);
});