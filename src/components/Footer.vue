<template>
  <footer class="footer">
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
@import 'src/styles/components/Footer';
</style>
