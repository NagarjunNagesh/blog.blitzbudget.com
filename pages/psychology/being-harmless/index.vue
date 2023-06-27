<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/being-harmless.jpg')"></div>
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
                            <h3 class="title">Not being the doer of injustice and...</h3>
                            <p>
                                Harm might be seen as being incapable of doing it.
                                And certain people are definitely incapable of doing it. Have you seen that bullies target
                                the smallest and weakest among us? It is because despite being small, they choose not to
                                retaliate. That weakness in ourselves and the desire to be good to other people is what is
                                seen and can eventually be used to take away something precious from those who can do it.

                                If you lose something without anyone stealing it from you, then it is because you didn't
                                deserve it. If something is stolen from you and you deserved it, you will either find a way
                                to get it back or be capable of earning even more than what you had lost in the first place.

                                It is absolutely impossible to deserve something without integrating the yin and yang into
                                ourselves—the good and the evil, the angel and the demon. We have the capability to inflict
                                harm and to create. The self-consciousness of being vulnerable and susceptible to damage
                                also gives us the know-how to inflict the same misfortune on others.

                                That is precisely why more than 90% of lottery winners lose what they had earned in less
                                than 5 years. They had not developed the tenacity required to preserve their earnings. Being
                                lucky once does not guarantee the ability to hold onto that fortune long enough to reap its
                                benefits. The person who worked hard and earned it had to make numerous mistakes on the way
                                to riches, and those lessons stay with them.

                                Even though Bill Gates looks like he is incapable of harming someone and appears
                                introverted, it is said that he cheated on his wife. Whether we are conscious of our evil
                                selves or not, they have the potential to take over and make us do things we may one day
                                regret. Short-term benefits do not justify the sacrifice of long-term returns. It may seem
                                tempting, but it is definitely not worth it.

                                The seductive types are precisely those who want something from you by providing short-term
                                benefits. They could be using marketing gimmicks to convince us that they are the best
                                person for the job but end up being a complete and utter disaster. They seduced us with
                                their marketing skills, but the reality was far worse than what they had promised.

                                When we are harmless or appear harmless, the advantage is that we look extremely friendly
                                and approachable. People subconsciously love and are attracted to the good and tend to stay
                                away from a face that appears rude, representing the possibility of danger. People are drawn
                                to honesty and genuineness. It creates a space where people feel understood. I believe that
                                lying makes people move away from you and feel distanced, as if they don't know you. People
                                hate lying or being lied to.

                                The harmless person is also susceptible to lies and deception. It is usually the weaker
                                person who feels the need to go undercover and not face the real danger head-on with
                                courage. They know they would surely be harmed. This is the same reason children lie and
                                bite, and the same reason children cry—due to helplessness.

                                We feel extremely helpless when we are benign and incapable of inflicting harm. People fear
                                crossing the line when you are a monster or when you are integrated. It is better to portray
                                yourself as a harmless and approachable person in society and assume that people are good,
                                allowing the good in them to come out when we are good and portray ourselves as good.

                                Failing to see the truth right in front of us and refusing to believe what is hard to digest
                                but true is the hallmark of ignorance and harmlessness, driven by fear. Choosing to always
                                see the truth, despite signs of deception and masks that people wear, will ensure that we
                                are less susceptible to deception and more inclined to achieve what we want.

                                The tenacity required to achieve what we want comes from the strength of our personality,
                                which can only be obtained by integrating our evil into our soul and aiming for the good,
                                despite the suffering. This now enters the domain of religion and faith. The very first step
                                in achieving what you want is seeing yourself already there before even starting the
                                journey.

                                It requires a certain level of courage to reach a point in life where we choose to be
                                audacious with our goals and dreams. It also requires naivety and charm, along with the
                                willpower and strength to face whatever is thrown at us. Every time we reach a goal, it
                                gives us the confidence that we can achieve what we aimed for and makes us a little more
                                confident to aim even higher. That's precisely why confident people can aim high, while
                                those without confidence are satisfied with an aimless life.
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
                <other-blogs :next="2" :previous="3"></other-blogs>
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
            pageTitle: 'Being harmless',
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
