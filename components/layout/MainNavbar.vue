<template>
  <navbar
    position="fixed"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{}">
      <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
        BlitzBudget Blog
      </nuxt-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="300"
        trigger="hover"
      >
        <div class="popover-body">Designed by BlitzBudget.</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        title="Categories"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/personal-finance">
          <em class="now-ui-icons design_image"></em> Personal Finance
        </nav-link>
        <nav-link to="/psychology">
          <em class="now-ui-icons business_chart-pie-36"></em> Psychology
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link btn btn-default btn-neutral"
          href="https://www.blitzbudget.com/signin"
          target="_blank"
        >
          <p>Sign in</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped>
</style>
