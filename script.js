let tabcontentEl=document.getElementsByClassName('tab-content');
let tabLinksEl=document.getElementsByClassName('tab-links');



function opentab(tabname){
    for (tabLink of tabLinksEl){
        tabLink.classList.remove('active-link')
    }
    for (tabcontent of tabcontentEl){
         tabcontent.classList.remove('active-tab')
    }
     
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}


