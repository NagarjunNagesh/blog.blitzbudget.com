<template>
  <div class="wrapper blog-posts">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg44.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              A Place to learn about personal finance and live an independant
              life.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 px-0">
            <card type="background" class="card-fashion" style="background-image: url('img/personal-finance/bg-1.jpg')">
              <div class="card-title text-left">
                <h2>
                  <nuxt-link to="/personal-finance/why-the-rich-get-richer/">
                    Why the Rich get Richer?
                  </nuxt-link>
                </h2>
              </div>
              <div class="card-footer text-left">
                <div class="stats">
                  <span>
                    <em class="now-ui-icons users_circle-08"></em>Nagarjun
                    Nagesh
                  </span>
                  <span>
                    <em class="now-ui-icons tech_watch-time"></em> September 18,
                    2018
                  </span>
                </div>
                <div class="stats-link pull-right">
                  <nuxt-link to="/personal-finance" class="footer-link">Personal Finance</nuxt-link>
                </div>
              </div>
            </card>
          </div>
          <div class="col-md-3 px-0">
            <div class="card card-fashion">
              <div class="card-title">
                <h4>
                  <nuxt-link to="/personal-finance/where-should-we-begin/">
                    Where should we Begin?
                  </nuxt-link>
                </h4>
              </div>
              <div class="card-body">
                <div class="card-footer">
                  <div class="stats">
                    <span>
                      <em class="now-ui-icons users_circle-08"></em>Nagarjun
                      Nagesh
                    </span>
                    <span>
                      <em class="now-ui-icons tech_watch-time"></em> September
                      18, 2018
                    </span>
                  </div>
                  <div class="stats-link pull-right">
                    <nuxt-link to="/personal-finance">Personal Finance</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 px-0">
            <card type="background" class="card-fashion" style="
                background-image: url('img/personal-finance/where-should-we-begin.jpg');
              ">
            </card>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 px-0">
            <card type="background" class="card-fashion" style="
                background-image: url('img/personal-finance/what-is-money.jpg');
              ">
            </card>
          </div>
          <div class="col-md-3 px-0">
            <div class="card card-fashion arrow-left">
              <div class="card-title">
                <h4>
                  <nuxt-link to="/personal-finance/what-is-money/">
                    What is Money?
                  </nuxt-link>
                </h4>
              </div>
              <div class="card-body">
                <div class="card-footer">
                  <div class="stats">
                    <span>
                      <em class="now-ui-icons users_circle-08"></em>Nagarjun
                      Nagesh
                    </span>
                    <span>
                      <em class="now-ui-icons tech_watch-time"></em> September
                      18, 2018
                    </span>
                  </div>
                  <div class="stats-link pull-right">
                    <nuxt-link to="/personal-finance">Perosnal Finance</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 px-0">
            <card type="background" class="card-fashion" style="
                background-image: url('img/personal-finance/self-motivation-a-necessity-for-success.jpg');
              ">
              <div class="card-title text-left">
                <h2>
                  <nuxt-link to="/personal-finance/self-motivation-a-necessity-for-success/">Self-Motivation! A
                    Necessity for
                    Success</nuxt-link>
                </h2>
              </div>
              <div class="card-footer text-left">
                <div class="stats">
                  <span>
                    <em class="now-ui-icons users_circle-08"></em>Nagarjun
                    Nagesh
                  </span>
                  <span>
                    <em class="now-ui-icons tech_watch-time"></em> March 28,
                    2022
                  </span>
                </div>
                <div class="stats-link pull-right">
                  <nuxt-link to="/personal-finance" class="footer-link">Personal Finance</nuxt-link>&sbquo;
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="section">
          <h3 class="title text-center">You may also be interested in</h3>
          <br />
          <div class="row">
            <div class="col-md-4">
              <card type="blog" plain>
                <img slot="image" class="img rounded img-raised" src="img/personal-finance/power-of-dreaming.jpg"
                  alt="Dream" />
                <h6 class="category text-info">Personal Finance</h6>
                <h4 class="card-title">
                  <nuxt-link to="/personal-finance/power-of-dreaming/">The Power of Dreaming</nuxt-link>
                </h4>
                <p class="card-description">
                  It all starts with a dream to become successful in life. The
                  dream has to be justified with a definiteness of purpose. The
                  purpose then drives us to plan and to take action.
                  <nuxt-link to="/personal-finance/power-of-dreaming/"> Read More </nuxt-link>
                </p>
                <div class="author">
                  <img v-lazy="'img/authors/nagarjun.jpg'" alt="..." class="avatar img-raised" />
                  <span>Nagarjun</span>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <card type="blog" plain>
                <img slot="image" class="img rounded img-raised"
                  src="img/personal-finance/are-you-rich-if-you-own-a-bmw.jpg" alt="BMW" />
                <h6 class="category text-success">Personal Finance</h6>
                <h4 class="card-title">
                  <nuxt-link to="/personal-finance/are-you-rich-if-you-own-a-bmw/">Are you Rich if you own a BMW?
                  </nuxt-link>
                </h4>
                <p class="card-description">
                  The majority of millionaires own their cars rather than lease.
                  Approximately 1 in 4 hold the current years model but another
                  25 % have a model that is a four-year-old model.
                  <nuxt-link to="/personal-finance/are-you-rich-if-you-own-a-bmw/">
                    Read More
                  </nuxt-link>
                </p>
                <div class="author">
                  <img v-lazy="'img/authors/nagarjun.jpg'" alt="..." class="avatar img-raised" />
                  <span>Nagarjun</span>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <div class="card card-plain card-blog">
                <div class="card-image">
                  <nuxt-link to="/psychology/the-truth-about-white-lies/">
                    <img class="img rounded img-raised" src="img/psychology/bg18.jpg" alt="Lies" />
                  </nuxt-link>
                </div>
                <div class="card-body">
                  <h6 class="category text-danger">
                    <em class="now-ui-icons media-2_sound-wave"></em> Psychology
                  </h6>
                  <h4 class="card-title">
                    <nuxt-link to="/psychology/the-truth-about-white-lies/">The Truth about White Lies</nuxt-link>
                  </h4>
                  <p class="card-description">
                    Once we establish ourselves as a person who would not shy
                    away from saying white lies as long as we get what we
                    want/prevent bad things from happening by telling the truth.
                    <nuxt-link to="/psychology/the-truth-about-white-lies/">
                      Read More
                    </nuxt-link>
                  </p>

                  <div class="author">
                    <img v-lazy="'img/authors/nagarjun.jpg'" alt="..." class="avatar img-raised" />
                    <span>Nagarjun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import initParallax from "@/utils/initParallax";
export default {
  name: "blog-posts",
  head: {
    title: 'BlitzBudget Blog',
  },
  layout: "default",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  mounted() {
    initParallax();
  },
};
</script>
<style>
</style>
