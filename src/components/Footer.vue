<template>
  <footer class="footer">
    <div id="hours">Store Hours: 7 days a week. 6am-10pm PST</div>
    <nav id="footer-nav">
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

    <nav id="social-links">
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
.footer {
  background: var(--background-1);
  color: #303216;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3em;

  #hours {
    margin-top: 1.2em;
    font-size: 24px;
  }

  #social-links,
  #footer-nav {
    margin-top: 1.2em;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      display: flex;
      width: 100%;
    }

    li {
      display: block;
      text-align: center;
      text-decoration: none;
      padding-right: 1.5em;
      padding-left: 1.5em;
      border-right: 1px solid var(--ci-3);

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        border-right: none;
      }

      a {
        color: var(--ci-3);
      }
    }
  }

  #social-links {
    ul {
      list-style-type: none;
      width: 100%;
      display: flex;
      flex-direction: row;

      li a {
        display: block;
        color: #303216;
        text-align: center;
        text-decoration: none;
        font-size: 44px;
      }
    }
  }

  #copyright {
    font-size: 14px;
    margin-top: 1.4em;
    margin-bottom: 2em;
  }
}
</style>
