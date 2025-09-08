const categoryContainer = document.getElementById("catagory-container");

const plantNews = document.getElementById("card");

let bookmarks = [];

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
  categoryContainer.innerHTML = "";
  catagories.forEach((cat, index) => {
    categoryContainer.innerHTML += `
     <li id="${
       cat.id
     }" class="hover:bg-[#15803D] hover:text-white hover:rounded-[4px] hover:px-2.5 hover:py-2 mb-4 text-center ${
      index === 0 ? "active" : ""
    }">${cat.category_name}</li>

    `;
  });
  if (catagories.length > 0) loadPlantByCatagory(catagories[0].id);

  categoryContainer.addEventListener("click", (e) => {
    const clickedLi = e.target.closest("li");
    if (!clickedLi) return;

    const allLi = document.querySelectorAll("#catagory-container li");
    allLi.forEach((li) => {
      li.classList.remove("active");
    });
    showLoading();
    clickedLi.classList.add("active");

    loadPlantByCatagory(clickedLi.id);
  });
};

const loadPlantByCatagory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      plantDetails(data.plants);
    });
};

const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      plantDetails(data.data);
    });
};

const plantDetails = (plants) => {
  plantNews.innerHTML = "";
  plants.forEach((plant) => {
    plantNews.innerHTML += `
    <div id="${plant.id}" class="bg-white p-4 rounded-3xl">
            <div class=" flex justify-center max-h-52">
                <img class="rounded-2xl" src="${plant.image}" alt="" />
            </div>
          
            <h4 onclick="loadPlantDetails(${plant.id})" class="font-semibold text-[18px] mb-8 mt-5">${plant.name}</h4>
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
                onclick="addToCart('${plant.id}','${plant.name}','${plant.price}')" class="bg-[#15803D] text-white py-3 px-5 rounded-4xl text-[14px] font-medium w-full"
                >
                Add to Cart
                </button>
            </div>
    `;
  });
};

const showLoading = () => {
  plantNews.innerHTML = `
  <div class="bg-red-400 p-10">Loading....</div>
  `;
};

const loadPlantDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlantDetails(data));
};
const showPlantDetails = (details) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
   <div class="inter">
        <h2 class="text-[20px] font-semibold">${details.plants.name}</h2>
        <img class="mb-2.5 mt-2.5 max-h-80 w-full" src="${details.plants.image}" alt="">
        <p class="text-[14px] font-normal mb-2.5 "><span class="font-semibold">Catagory:</span> ${details.plants.category}</p>
        <p class="text-[14px] font-normal mb-2.5"><span class="font-semibold">Price: ৳</span>${details.plants.price}</p>
        <p class="text-[14px] font-normal "><span class="font-semibold">Description:</span> ${details.plants.description}</p>

      </div>
  `;
  document.getElementById("my_modal_1").showModal();
};

const addToCart = (id, name, price) => {
  bookmarks.push({ id, name, price: Number(price) });

  renderCart();
};
const renderCart = () => {
  const cartList = document.getElementById("adding-cart");
  cartList.innerHTML = "";
  let total = 0;
  bookmarks.forEach((item, index) => {
    total = total + item.price;

    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-[#F0FDF4]",
      "px-3",
      "py-2",
      "rounded-2xl",
      "mt-2"
    );

    div.innerHTML = `
      <div class="flex flex-col">
        <h2>${item.name}</h2>
        <h2>৳${item.price}</h2>
      </div>
      <i onclick="removeFromCart(${index})" class="fa-solid fa-xmark cursor-pointer"></i>
      `;

    cartList.appendChild(div);
  });
  document.getElementById("cart-total").innerText = `৳${total}`;
};

const removeFromCart = (index) => {
  bookmarks.splice(index, 1);
  renderCart();
};

loadCategory();
