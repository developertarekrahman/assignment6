const categoryContainer = document.getElementById("catagory-container");

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
     <li id="${cat.id}" class="hover:bg-[#15803D] hover:text-white hover:rounded-[4px] hover:px-2.5 hover:py-2 mb-4">${cat.category_name}</li>

    `;
  });

  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("active");
    });

    if (e.target.localName === "li") {
      //   console.log(e.target.id);
      //   showLoading();
      e.target.classList.add("active");
      //   loadNewsByCategory(e.target.id);
    }
  });
};

loadCategory();
