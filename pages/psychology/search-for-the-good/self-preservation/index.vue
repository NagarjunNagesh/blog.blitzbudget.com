<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/psychology/bg17.jpg')"></div>
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
              <h3 class="title">
                What is good? That is a hard thing to crack...
              </h3>
              <p>
                right? That’s the most abstract word anyone has ever found. It
                has multiple meanings if we try to crack it from the top-down
                and people can get lost in the search for good.
                <br />
                <br />
                Anyone can then convince you like the Nazis that what is
                ultimately good is what is good for the nation and the
                individual is bound to do great things but to do them one has to
                be willing to do bad things for the good of the nation. That’s
                not a bad narrative, right? If you convince yourself with the
                notion of “kill or be killed”. But what they forgot was they
                were the ones who started the war in the first place. There were
                atrocities on both sides during world war 2. What fascinated me
                was post-traumatic stress disorder.
                <br />
                <br />
                Let us say a soldier was convinced with the above narrative and
                started killing and raping women, then when he comes back and
                lives a normal life with his family, guess what? A certain
                portion of them develops post-traumatic stress disorders. I
                don’t know anyone or any true story about this scenario but we
                all understand this scenario. What didn’t make sense as it was
                the same person then and it is the same person now.
                <br />
                <br />
                According to Jordan Peterson, what changes in the narrative?
                <br />
                <br />
                So what changes are the narrative and the ideology? But you know
                what traumatized them even further. They realized that they
                loved doing all of those things to other people and some how
                they were surprised that they loved doing harmful things to
                other people. They rejoiced in it. That what’s haunts most of
                them. A narrative within them is destroyed. That a monster is
                always someone else something that is not you but once you found
                out that they did all those things and makes them the monsters.
                <br />
                <br />
                God only knows how someone could get out of that mess. Maybe we
                have to integrate that monster into ourselves. Know exactly
                under what circumstances a human being or any human being can
                commit unspeakable crimes against humanity and while doing it
                rejoice over it and get away with it because he was doing it in
                the name of a country and that country won the war.
                <br />
                <br />
                Usually, when the country wins the war and maintains the victory
                for a long period of them that means they are the good ones and
                what they fought was bad and that war was necessary to eradicate
                the evil. So under most circumstances, these people have done
                terrible things and they do not pay the price for it. That’s
                also what is haunting them, I suppose? They did something bad in
                the name of a country and got away with it.
                <br />
                <br />
                That person while doing it might have thought that what he was
                doing was necessary for the greater good. Something more than
                him. Therefore he is eligible to do horrible things now.
                <br />
                <br />
                Now all the war movies make sense, before a war, there is
                usually a speech by the leader trying to motivate them and bring
                them together to forget themselves and serve the nation and
                emerge victoriously and that victory was the only way forward.
                That destroys the last bit of morality back into the deepest
                corner of anyone who has any left.
                <br />
                <br />
                I always thought that speech made me energized, motivated, and
                focused. All those were true but among all those, they also
                serve as a cure for someone who is not willing to kill in the
                name of morality. That killing is what is expected in the name
                of God, country, and for the good of all the people within that
                umbrella.
                <br />
                <br />
                There is truth within it, right? After all, who wants to be
                dead, raped, and looted but to prevent that and the only way to
                prevent that is by you doing all of those things to the
                opposition could haunt some soldiers for the rest of their
                lives.
                <br />
                <br />
                Now that we have a convincing argument that good is more
                complicated that there is more to it. Let us continue.
                <br />
                <br />
                I do not criticize all the soldiers, on the contrary. What
                surprises me is the lack of sufficient psychological training
                that is given to them before going to war that some of them are
                diagnosed with PTSD. Being a soldier is in part an ability to
                inflict harm and kill a human being without a shred of a doubt
                or a second thought. You want them to keep doing it in the
                future and that warrants psychological retraining.
                <br />
                <br />
                Self-preservation as a form of defense and inflicting minimum
                necessary harm to the attacker to disable him from inflicting
                any harm to you is an Integral part of BEING GOOD.
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
                            <img class="img img-raised rounded" src="img/psychology/the-truth-about-white-lies.jpg"
                              alt="" />
                          </div>
                        </div>
                        <div class="col-md-7">
                          <h6 class="category text-info">Psychology</h6>
                          <h3 class="card-title">
                            <nuxt-link to="/psychology/the-truth-about-white-lies/">The Truth about White Lies
                            </nuxt-link>
                          </h3>
                          <p class="card-description">
                            Once we establish ourselves as a person who would
                            not shy away from saying white lies as long as we
                            get what we want/prevent bad things....
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
                          <nuxt-link to="/psychology/pursuit-of-problem-solving/">Pursuit of Problem Solving?
                          </nuxt-link>
                        </h3>
                        <p class="card-description">
                          The mere fact that we are focusing on something and
                          the limitation that it imposes on us ensures that
                          other problems.....
                        </p>
                        <p class="author">
                          by
                          <strong>Nagarjun Nagesh</strong>, March 30, 2022
                        </p>
                      </div>
                      <div class="col-md-5">
                        <div class="card-image">
                          <img class="img img-raised rounded" src="img/psychology/bg16.jpg" alt="blog" />
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
  head() {
    return {
      title: this.pageTitle
    }
  },
  data() {
    return {
      pageTitle: 'Self preservation',
      audioPath: "https://audio.blitzbudget.com/psychology/search-for-the-good/self-preservation.mp3",
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
