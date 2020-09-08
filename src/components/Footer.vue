<template>
  <footer>
    <div id="hours">Store Hours: 7 days a week. 6am-10pm PST</div>
    <nav id="footerNav">
      <ul class="navlist">
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Directions</a>
        </li>
      </ul>
    </nav>

    <nav id="socialLinks">
      <ul class="navlist">
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
          </a>
        </li>
      </ul>
    </nav>

    <div id="copyright">
      <span>Copyright (c) 2019 Greater Goods, Inc.</span>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: $background-1;
  color: #303216;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
}

#hours {
  margin-top: 20px;
  font-size: 24px;
}

#socialLinks,
#footerNav {
  margin-top: 20px;
}

#footerNav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
}

#footerNav li {
  display: block;
  text-align: center;
  text-decoration: none;
  padding-right: 30px;
  padding-left: 30px;
  border-right: 1px solid #303216;
}

#footerNav li:first-child {
  padding-left: 0;
}

#footerNav li:last-child {
  border-right: none;
}

#footerNav li a {
  color: #303216;
}

#socialLinks ul {
  list-style-type: none;
  width: 50%;
  display: flex;
  flex-direction: row;
}

#socialLinks ul li a {
  display: block;
  color: #303216;
  text-align: center;
  text-decoration: none;
  padding-right: 30px;
  font-size: 44px;
}

#copyright {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
