<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/betrayal-vengeance-and-injustice.jpg')"></div>
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
                            <h3 class="title">Betrayal is the act of slowly gaining...</h3>
                            <p>
                                your trust and stabbing you in the back. There is
                                no salvation for betrayal.
                                <br>
                                <br>
                                People get betrayed all the time. When we went to Majorca for a trip, my wife and I were
                                playing on the beach without any regard for others around us and how they might see us. It
                                was just about us and how we felt.
                                <br>
                                <br>
                                During those days and having moments like these, I used to snap back to being too
                                self-conscious about my surroundings. I noticed a girl sitting in a corner of the beach near
                                the stairs, with a bottle of beer, crying. It was just the three of us for miles.
                                <br>
                                <br>
                                I immediately felt bad and walked away. One doesn't cry like that when someone else is
                                having a happy couple moment. One must have experienced betrayal and remembered the times
                                with that person. I imagined someone betraying her days before starting this trip, and now
                                she had to come to Majorca alone.
                                <br>
                                <br>
                                I did the same thing, by the way, when I was betrayed. I requested my parents to book a trip
                                for me to Dubai, and I spent around one and a half months with my aunt.
                                <br>
                                <br>
                                It was hard, man. I tried to think of the farthest place away from India and imagined going
                                there to avoid the pain. I hated that person for doing it to me.
                                <br>
                                <br>
                                It was that experience that fundamentally changed me. But you know what? Thinking about it,
                                it has made me a much stronger person emotionally and helped me create a new life from the
                                depths of hell. And now, this success is all possible thanks to the betrayal.
                                <br>
                                <br>
                                It helped me start a journey towards something much bigger and better. It was almost like
                                life saw my potential and kick-started it with a betrayal.
                                <br>
                                <br>
                                If not for that, I would never have been curious enough or even fearful enough to pay enough
                                attention to people and their emotions, and strive to understand them better. I would
                                probably still be overwhelmed with my emotions, my necessities, and my suffering. I think
                                selfishness comes from being too comfortable and ignorant.
                                <br>
                                <br>
                                By selfishness, I mean when we are so consumed with ourselves that we're unable to see and
                                feel what other people feel and understand where they, as human beings, are coming from.
                                Under such conditions, when we feel like we are being betrayed, it is so easy to go to "I
                                did not deserve it" and believe that the other person seems to be so happy and not suffering
                                from agony. Thus, we have to ensure that justice is served and be the Judge, Jury, and the
                                Executioner.
                                <br>
                                <br>
                                Now we are in the realm of vengeance, where we try to sabotage whatever it is that the other
                                person gained from betraying us. Let us be honest, if they choose to betray us, they choose
                                to betray us. Life is only beautiful if people love us voluntarily. We can never force other
                                people to do something for us without being Mao, Stalin, or Lord Voldemort, and we do not
                                want to go there. Nothing good awaits us there.
                                <br>
                                <br>
                                Nor do we

                                want to manipulate the situation in such a way that we sabotage someone else's life out of
                                our desire to serve justice. Even though it might seem right, that dopamine hits when you do
                                something wrong and eventually destroy someone else's life, it is what we call narcissism.
                                We all have the potential to be the worst being and the best being that ever existed, which
                                makes us Satan and Jesus, Ram and Ravana at the same time. That complexity and duality exist
                                within us.
                                <br>
                                <br>
                                Not wanting to be the doer of injustice should not mean that we are incapable of serving it.
                                It is that dangerous element within us that also makes people want to respect us for who we
                                are and not want to cross the line.
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
                                                    <img class="img img-raised" src="img/authors/nagarjun.jpg"
                                                        alt="author" />
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
                <other-blogs :next="4" :previous="5"></other-blogs>
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
import OtherBlogs from "../../../components/BlogPosts/OtherBlogs.vue";
export default {
    name: "blog-post",
    components: {
        Card,
        InfoSection,
        Badge,
        Comment,
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        OtherBlogs
    },
    head() {
        return {
            title: this.pageTitle
        }
    },
    data() {
        return {
            pageTitle: 'Betrayal, Vengeance and Injustice',
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
