<template>
  <div>
    <!--     *********    BLOG CARDS     *********      -->
    <div class="cards">
      <div class="container">
        <div class="title">
          <h3 class="title">Cards</h3>
          <h3>
            <small>Blog Cards</small>
          </h3>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <card color="red">
              <h6 class="category-social">
                <em class="fas fa-fire"></em> Trending
              </h6>
              <p class="card-description">
                "The supreme art of war is to subdue the enemy without
                fighting."
              </p>
              <div class="card-footer">
                <div class="author">
                  <img v-lazy="'img/julie.jpg'" alt="..." class="avatar img-raised" />
                  <span>Susan B. Anthony</span>
                </div>
                <div class="stats stats-right">
                  <em class="now-ui-icons ui-2_favourite-28"></em> 10.4K ·
                  <em class="now-ui-icons files_single-copy-04"></em> 425
                </div>
              </div>
            </card>
            <card type="blog">
              <img slot="image" class="img rounded" src="img/project13.jpg" />
              <h6 class="category text-warning">
                <em class="now-ui-icons business_bulb-63"></em> Focus
              </h6>
              <h5 class="card-title">
                <nuxt-link to="#nuk">Stay Focused: Train Your Brain</nuxt-link>
              </h5>
              <p class="card-description">
                Our brains are finely attuned to distraction, so today's digital
                environment makes it especially hard to focus...
              </p>
            </card>
            <card>
              <h6 class="category text-danger">
                <em class="now-ui-icons media-2_sound-wave"></em> Trending
              </h6>
              <h5 class="card-title">
                <nuxt-link to="#pablo">Here Be Dragons</nuxt-link>
              </h5>
              <p class="card-description">
                An immersive production studio focused on virtual reality
                content, has closed a $10 million Series A round led by
                Discovery Communications
              </p>
              <div class="card-footer">
                <div class="author">
                  <img v-lazy="'img/olivia.jpg'" alt="..." class="avatar img-raised" />
                  <span>Lord Alex</span>
                </div>
                <div class="stats stats-right">
                  <em class="now-ui-icons ui-2_favourite-28"></em> 342 ·
                  <em class="now-ui-icons files_single-copy-04"></em> 45
                </div>
              </div>
            </card>
          </div>
          <div class="col-md-6 col-lg-4">
            <card color="black">
              <h6 class="category-social">
                <em class="fab fa-apple"></em> New Apps
              </h6>
              <h4 class="card-title">
                <nuxt-link to="#nuk">FiftyThree Files For Paper</nuxt-link>
              </h4>
              <p class="card-description">
                Yesterday, as Facebook launched its news reader app Paper,
                design-focused startup FiftyThree called out Facebook publicly
                for using their brand name...
              </p>
              <div class="card-footer text-center">
                <n-button type="default" round> Read Article </n-button>
              </div>
            </card>
            <card type="blog">
              <img slot="image" class="img rounded" src="img/card-blog2.jpg" />
              <h6 class="category text-primary">Features</h6>
              <h5 class="card-title">That’s One Way To Ditch Your Passenger</h5>
              <p class="card-description">
                As near as we can tell, this guy must have thought he was going
                over backwards and tapped the rear break to bring the nose
                down...
              </p>
              <div class="card-footer">
                <div class="author">
                  <img v-lazy="'img/julie.jpg'" alt="..." class="avatar img-raised" />
                  <span>Mike John</span>
                </div>
                <div class="stats stats-right">
                  <em class="now-ui-icons tech_watch-time"></em> 5 min read
                </div>
              </div>
            </card>
            <card color="blue">
              <h6 class="category-social">
                <em class="fab fa-twitter"></em> Twitter
              </h6>
              <p>
                "You Don't Have to Sacrifice Joy to Build a Fabulous Business
                and Life"
              </p>
              <div class="card-footer">
                <div class="author">
                  <img v-lazy="'img/james.jpg'" alt="..." class="avatar img-raised" />
                  <span>Tania Andrew</span>
                </div>
                <div class="stats stats-right">
                  <em class="now-ui-icons ui-2_favourite-28"></em> 2.4K ·
                  <em class="now-ui-icons files_single-copy-04"></em> 45
                </div>
              </div>
            </card>
          </div>
          <div class="col-md-8 offset-md-2 col-lg-4 offset-lg-0">
            <card type="blog" card-body-classes="text-center">
              <img slot="image" class="img rounded" src="img/examples/card-blog6.jpg" />
              <h6 class="category text-danger">
                <em class="now-ui-icons media-2_sound-wave"></em> Business
              </h6>
              <h5 class="card-title">
                Axel Springer Spends $343M To Buy Business Insider
              </h5>
              <p class="card-description">
                German media giant Axel Springer has announced it’s acquiring
                online business news publication Business Inside...
              </p>
              <div class="card-footer">
                <n-button type="success">Read Article</n-button>
              </div>
            </card>
            <card type="blog">
              <img slot="image" class="img rounded" src="img/card-blog3.jpg" />
              <h6 class="category text-warning">
                <em class="now-ui-icons media-1_camera-compact"></em> Photo
              </h6>
              <h5 class="card-title">
                <nuxt-link to="#pablo">Indispensible to nature photography: the hide</nuxt-link>
              </h5>
              <div class="card-footer">
                <div class="stats stats-right">
                  <em class="now-ui-icons ui-2_favourite-28"></em> 342 ·
                  <em class="now-ui-icons files_single-copy-04"></em> 45
                </div>
                <div class="author">
                  <img v-lazy="'img/james.jpg'" alt="..." class="avatar img-raised" />
                  <span>Devin Coldewey</span>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 px-0">
          <div class="card card-fashion card-background" style="background-image: url('img/bg26.jpg')">
            <div class="card-body">
              <div class="card-title text-left">
                <h2>
                  <nuxt-link to="#pablo"> Walk of shame - Latest Urban Trend </nuxt-link>
                </h2>
              </div>
              <div class="card-footer text-left">
                <div class="stats">
                  <span>
                    <em class="now-ui-icons users_circle-08"></em>Author
                  </span>
                  <span>
                    <em class="now-ui-icons tech_watch-time"></em> June 2, 2017
                  </span>
                </div>
                <div class="stats-link pull-right">
                  <nuxt-link to="#pablo" class="footer-link">People</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 px-0">
          <div class="card-container">
            <div class="card card-fashion">
              <h4 class="card-title">
                <nuxt-link to="#pablo"> The view from south Texas in one Picture </nuxt-link>
              </h4>
              <div class="card-body">
                <div class="card-footer">
                  <div class="stats">
                    <span>
                      <em class="now-ui-icons users_circle-08"></em>Author
                    </span>
                    <span>
                      <em class="now-ui-icons tech_watch-time"></em> June 2,
                      2017
                    </span>
                  </div>
                  <div class="stats-link pull-right">
                    <nuxt-link to="#pablo">Mountains</nuxt-link>&sbquo;
                    <nuxt-link to="#pablo">Outdoor</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-fashion card-background" style="
                background-image: url('https:///mvpwp.com/demo/nowwp/wp-content/uploads/sites/6/2017/06/a-james-donovan-180375.jpg');
              "></div>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END BLOG CARDS      *********      -->
  </div>
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
