<template>
  <header>
    <div id="leftHeader">
      <div id="logo">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/images/site/logo.png" alt="Greater Goods Grocers" />
        </router-link>
      </div>

      <div id="logoText">
        <a href="#">
          <span>Greater Goods Grocers</span>
        </a>
      </div>
    </div>

    <div id="midHeader">
      <HeaderSearchBar />
    </div>

    <div id="rightHeader">
      <HeaderCart />

      <div id="avatarArea">
        <a href="#">
          <img src="@/assets/images/site/avatar.png" alt="Cart Icon" />
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
import HeaderSearchBar from '@/components/HeaderSearchBar.vue'
import HeaderCart from '@/components/HeaderCart.vue'
export default {
  components: {
    HeaderSearchBar,
    HeaderCart
  }
}
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

header #rightHeader {
  width: 400px;
  display: flex;
  align-items: center;
}

#avatarArea {
  margin-right: 20px;
}

#accountArea {
  font-size: 16px;
  color: #303216;
}
</style>
