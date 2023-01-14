document.querySelector("header").innerHTML =
`
<div class="flex-row space-between">
  <div class="header-title">Phuong Hai scientific</div>
  <div class="flex-row align-center">
    <i id="view-cart-icon" class="fa-solid fa-cart-shopping" style="font-size: 1.3em;"></i>
    |
    <a href="index.html">Home</a>
    |
    <a href="admin_manage.html">Admin</a>
    <button class="btn btn-white-text btn-transparent btn-sm" id="btn-signout">Sign Out</button> 
  </div>
</div>

`;

function viewCart() {
  try {
    window.open("html/order.html")
  }
  catch (error) {
    window.open("order.html")
  }
  

}

document.querySelector("#view-cart-icon").addEventListener("click", viewCart)