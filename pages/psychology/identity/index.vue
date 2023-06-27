<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/identity.jpg')"></div>
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
                            <h3 class="title">I am writing this because most of us cannot...</h3>
                            <p>
                                Affording to screw up in life is something most of us cannot do. Screwing up would mean
                                losing the only possible way to redeem ourselves, essentially wasting a precious 5-year or
                                10-year period during which we could have truly improved ourselves and worked our way up the
                                hierarchy.
                                <br>
                                <br>
                                Some people might think, "Nah! That’s not me! I am privileged." To them, I say, "Are you
                                part of the one percent or the top 20 percent who can afford to live a life without
                                stressing too much about perfection or at least not making a mistake in the first place?"
                                <br>
                                <br>
                                Most people at the bottom end of the hierarchy cannot afford to make a mistake and are
                                unwilling to stop making them. Education is probably the only way out for them. However,
                                educating ourselves that the north is south and the south is north will only do more harm
                                than good. Deep down, you will know it is wrong because no matter what you do, the world
                                will seem to resist you and prevent you from progressing towards your goals.
                                <br>
                                <br>
                                Taking it to the extreme, any action aligned towards darkness or the opposite would make you
                                lose everything you ever had and will have, including your future potential. For example,
                                dying or going to prison, among others.
                                <br>
                                <br>
                                So, what is the true meaning of education? It's about understanding that as humans, we are
                                not capable of making our lives better all by ourselves. We need people around us—mentors,
                                loved ones, and even inspiration from movies, vlogs, and books—to help us start moving
                                towards our goals.
                                <br>
                                <br>
                                This implicitly means that we have to align ourselves towards the highest possible good, as
                                Jordan Peterson puts it. We need to focus on learning how to get there from where we are,
                                and along the way, we meet different sets of people. Some are completely aligned with our
                                thoughts and feelings, people with whom we can connect and collaborate smoothly.
                                <br>
                                <br>
                                On the other hand, there are others—the vast majority—with whom we may not feel as connected
                                due to innate differences, circumstances, language barriers, and many other things that
                                differentiate one human being from another. With these individuals, we start by slowly
                                mingling under common circumstances, trying to understand their differences a little more
                                and truly grasping where they are coming from.
                                <br>
                                <br>
                                It is through these differences that we often realize that what they are doing makes more
                                sense than what we have been doing. We start learning and imitating them, seeking to
                                understand the results of this new behavior. As a result, we become better individuals.
                                <br>
                                <br>
                                Inspiration can come from various sources, even from movies. All of these require tolerance
                                of differences and, above all, true empathy and understanding of where the other person
                                comes from. Tolerance means letting things slide, but deep down, you may not be truly
                                convinced that what they are doing is right. However, if you genuinely believe that the
                                other person means a lot to you and should matter more than your need to project yourself as
                                a "nice" person, then you can engage in a true discussion that may lead to a new
                                understanding.
                                <br>
                                <br>
                                That sense of open-mindedness is very hard to achieve without knowledge and wisdom. True
                                wisdom comes from exploring different sets of behaviors and understanding where you could
                                potentially arrive if you incorporated them into yourself.
                                <br>
                                <br>
                                This would truly mean that you could become whoever you choose to be without feeling like an
                                imposter. You only feel like an imposter if the new knowledge has not truly convinced you
                                yet. If you start feeling that way, then look for examples of why not to incorporate this
                                new behavior into yourself and understand the true counter-arguments that arise from that
                                conversation. Factor in the pros and cons of that new knowledge.
                                <br>
                                <br>
                                Whether you like it or not, everything starts with action. It could be a subconscious
                                impulse or thought. Then, that repetitive thought becomes a habit, the habit becomes
                                behavior, and behavior becomes an identity. You become a person who does this or that. If it
                                has reached that point within you, it might be really hard to detach yourself from being
                                that person; it might feel completely foreign to you. But trust me, that feeling will pass,
                                and after a while, you will start feeling normal again.
                                <br>
                                <br>
                                However, this also requires awareness of the new behavior and continuous learning and
                                adapting. It might seem like a lot of work, but whether you like it or not, we are already
                                doing it implicitly or subconsciously all the time! You might as well be aware of that fact.
                                <br>
                                <br>
                                That new behavior will have consequences, and those consequences might include losing old
                                friends who no longer see you as they thought you were. You might start living a better
                                life, which means you will have to let go of destructive habits and understand the
                                underlying impulse driving you towards that destructive behavior.
                                <br>
                                <br>
                                The whole allure behind destructive behavior is that it may seem enticing in the moment, but
                                if repeated 1000 times, it will take you to a very dark place from which not even God can
                                rescue you before you destroy yourself in it.
                                <br>
                                <br>
                                Truly understand that your identity is the result of iterations of repeated actions driven
                                by subconscious impulses.
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
                <other-blogs :next="16" :previous="17"></other-blogs>
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
            pageTitle: 'Identity',
            audioPath: "https://audio.blitzbudget.com/psychology/identity.mp3",
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
