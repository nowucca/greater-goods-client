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
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram"></i>
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

<style scoped>
footer {
  background: #ebf2e2;
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
  top: 100;
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

#socialLinks {
}

#socialLinks ul {
  list-style-type: none;
  top: 100;
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
