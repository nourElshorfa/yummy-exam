
// SIDEBAR DETAILS //

let sidebarWidth = $("#sidebarContent").innerWidth()

$("#navsBar").click(function(){
  $("aside").animate({left:0}, 500)
  $("#navsBar").addClass("d-none")
  $("#x-mark").removeClass("d-none")
  $(".fade").fadeTo(600,1)
})

$("aside").animate({left:-sidebarWidth})


$("#x-mark").click(function(){
  $("aside").animate({left:-sidebarWidth}, 500)
  $("#navsBar").removeClass("d-none")
  $("#x-mark").addClass("d-none")
  $(".fade").fadeTo(600,0)
})

function closeSidebar(){
  $("aside").animate({left:-sidebarWidth}, 500)
  $("#navsBar").removeClass("d-none")
  $("#x-mark").addClass("d-none")
  $(".fade").fadeTo(600,0)
}

     // HOME FUNCTION //

let data = ``;
async function getHome(search ="search",letter ="s",value=""){
  let req = await fetch(`https://www.themealdb.com/api/json/v1/1/${search}.php?${letter}=${value}`)
  data = await req.json();
  console.log(data.meals)
  displayHome();
}

function displayHome(){
  let cartoona = '';
  
  for(let i = 0 ; i < data.meals.length ; i++){
    
    cartoona += `
    <div class="col-md-3">
      <div class="card position-relative">
        <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
        <div class="overlay">
          <p class="ms-2 fw-bold">${data.meals[i].strMeal}</p>
          </div>
          </div>
          </div>
          `
        }

        document.querySelector("#myData").innerHTML = cartoona;
      }
      getHome();




      // CATEGORY FUNCTION //


let categoryData = ``
async function getCategory(){
  let reqCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  categoryData = await reqCategory.json();
  console.log(categoryData.categories);
  displayCategory();
}


function displayCategory(){
  let temp = ``;

  for (let index = 0; index < categoryData.categories.length; index++) {
    temp += `<div class="col-md-3">
    <div class="meal position-relative">
      <img src="${categoryData.categories[index].strCategoryThumb}" class="w-100" alt="">
      <div class="layer text-center">
       <h3>${categoryData.categories[index].strCategory}</h3>
       <p>${categoryData.categories[index].strCategoryDescription}</p>
      </div>
    </div>
  </div>`
    
  }
  document.querySelector("#myData").innerHTML = temp ;
}

    // GRADIENT FUNCTION //

let gradient = ``;

async function getGradient(){
  let gradientReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  gradient = await gradientReq.json()
  console.log(gradient.meals);
  displayGradient();
}

function displayGradient(){
  let box = ``;

  for (let j = 0; j < 20 ; j++) {

    box += ` <div class="col-md-3 text-white">
    <div class="details text-center p-1 limit-text">
      <i class="fa-solid fa-drumstick-bite fs-1 my-3"></i>
      <h4>${gradient.meals[j].strIngredient}</h4>
      <p>${gradient.meals[j].strDescription}</p>
    </div>
  </div>`
  }
  document.querySelector("#myData").innerHTML = box ;
}



    // AREA FUNCTION //

let area = ``
async function getArea(){
  let reqArea = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  area = await reqArea.json()
  console.log(area.meals);
  displayArea()
}



function displayArea(){
  let temp = ``
  for (let i = 0; i < area.meals.length; i++) {
    
    temp += `<div class="col-md-3 text-center">
    <div class="country text-white m-2">
      <i class="fa-solid fa-house-laptop fs-1"></i>
      <h3>${area.meals[i].strArea}</h3>
    </div>
  </div>`
    
  }
  document.querySelector("#myData").innerHTML = temp ;
}

// ***************************** //

$("#area").click(function(){
  getArea();
  $("#searchForm").addClass("d-none");
  $("#contactusForm").addClass("d-none");
  closeSidebar();
})

$("#search").click(function(){
  document.querySelector("#myData").innerHTML = '' ;
  $("#searchForm").removeClass("d-none");
  $("#contactusForm").addClass("d-none");
  closeSidebar();
})

$("#contactus").click(function(){
  document.querySelector("#myData").innerHTML = '' ;
  $("#contactusForm").removeClass("d-none");
  closeSidebar();
})


$("#ingredient").click(function(){
  getGradient();
  $("#searchForm").addClass("d-none");
  $("#contactusForm").addClass("d-none");
  closeSidebar()
})

$("#catogries").click(function(){
  getCategory();
  $("#searchForm").addClass("d-none");
  $("#contactusForm").addClass("d-none");
  closeSidebar();
})


function showMeals(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
      cartoona += `
      <div class="col-md-3">
              <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                  <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                  <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                      <h3>${arr[i].strMeal}</h3>
                  </div>
              </div>
      </div>
      `
  }

  document.querySelector("#myData").innerHTML = cartoona
}

async function getMealDetails(mealID) {
  document.querySelector("#myData").innerHTML = ""



  let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
  respone = await respone.json();

}

async function getMealDetails(mealID) {
   
  document.querySelector("#myData").innerHTML = ""


  let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
  respone = await respone.json();

}