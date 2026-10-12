// let cartCount = 0;



// function addToCart() {

//     cartCount++;

//     document.getElementById("cartCount").innerText = cartCount;

//     alert("Product added to cart!");
// }



// function searchProducts() {

//     const searchValue =
//         document.getElementById("searchInput")
//         .value
//         .toLowerCase();

//     const products =
//         document.querySelectorAll(".product");

//     products.forEach(product => {

//         const name =
//             product
//             .getAttribute("data-name")
//             .toLowerCase();

//         if (name.includes(searchValue)) {

//             product.style.display = "block";

//         } else {

//             product.style.display = "none";

//         }

//     });
// }



// document
// .getElementById("searchInput")
// .addEventListener("keyup", function(event) {

//     if (event.key === "Enter") {
//         searchProducts();
//     }

// });


// function scrollTopPage() {

//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });

// }