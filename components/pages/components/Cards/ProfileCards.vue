<template>
  <!--     *********    PROFILE CARDS     *********      -->
  <div class="cards">
    <div class="container">
      <div class="title">
        <h3>
          <small>Profile Cards</small>
        </h3>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <img slot="image" class="img rounded" src="img/julie.jpg" />
            <nuxt-link to="#pablo">
              <h4 class="card-title">Julie Andrew</h4>
            </nuxt-link>
            <h6 class="card-category text-info">Web Designer</h6>
            <div class="card-footer">
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-lg btn-twitter"><em
                  class="fab fa-twitter"></em>
              </nuxt-link>
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-lg btn-dribbble"><em
                  class="fab fa-dribbble"></em></nuxt-link>
              <nuxt-link to="#pablo" class="btn btn-icon btn-neutral btn-lg btn-instagram"><em
                  class="fab fa-instagram"></em></nuxt-link>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <img slot="avatar" class="img img-raised" src="img/mike.jpg" />
            <div class="card-body">
              <h4 class="card-title">Alec Mike</h4>
              <h6 class="category text-gray">Designer</h6>
              <p class="card-description">
                One of the co-founders. Alec drives the technical strategy of
                the platform, customer support and brand.
              </p>
              <div class="card-footer">
                <nuxt-link to="#pablo" class="btn btn-icon btn-twitter btn-round"><em class="fab fa-twitter"></em>
                </nuxt-link>
                <nuxt-link to="#pablo" class="btn btn-icon btn-facebook btn-round"><em
                    class="fab fa-facebook-square"></em>
                </nuxt-link>
                <nuxt-link to="#pablo" class="btn btn-icon btn-google btn-round"><em class="fab fa-google"></em>
                </nuxt-link>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile" color="black">
            <img slot="avatar" class="img img-raised" src="img/james.jpg" />
            <div>
              <h6 class="card-category">CEO / Co-Founder</h6>
              <h4 class="card-title">James Thompson</h4>
              <p class="card-description">
                Don't be scared of the truth because we need to restart the
                human foundation in truth.
              </p>
              <nuxt-link to="#pablo" class="btn btn-success btn-round">Follow</nuxt-link>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <div>
              <div class="card-avatar">
                <nuxt-link to="#pablo">
                  <img class="img img-raised" src="img/olivia.jpg" />
                </nuxt-link>
              </div>
              <h6 class="category text-gray">Growth Hacker</h6>
              <h4 class="card-title">Olivia Thompson</h4>
              <p class="card-description">"Work hard play harder."</p>
              <div class="card-footer">
                <nuxt-link to="#pablo" class="btn btn-icon btn-success btn-simple btn-round"><em
                    class="fab fa-twitter"></em>
                </nuxt-link>
                <nuxt-link to="#pablo" class="btn btn-icon btn-success btn-simple btn-round"><em
                    class="fab fa-facebook-square"></em></nuxt-link>
                <nuxt-link to="#pablo" class="btn btn-icon btn-success btn-simple btn-round"><em
                    class="fab fa-google"></em></nuxt-link>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROFILE CARDS      *********      -->
</template>
<script>
import { Card, Button } from "@/components";

export default {
  components: {
    Card,
    [Button.name]: Button,
  },
};
</script>
<style>
</style>
