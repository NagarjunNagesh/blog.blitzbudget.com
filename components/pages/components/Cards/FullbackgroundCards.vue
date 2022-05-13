<template>
  <div class="cards">
    <div class="container">
      <div class="title">
        <h3>
          <small>Full Background Cards</small>
        </h3>
      </div>
      <div class="row">
        <div class="col-md-6">
          <card type="background" style="background-image: url('img/bg1.jpg')">
            <div class="card-title text-left">
              <h3>How wild Animals live in the National Forest</h3>
            </div>
            <div class="card-footer text-left">
              <div class="stats">
                <span>
                  <em class="now-ui-icons media-2_sound-wave"></em>SPACE.com
                </span>
                <span>
                  <em class="now-ui-icons tech_watch-time"></em> 20min ago
                </span>
              </div>
              <div class="stats-link pull-right">
                <nuxt-link to="#pablo" class="footer-link">Environment</nuxt-link>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6">
          <card type="background" style="background-image: url('img/bg3.jpg')">
            <div class="card-title text-left">
              <h3>How wild Animals live in the National Forest</h3>
            </div>
            <div class="card-footer text-left">
              <div class="stats-link">
                <nuxt-link to="#pablo" class="footer-link">Environment</nuxt-link>
              </div>
              <div class="stats stats-right">
                <span>
                  <em class="now-ui-icons media-2_sound-wave"></em>SPACE.com
                </span>
                <span>
                  <em class="now-ui-icons tech_watch-time"></em> 20min ago
                </span>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components";

export default {
  components: {
    Card,
  },
};
</script>
<style>
</style>
