<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/psychology/bg-14.jpg')"></div>
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
              <h3 class="title">A good piece of advice provided...</h3>
              <p>
                even by a child abuser if valid should be taken.
                <br />
                <br />
                I believe that we can learn from everybody just in two ways.
                <br />
                <br />
              </p>
              <ul>
                <li>What to do?</li>
                <li>What not to do?</li>
              </ul>
              <p>
                <br />
                <br />
                In both ways, it is better to learn from someone else’s
                experience rather than exhausting your potential into Karma.
                <br />
                <br />
                If a smoker tells someone not to start smoking and that once
                started it is almost impossible to give up! Shut up and listen
                to them. They know they started something that they do not know
                how to give up! It requires willpower and meaningfulness to stop
                smoking. Stopping smoking is not as simple as stopping something
                you have to replace it with another habit or force your will
                upon the impulse to smoke long enough for you to stop wanting to
                smoke.
                <br />
                <br />
                You are essentially learning what not to do from them. This does
                not in any way immediately invalidate what they said.
                <br />
                <br />
                This happened to Jordan Peterson himself, he keeps telling
                everyone to organize their room first before starting to
                organize the country! It is in many ways what our Indian
                ancestors have always told us. It is an age-old knowledge that
                we have grown up with but just choose not to follow them anyway!
                so he went through a period of indescribable pain and withdrawal
                syndrome from Benzodiazepine medicine which took him to Canada,
                the USA, Russia, and many other countries which I haven’t told
                and many many months to recover and stop taking the medication
                which was prescribed by doctors but not before going through
                various near-death experiences.
                <br />
                <br />
                During this period in time, he had not organized his office
                space and someone took a picture and posted it online and it
                went viral! I’m like it doesn’t matter man! He is telling
                something valid why do you care if he is following it or not. If
                you think it is good advice take it or leave it! The same goes
                with this blog right! No one would sit through and read a blog
                post if they thought it was not important for them.
                <br />
                <br />
                A Priest, a Yogi, a teacher, a prisoner, a murderer, or a
                5-year-old can share their piece of wisdom and if it is
                meaningful and it makes sense to incorporate them into our
                lives, it is our solemn duty to incorporate them into our lives.
                As human beings, we can never be perfect ever! But I think that
                is our strength, it means there is something within us guiding
                us to do what is most meaningful in life.
                <br />
                <br />
                That is the reason people get bored, that is the reason people
                destroy buildings and glasses for fun! That is the reason why
                people watch TV all day long ( to escape from the pointlessness
                of NOW) and take them to a fairyland and make them feel
                nostalgic or make them want to experience what they say or vice
                versa.
                <br />
                <br />
                It is funny that every blog that I now write comes right back to
                finding meaning in life. I think it has to right? That is the
                source of our motivation in life. Or so I think! If not what do
                we have to live for? Why bother about the future? Just kill
                ourselves now and be done with the unbearable misery of life
                right? If life is meaningless why suffer? All the suffering
                would immediately become meaningless as well. So life evident
                has to become meaningful with the responsibilities that we
                choose to take in life.
                <br />
                <br />
                The responsibilities are also fundamental choices that we make
                in life right? It was definitely once your choice to choose this
                responsibility and follow through with it! You sacrificed your
                potential then to opt for this responsibility. Responsibility at
                the same time is also a form of burden right? Like Atlas
                shouldering the whole world on his back.
                <br />
                <br />
                If Atlas was a real person living a meaningless life, he
                wouldn’t even walk, let alone carry the weight of the whole
                world while walking. That is the meaning of taking what you can
                carry and shouldering them as long as you can.
                <br />
                <br />
                Don’t smoke, be a good citizen and live a cancer-free life, and
                do take the advice of a smoker.
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
                          <nuxt-link to="/psychology/search-for-the-good/self-preservation/">Self Preservation
                          </nuxt-link>
                        </h3>
                        <p class="card-description">
                          What is good? That is a hard thing to crack, right?
                          That’s the most abstract word anyone has ever found.
                          It has multiple meanings.....
                        </p>
                        <p class="author">
                          by
                          <strong>Nagarjun Nagesh</strong>, March 30, 2022
                        </p>
                      </div>
                      <div class="col-md-5">
                        <div class="card-image">
                          <img class="img img-raised rounded" src="img/psychology/bg17.jpg" alt="blog" />
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
      pageTitle: 'Can a Smoke ask you to Not Smoke?',
      audioPath: "https://audio.blitzbudget.com/psychology/an-enemy-with-multiple-faces.mp3",
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
