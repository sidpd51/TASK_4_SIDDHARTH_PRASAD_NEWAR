let originalWidth = window.innerWidth;

function checkWindowWidth() {
    if (window.innerWidth !== originalWidth) {
        location.reload();
    }
}
    // Listen for the window resize event
window.onresize = checkWindowWidth;


function productOne(){
    document.getElementById('product-heading').innerHTML="What is this Product?";
    document.getElementById('product-paragraph').innerHTML="This is product one paragraph. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.";
}
function productTwo(){
    document.getElementById('product-heading').innerHTML="Why to buy this Product?";
    document.getElementById('product-paragraph').innerHTML="This is product two paragraph. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.";
}


// Page was refreshed, focus on the search input
if(performance.navigation.type === 1) {
  document.getElementById("search").focus();
}


let isOpen = false;
let allOptions = document.querySelectorAll(".options")
let miniIcon = document.querySelectorAll(".sidebar-mini-icon")
let navOptions = document.querySelectorAll(".nav-option")
let brandInfo = document.querySelector(".brand-info")
let sidebarImg = document.querySelector(".sidebar-img")
let screenWidth = window.innerWidth;

// console.log(screenWidth)

if(screenWidth<550){
    miniIcon.forEach(option => {
        option.classList.remove('fa-xl')    
    })
}

function toggleSidebar(){
    if(!isOpen){
        if(screenWidth>850){
            document.getElementById("mySidenav").style.width = "230px";
            document.getElementById("main").style.marginLeft = "230px";
        } else {
            document.getElementById("mySidenav").style.width = "130px";
            document.getElementById("main").style.marginLeft = "130px";
        }
        allOptions.forEach(option => {
            option.classList.add('option-text');
        });
        navOptions.forEach(option => {
            option.classList.add('center-element');
        });

        sidebarImg.classList.add('sidebar-img-visible');

        brandInfo.classList.add('center-element');
        isOpen= true

    }else {
        if(screenWidth>850){
            document.getElementById("mySidenav").style.width = "100px";
            document.getElementById("main").style.marginLeft= "100px";
        } else {
            document.getElementById("mySidenav").style.width = "70px";
            document.getElementById("main").style.marginLeft= "70px";    
        }
        allOptions.forEach(option => {
            option.classList.remove('option-text');
        });
        navOptions.forEach(option => {
            option.classList.remove('center-element');
        });

        sidebarImg.classList.remove('sidebar-img-visible');

        brandInfo.classList.remove('center-element');
       
        isOpen=false
    }
}