<template>
  <div class="section section-navbars">
    <div class="container" id="menu-dropdown">
      <div class="row">
        <div class="col-md-6">
          <h4>Menu</h4>
          <navbar type="success">
            <nuxt-link class="navbar-brand" to="#">Menu</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>

            <template slot="navbar-menu">
              <li class="nav-item active">
                <nuxt-link class="nav-link" to="#">
                  <p>Link</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="#">
                  <p>Link</p>
                </nuxt-link>
              </li>
              <drop-down class="nav-item" title="Dropdown">
                <nuxt-link class="dropdown-item" to="#">Action</nuxt-link>
                <nuxt-link class="dropdown-item" to="#">Another action</nuxt-link>
                <nuxt-link class="dropdown-item" to="#">Something else here</nuxt-link>
              </drop-down>
            </template>
          </navbar>
        </div>
        <div class="col-md-6">
          <h4>Menu with Icons</h4>
          <navbar type="info" menu-classes="ml-auto">
            <nuxt-link class="navbar-brand" to="#">Icons</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
            <template slot="navbar-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="#pablo"><em class="now-ui-icons ui-1_send" aria-hidden="true"></em>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="#pablo"><em class="now-ui-icons users_single-02"
                    aria-hidden="true"></em>
                </nuxt-link>
              </li>
              <drop-down class="nav-item dropdown" icon="now-ui-icons ui-1_settings-gear-63">
                <a class="dropdown-header">Dropdown header</a>
                <nuxt-link class="dropdown-item" to="#">Action</nuxt-link>
                <nuxt-link class="dropdown-item" to="#">Another action</nuxt-link>
                <nuxt-link class="dropdown-item" to="#">Something else here</nuxt-link>
                <div class="divider"></div>
                <nuxt-link class="dropdown-item" to="#">Separated link</nuxt-link>
                <div class="divider"></div>
                <nuxt-link class="dropdown-item" to="#">One more separated link</nuxt-link>
              </drop-down>
            </template>
          </navbar>
        </div>
      </div>
      <h4>Navigation</h4>
    </div>
    <div id="navbar">
      <div class="navigation-example" style="background-image: url('img/bg7.jpg')">
        <!-- Navbar Primary  -->
        <navbar type="success" menu-classes="ml-auto">
          <div class="navbar-translate">
            <nuxt-link class="navbar-brand" to="#pablo">Primary color</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-primary"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>

          <template slot="navbar-menu">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="now-ui-icons objects_globe"></em>
                <p>Discover</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="now-ui-icons users_circle-08"></em>
                <p>Profile</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="now-ui-icons ui-1_settings-gear-63"></em>
                <p>Settings</p>
              </nuxt-link>
            </li>
          </template>
        </navbar>
        <!-- End Navbar Primary -->
        <!-- Navbar Info -->
        <navbar type="info" menu-classes="ml-auto">
          <div class="navbar-translate">
            <nuxt-link class="navbar-brand" to="#pablo">Info Color</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-info"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <template slot="navbar-menu">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="#pablo">
                <p>Discover</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <p>Profile</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <p>Settings</p>
              </nuxt-link>
            </li>
          </template>
        </navbar>
        <!-- End Navbar Info -->
        <!-- Navbar Success -->
        <navbar type="success" menu-classes="ml-auto">
          <div class="navbar-translate">
            <nuxt-link class="navbar-brand" to="#">Success Color</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-success"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <template slot="navbar-menu">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="now-ui-icons objects_globe"></em>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="now-ui-icons users_circle-08"></em>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="now-ui-icons ui-1_settings-gear-63"></em>
              </nuxt-link>
            </li>
          </template>
        </navbar>
        <!-- End Navbar Success -->
        <!-- Navbar Warning -->
        <navbar type="warning" menu-classes="ml-auto">
          <div class="navbar-translate">
            <nuxt-link class="navbar-brand" to="#">Success Color</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-success"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <template slot="navbar-menu">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-facebook-square"></em>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-twitter"></em>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-google-plus"></em>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-instagram"></em>
              </nuxt-link>
            </li>
          </template>
        </navbar>
        <!-- End Navbar Warning -->
        <!-- Navbar Danger -->
        <navbar type="danger" menu-classes="ml-auto">
          <div class="navbar-translate">
            <nuxt-link class="navbar-brand" to="#pablo">Danger Color</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-danger"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <template slot="navbar-menu">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-facebook-square"></em>
                <p>Share</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-twitter"></em>
                <p>Tweet</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-pinterest"></em>
                <p>Pin</p>
              </nuxt-link>
            </li>
          </template>
        </navbar>
        <!-- End Navbar Danger -->
        <!-- Navbar Transparent -->
        <navbar transparent menu-classes="ml-auto">
          <div class="navbar-translate">
            <nuxt-link class="navbar-brand" to="#pablo">Transparent</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <template slot="navbar-menu">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-facebook-square"></em>
                <p>Facebook</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-twitter"></em>
                <p>Twitter</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#pablo">
                <em class="fab fa-instagram"></em>
                <p>Instagram</p>
              </nuxt-link>
            </li>
          </template>
        </navbar>
        <!-- End Navbar Transparent-->
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar, DropDown } from "@/components";

export default {
  components: {
    Navbar,
    DropDown,
  },
};
</script>
<style>
</style>
