<template>
  <header>
    <div id="leftHeader">
      <div id="logo">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/site/logo.png" alt="Greater Goods Grocers" />
        </router-link>
      </div>

      <div id="logoText">
        <a href="#">
          <span>Greater Goods Grocers</span>
        </a>
      </div>
    </div>

    <div id="midHeader">
      <form id="searchForm" action="/category">
        <input id="searchBar" type="text" />
        <img
          id="searchIcon"
          src="@/assets/site/search-icon.png"
          alt="Search Icon"
        />
      </form>
    </div>

    <div id="rightHeader">
      <div id="cartButton">
        <router-link :to="{ name: 'cart' }">
          <img src="@/assets/site/cart-icon.png" alt="Cart Icon" />
        </router-link>
        <div id="cartCount">0</div>
      </div>

      <div id="avatarArea">
        <a href="#">
          <img src="@/assets/site/avatar.png" alt="Cart Icon" />
        </a>
      </div>

      <div id="accountArea">
        <div id="welcomeMessage">
          <span>Welcome, Guest</span>
        </div>
        <div id="signinLinks">Sign In | Register</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  background: #ebf2e2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header #leftHeader {
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
}

header #logo img {
  width: 60px;
  margin-left: 40px;
  margin-right: 10px;
}

header #logoText span {
  color: #303216;
  font-size: 24px;
}

header #searchForm {
  display: flex;
  align-items: center;
}

input#searchBar {
  border: 3px solid #303216;
  height: 45px;
  color: #303216;
  font-weight: lighter;
  font-size: 18px;
  min-width: 300px;
}

img#searchIcon {
  height: 47px;
  border: 3px solid #303216;
  border-left: none;
}

header #rightHeader {
  width: 400px;
  display: flex;
  align-items: center;
}

#cartButton {
  min-width: 200px;
}
#cartButton img {
  width: 80px;
}

#cartButton {
  position: relative;
}

#cartCount {
  position: absolute;
  top: 12px;
  left: 38px;
  font-weight: bold;
  font-size: larger;
  color: #fafafa;
}

#avatarArea {
  margin-right: 20px;
}

#accountArea {
  font-size: 16px;
  color: #303216;
}

#headerNav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #5d9756;
  display: flex;

  top: 100px;
  width: 100%;
}

li:last-child {
  border-right: none;
}
#headerNav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 12px 16px;
  text-decoration: none;
}

#headerNav li a:hover {
  background-color: #487643;
}

#headerNav .active {
  background-color: #71b869;
  border-bottom: 5px solid #4a90e2;
}
</style>
