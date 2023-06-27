<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/psychology/bg16.jpg')"></div>
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
              <h3 class="title">The mere fact that we are focusing...</h3>
              <p>
                on something and the limitation that it imposes on us ensures
                that other problems might arise out of this lack of focus on
                other aspects which also require your attention.
                <br />
                <br />
                As a person, you might have N number of responsibilities to be
                in pursuit of. These responsibilities might be the battle that
                you chose and they might be equally important to you. That does
                not mean that we can focus on multiple things at the same time.
                <br />
                <br />
                When I was studying during college multitasking was a thing. The
                ability to do multiple things at the same time. I was so into it
                and also proud of it that in my 6th semester I was watching the
                lord of the rings series and studying for an exam. It was
                typical that we had 2 - 3 days of holidays before an exam. They
                were tough. Guess what! I failed and had to rewrite it the next
                semester to pass it. I never did that again! Ever!
                <br />
                <br />
                Given that limitation, all I did was accept that I order to do a
                task in its fullness. We are obliged to give it 100% of our
                attention and this attention is what solves the problem that we
                chose to attend to.
                <br />
                <br />
                Now I might put my headphones on with some music while writing
                this blog but it can hardly be categorized as multi-tasking. I
                know now that right now getting things off my mind is more
                important to facilitate me to focus on other things later on
                which might require its due attention. It just helps me focus
                and get the thoughts flowing. That way I guess that it would
                leave you with something more to take away from this blog than
                what you came with.
                <br />
                <br />
                Imagine what happens to people who have no responsibility and
                would like to not take any responsibility consciously. Most of
                the men play games right? Isn’t that problem-solving in some
                sense? They enter a hypothetical world in which a problem is
                posed in front of them with limitations and the harsher the
                limitations, the better the game. You train yourself more and
                more in this virtual world and become a gamer. It might as well
                be because the real world rejected them or that everything that
                you connect or can connect is online in that game.
                <br />
                <br />
                That would be the fundamental lack of taking real-world
                responsibilities but we are not talking about people who live a
                meaningless life spending years playing games without advancing
                in the real world. They would inevitably suffer when life gets
                to them. That day they might realize and be shocked at what they
                have become by comparing themselves with other people who are in
                a much better position than they are.
                <br />
                <br />
                It might take years of hard work to get to a decent level but
                what is lost is lost. They can match up to the people who have
                chosen to work from the earliest possible day and try to achieve
                what they thought was necessary. Those are the people who have
                more responsibility and focus to solve one at a time by paying
                as much attention it deserves and as long as it takes to solve
                them.
                <br />
                <br />
                After shouldering the burden of responsibility they might
                discover that they are in a better place than they started but
                still far away from where they want to be and a little off from
                where they need to be. Their focus needs to change a little,
                they might need to put in a little more work towards the new
                direction and start from where they are now. But overall there
                is satisfaction with what they have achieved like finishing a
                game and feeling accomplished. However, it is ever fleeing so we
                focus on other issues to resolve.
                <br />
                <br />
                In reality, it is not the pursuit of happiness it is a pursuit
                that makes us happy even if we do not reach where we need to be.
                It is our responsibility to keep playing but not a necessity to
                finish it. That is what makes our life eternally meaningful. A
                life worth living, a task worth paying attention to, a place
                worth visiting, a future worth conquering.
                <br />
                <br />
                Stay sane, pay attention to what needs to be paid attention to,
                and hopefully you will reach there one day or not! But keep
                smiling and try!
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
                            <img class="img img-raised rounded" src="img/psychology/bg-op-1.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col-md-7">
                          <h6 class="category text-info">Psychology</h6>
                          <h3 class="card-title">
                            <nuxt-link to="/psychology/one-piece/straw-hat-luffy/">One Piece: Straw Hat Luff</nuxt-link>
                          </h3>
                          <p class="card-description">
                            A 17-year-old boy from a small town in East Blue
                            sets off on a journey to become a pirate....
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
  head() {
    return {
      title: this.pageTitle
    }
  },
  data() {
    return {
      pageTitle: 'Pursuit of Problem Solving?',
      audioPath: "https://audio.blitzbudget.com/psychology/pursuit-of-problem-solving.mp3",
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
