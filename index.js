const categoryContainer = document.getElementById("catagory-container");

const plantNews = document.getElementById("card");

let bookmarks = [];
const cartList = document.getElementById("adding-cart");

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const catagories = data.categories;
      //   console.log(catagories);
      showCategory(catagories);
    })

    .catch((err) => {
      console.log(err);
    });
};
const showCategory = (catagories) => {
  catagories.forEach((cat) => {
    categoryContainer.innerHTML += `
     <li id="${cat.id}" class="hover:bg-[#15803D] hover:text-white hover:rounded-[4px] hover:px-2.5 hover:py-2 mb-4 text-center">${cat.category_name}</li>

    `;
  });

  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("active");
    });

    if (e.target.localName === "li") {
      e.target.classList.add("active");

      loadPlantByCatagory(e.target.id);
    }
  });
};

const loadPlantByCatagory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      plantDetails(data.plants);
    });
};

const plantDetails = (plants) => {
  plantNews.innerHTML = "";
  plants.forEach((plant) => {
    // console.log(plant);
    plantNews.innerHTML += `
    <div id="${plant.id}" class="bg-white p-4 rounded-3xl">
            <div class=" flex justify-center max-h-52">
                <img class="rounded-2xl" src="${plant.image}" alt="" />
            </div>
          
            <h4 class="font-semibold text-[14px] mb-8 mt-3">${plant.name}</h4>
            <div class="max-h-24 mb-16">
            <p class="font-normal text-[12px] text-[#1F2937] mb-5">
              ${plant.description}
            </p>
            </div>
            
            <div class="flex justify-between items-center mb-3">
                 <button
                class="bg-[#F0FDF4] text-[#15803D] py-3 px-5 rounded-4xl text-[14px] font-medium "
                >
                Get Involved
                </button>
                <p class="text-[14px] font-semibold text-[#1F2937]">$<span>${plant.price}</span></p>
                
            </div>
             <button
                class="bg-[#15803D] text-white py-3 px-5 rounded-4xl text-[14px] font-medium w-full"
                >
                Add to Cart
                </button>
            </div>
    `;
  });
};

loadCategory();
loadPlantByCatagory(1);
