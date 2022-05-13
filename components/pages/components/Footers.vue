<template>
  <div class="section section-footers" data-background-color="gray">
    <div class="container">
      <div class="title">
        <h3>Footer Areas</h3>
      </div>
    </div>
    <div id="footer-areas">
      <!--     *********    SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <footer class="footer footer-white">
        <div class="container">
          <nuxt-link class="footer-brand" to="https:///www.creative-tim.com">Now Ui Kit PRO</nuxt-link>
          <ul class="pull-center">
            <li>
              <nuxt-link to="#pablo" class="nav-link"> Creative Tim </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo" class="nav-link"> About Us </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo" class="nav-link"> Blog </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo" class="nav-link"> Licenses </nuxt-link>
            </li>
          </ul>
          <ul class="social-buttons pull-right">
            <li>
              <nuxt-link to="/" target="_blank"
                class="btn btn-icon btn-neutral btn-twitter">
                <em class="fab fa-twitter"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" target="_blank"
                class="btn btn-icon btn-neutral btn-dribbble">
                <em class="fab fa-dribbble"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" target="_blank"
                class="btn btn-icon btn-neutral btn-google">
                <em class="fab fa-google-plus"></em>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </footer>
      <!--     *********   END SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <br />
      <br />
      <!--     *********    SIMPLE FOOTER     *********      -->
      <footer class="footer">
        <div class="container">
          <nav>
            <ul>
              <li>
                <nuxt-link to="https://www.creative-tim.com" class="nav-link">
                  Creative Tim
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="https:///presentation.creative-tim.com" class="nav-link">
                  About Us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="https:///blog.creative-tim.com" class="nav-link">
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="https://www.creative-tim.com/license" target="_blank" class="nav-link">
                  License
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="copyright">
            &copy;
            {{ year }}
            , Designed by
            <nuxt-link to="https:///www.invisionapp.com" target="_blank" class="copyright-link">Invision</nuxt-link>.
            Coded by
            <nuxt-link to="https://www.creative-tim.com" target="_blank" class="copyright-link">Creative Tim</nuxt-link>
            .
          </div>
        </div>
      </footer>
      <!--     *********   END SIMPLE FOOTER     *********      -->
      <br />
      <br />
      <!--     *********    BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <footer class="footer" data-background-color="black">
        <div class="container">
          <nuxt-link class="footer-brand" to="#pablo">Now Ui Kit PRO</nuxt-link>
          <ul class="pull-center">
            <li>
              <nuxt-link to="#pablo"> Blog </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Presentation </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Discover </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Payment </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Contact Us </nuxt-link>
            </li>
          </ul>
          <ul class="social-buttons pull-right">
            <li>
              <nuxt-link to="/" target="_blank" class="btn btn-icon btn-link btn-neutral">
                <em class="fab fa-twitter"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" target="_blank"
                class="btn btn-icon btn-neutral btn-link">
                <em class="fab fa-facebook-square"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" target="_blank"
                class="btn btn-icon btn-neutral btn-link">
                <em class="fab fa-instagram"></em>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </footer>
      <!--     *********   END BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <br />
      <br />
      <!--     *********    BIG FOOTER     *********      -->
      <footer class="footer footer-big footer-white">
        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-4">
                <h5>About Us</h5>
                <p>
                  Creative Tim is a startup that creates design tools that make
                  the web development process faster and easier.
                </p>
                <p>
                  We love the web and care deeply for how users interact with a
                  digital product. We power businesses and individuals to create
                  better looking web projects around the world.
                </p>
              </div>
              <div class="col-md-4">
                <h5>Social Feed</h5>
                <div class="social-feed">
                  <div class="feed-line">
                    <em class="fab fa-twitter"></em>
                    <p>
                      How to handle ethical disagreements with your clients.
                    </p>
                  </div>
                  <div class="feed-line">
                    <em class="fab fa-twitter"></em>
                    <p>
                      The tangible benefits of designing at 1x pixel density.
                    </p>
                  </div>
                  <div class="feed-line">
                    <em class="fab fa-facebook-square"></em>
                    <p>
                      A collection of 25 stunning sites that you can use for
                      inspiration.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <h5>Instagram Feed</h5>
                <div class="gallery-feed">
                  <img v-lazy="'img/olivia.jpg'" class="img img-raised rounded" alt="" />
                  <img v-lazy="'img/james.jpg'" class="img img-raised rounded" alt="" />
                  <img v-lazy="'img/michael.jpg'" class="img img-raised rounded" alt="" />
                  <img v-lazy="'img/emily.jpg'" class="img img-raised rounded" alt="" />
                  <img v-lazy="'img/marie.jpg'" class="img img-raised rounded" alt="" />
                  <img v-lazy="'img/usher.jpg'" class="img img-raised rounded" alt="" />
                  <img v-lazy="'img/mike.jpg'" class="img img-raised rounded" alt="" />
                  <img v-lazy="'img/julie.jpg'" class="img img-raised rounded" alt="" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <ul class="pull-left">
            <li>
              <nuxt-link to="#pablo"> Blog </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Presentation </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Discover </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Payment </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo"> Contact Us </nuxt-link>
            </li>
          </ul>
          <div class="copyright pull-right">
            Copyright &copy;
            {{ year }}
            Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!--     *********   END BIG FOOTER     *********      -->
      <br />
      <br />
      <!--     *********    BIG BlACK FOOTER     *********      -->
      <footer class="footer footer-big" data-background-color="black">
        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-2">
                <h5>About Us</h5>
                <ul class="links-vertical">
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> Blog </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> About Us </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> Presentation </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> Contact Us </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>Market</h5>
                <ul class="links-vertical">
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> Sales FAQ </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> How to Register </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> Sell Goods </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> Receive Payment </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted">
                      Transactions Issues
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="text-muted"> Affiliates Program </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h5>Social Feed</h5>
                <div class="social-feed">
                  <div class="feed-line">
                    <em class="fab fa-twitter"></em>
                    <p>
                      How to handle ethical disagreements with your clients.
                    </p>
                  </div>
                  <div class="feed-line">
                    <em class="fab fa-twitter"></em>
                    <p>
                      The tangible benefits of designing at 1x pixel density.
                    </p>
                  </div>
                  <div class="feed-line">
                    <em class="fab fa-facebook-square"></em>
                    <p>
                      A collection of 25 stunning sites that you can use for
                      inspiration.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <h5>Follow Us</h5>
                <ul class="social-buttons">
                  <li>
                    <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-twitter btn-round">
                      <em class="fab fa-twitter"></em>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-facebook btn-round">
                      <em class="fab fa-facebook-square"></em>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-dribbble btn-round">
                      <em class="fab fa-dribbble"></em>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-google btn-round">
                      <em class="fab fa-google-plus"></em>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-instagram btn-round">
                      <em class="fab fa-instagram"></em>
                    </nuxt-link>
                  </li>
                </ul>
                <h5>
                  <small>Numbers Don't Lie</small>
                </h5>
                <h5>
                  14.521
                  <small class="text-muted">Freelancers</small>
                </h5>
                <h5>
                  1.423.183
                  <small class="text-muted">Transactions</small>
                </h5>
              </div>
            </div>
          </div>
          <hr />
          <div class="copyright">
            Copyright &copy;
            {{ year }}
            Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!--     *********   END BIG WHITE FOOTER     *********      -->
      <br />
      <br />
      <!--     *********    BIG WHITE FOOTER V2     *********      -->
      <footer class="footer footer-white footer-big">
        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-3">
                <nuxt-link to="#pablo">
                  <h5>Now Ui Kit PRO</h5>
                </nuxt-link>
                <p>
                  Probably the best UI Kit in the world! We know you've been
                  waiting for it, so don't be shy!
                </p>
              </div>
              <div class="col-md-2">
                <h5>About</h5>
                <ul class="links-vertical">
                  <li>
                    <nuxt-link to="#pablo"> Blog </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> About Us </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> Presentation </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> Contact Us </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>Market</h5>
                <ul class="links-vertical">
                  <li>
                    <nuxt-link to="#pablo"> Sales FAQ </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> How to Register </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> Sell Goods </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> Receive Payment </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> Transactions Issues </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>Legal</h5>
                <ul class="links-vertical">
                  <li>
                    <nuxt-link to="#pablo"> Transactions FAQ </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> Terms & Conditions </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pablo"> Licenses </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
                <form class="form form-newsletter" method="" action="">
                  <fg-input placeholder="Your Email..."> </fg-input>
                  <n-button round icon type="success">
                    <em class="now-ui-icons ui-1_email-85"></em>
                  </n-button>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <ul class="social-buttons">
            <li>
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-twitter btn-lg">
                <em class="fab fa-twitter"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-facebook btn-lg">
                <em class="fab fa-facebook-square"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-dribbble btn-lg">
                <em class="fab fa-dribbble"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-google btn-lg">
                <em class="fab fa-google-plus"></em>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-youtube btn-lg">
                <em class="fab fa-youtube"></em>
              </nuxt-link>
            </li>
          </ul>
          <div class="copyright pull-center">
            Copyright &copy;
            {{ year }}
            Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!--     *********   END BIG WHITE FOOTER v2     *********      -->
    </div>
  </div>
</template>
<script>
import { FormGroupInput, Button } from "@/components";
export default {
  components: {
    [FormGroupInput.name]: FormGroupInput,
    [Button.name]: Button,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
