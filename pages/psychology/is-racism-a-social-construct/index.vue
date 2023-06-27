<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/psychology/bg-15.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ pageTitle }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="button-container">
              <nuxt-link to="#article" class="btn btn-success btn-round btn-lg">
                <em class="now-ui-icons text_align-left"></em> Read Article
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="button-container">
                <audio controls color="primary">
                  <source :src="audioPath" type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="article">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3 class="title">Racism could be a social construct...</h3>
              <p>
                or a learned behavior to a certain degree.
                <br />
                <br />
                I am not suggesting that racism doesn’t exist. It does to a
                large degree! But all the countries are not the United States of
                America, as such assuming that equal amounts of racism exist in
                all the countries is just absurd.
                <br />
                <br />
                Any amount of assumption more than necessary could become
                Racism!
                <br />
                <br />
                When we were in Paris while getting down from the basilica after
                having a good time during dusk, we saw six black men (is using
                the black racist?, how else should I describe black men then?)
                arrive around the dark patch. We were headed towards then
                inevitably that was our only exit, a man was inviting me to them
                while 2 men were standing next to him without making eye contact
                and the remaining 3 were standing Watch.
                <br />
                <br />
                We had no choice but to walk into them, the leader asked me if
                he could tie a band on my arm, I said “no”. He pulled my arm and
                I resisted. He said “Respect, My friend” in a stern voice while
                we were slowly moving away from them and pulled my arm while
                holding it so tick ( I was thinking it was a power play to force
                me into submission).
                <br />
                <br />
                I looked at my wife who was now two steps behind me and nodded
                to her to get away. And while this was happening the 2 black men
                who were not standing watch were slowly trying to surround me.
                Something told me it was now or never! So my wife pulled my hand
                and started pulling me towards a well-lit area six steps away!
                <br />
                <br />
                While I was pulled by my wife I started walking backward while
                facing the guy who was trying to tie a band watching his facial
                reaction, all I saw was a surprise and his unwillingness to let
                go of my hand. He held it so tight that it was almost painful.
                And after I was firmly in the lit area, he had no choice but to
                let go of my area but not until he took his time to untie the
                band that he was trying to tie around my arms.
                <br />
                <br />
                God, my heart was pumping so hard from fear, helplessness, and
                shock but at the same time relieved that we narrowly escaped a
                great misfortune that was about to happen that day!
                <br />
                <br />
                We dreamt of going to Paris for well over five years since we
                were doing our masters in the UK. It was our dream to go there
                but we never expected it to be splattered with misfortune and
                sheer terror!
                <br />
                <br />
                While in Paris people tried to rob us 5 different times
                unsuccessfully, Imagine feeling helpless, being out in a
                situation where you know you are going to be robbed, well you
                don’t want to be because you are after all an immigrant in
                Europe and losing your Visa means having to reapply for the
                visa. Well, forget about how to get back to Spain from Paris for
                a second and even get a temporary passport from the Indian
                embassy before all of this (Yes we had our passports and NIE
                with us during the time of attempted robbery). All of the effort
                that we put into getting out of India to have a better lifestyle
                in a Developed country (Just like an average Indian, nothing to
                be surprised about there).
                <br />
                <br />
                So of course I would do anything to try to not get robbed!
                <br />
                <br />
                So am I a human being who is so afraid to go back to Paris and
                meet a gang of black men trying to rob me? Or a Racist for being
                afraid that the next time around if I do go to Paris they might
                succeed?
                <br />
                <br />
                Being lucky 5 times in a row in Paris was lucky enough for me!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-blog-info">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="row">
                <div class="col-md-6">
                  <div class="blog-tags">
                    Tags:
                    <span class="label label-success">Psychology</span>
                  </div>
                </div>
                <div class="col-md-6"></div>
              </div>
              <hr />
              <card type="profile" plain>
                <template slot="raw-content">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="card-avatar">
                        <nuxt-link to="#pablo">
                          <img class="img img-raised" src="img/authors/nagarjun.jpg" alt="author" />
                        </nuxt-link>
                        <div class="ripple-container"></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <h4 class="card-title">Nagarjun Nagesh</h4>
                      <p class="description">
                        I've been trying to articulate psychology and its impact
                        on us where we are conscious of it or not.
                      </p>
                    </div>
                    <div class="col-md-2">
                      <button type="button" class="btn btn-default pull-right btn-round">
                        Follow
                      </button>
                    </div>
                  </div>
                </template>
              </card>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="col-md-12">
            <h2 class="title text-center">Similar Stories</h2>
            <br />
            <div class="blogs-1" id="blogs-1">
              <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                  <card type="blog" plain>
                    <template slot="raw-content">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="card-image">
                            <img class="img img-raised rounded" src="img/psychology/bg-op-2.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col-md-7">
                          <h6 class="category text-info">Psychology</h6>
                          <h3 class="card-title">
                            <nuxt-link to="/psychology/one-piece/roronoa-zoro/">One Piece: Roronoa Zoro</nuxt-link>
                          </h3>
                          <p class="card-description">
                            Some of the most easy-to-understand characters in
                            One piece is Roronova Zoro but....
                          </p>
                          <p class="author">
                            by
                            <strong>Nagarjun Nagesh</strong> , March 30, 2022
                          </p>
                        </div>
                      </div>
                    </template>
                  </card>
                  <card type="blog" plain>
                    <div class="row">
                      <div class="col-md-7">
                        <h6 class="category text-danger">
                          <em class="now-ui-icons now-ui-icons media-2_sound-wave"></em>
                          Search for the Good
                        </h6>
                        <h3 class="card-title">
                          <nuxt-link to="/psychology/can-a-smoker-ask-you-to-not-smoke/">Can a Smoke ask you to Not
                            Smoke?
                          </nuxt-link>
                        </h3>
                        <p class="card-description">
                          A good piece of advice provided even by a child abuser
                          if valid should be taken.....
                        </p>
                        <p class="author">
                          by
                          <strong>Nagarjun Nagesh</strong>, March 30, 2022
                        </p>
                      </div>
                      <div class="col-md-5">
                        <div class="card-image">
                          <img class="img img-raised rounded" src="img/psychology/bg-14.jpg" alt="blog" />
                        </div>
                      </div>
                    </div>
                  </card>
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
import {
  Card,
  Button,
  Comment,
  Badge,
  InfoSection,
  Checkbox,
} from "@/components";
import initParallax from "@/utils/initParallax";
export default {
  name: "blog-post",  
  components: {
    Card,
    InfoSection,
    Badge,
    Comment,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      pageTitle: 'Is Racism a Social Construct?',
      audioPath: "https://audio.blitzbudget.com/psychology/is-racism-a-social-construct.mp3",
      form: {
        comment: "",
      },
      comments: [],
    };
  },
  mounted() {
    initParallax();
  },
};
</script>
<style></style>
