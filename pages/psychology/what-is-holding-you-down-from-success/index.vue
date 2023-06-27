<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/what-is-holding-you-down-from-success.jpg')"></div>
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
                            <h3 class="title">Let us define success first...</h3>
                            <p>
                                It is a place where you want to go, however, you want to
                                go. It need not be a perfect and fixed place. It could be a place where you see yourself
                                going.
                                <br>
                                <br>
                                Most of the time when I define a goal. It is imperfect but I just try to keep going,
                                however imperfect the goal might be.
                                <br>
                                <br>
                                When I am focused and “in the zone” as everybody said the time flies and I have no sense
                                of what time is it or whether I had lunch or not. But was rare initially. I found myself
                                pushing too hard and never really achieving what I wanted to achieve.
                                <br>
                                <br>
                                When I wanted to develop BlitzBudget. It had a lot of learning curves like learning how
                                to code in Languages that I had never coded and how to deploy them to a server so they
                                could be served to the user.
                                <br>
                                <br>
                                For three years, I tried to achieve the goal that I initially set back in 2018 to create
                                a website that would help anyone trying to get their finances sorted and I thought I had
                                a strategy in place for helping people achieve a stable financial from nothingness.
                                <br>
                                <br>
                                However, my limit though is that I can only help you reach where I had reached so far.
                                And never knew if my knowledge was sufficient enough to cater for a large population of
                                diverse people with a different cultures.
                                <br>
                                <br>
                                Let’s be realistic it might not work for a vast majority of the population. Their
                                personality and preferences might be different from mine. But the finances always tell
                                the truth. If you don’t have your finances sorted. I can help it get sorted.
                                <br>
                                <br>
                                I always felt like a part of the picture was always missing when trying to build an
                                application.
                                <br>
                                <br>
                                It was that personality and psychology aspect of it. Since COVID back in 2020. I started
                                learning all about psychology and now I am convinced that without sufficient
                                psychological sophistication in the application and retraining. It is impossible to
                                achieve the goal in finances.
                                <br>
                                <br>
                                Life seems to be a learning curve in every corner. Although I know that the information
                                I am putting in this blog is most likely to get outdated I still write them because it
                                is one of the ways for people to start from scratch and reach a stable financial
                                position from ZERO.
                                <br>
                                <br>
                                God, I was a spendthrift in during my college days. I just wanted more money to spend on
                                things and look rich. Never had a second thought about what I was doing. Never cared
                                about it. Just had the ambition to go abroad and experience the culture of a developed
                                nation.
                                <br>
                                <br>
                                It took me on a long journey and as a direct result, I have changed myself from the core
                                multiple times. Just ask my wife, she would tell you crazy stories.
                                <br>
                                <br>
                                The journey towards the ever-illusive goal is what is worth it in the end. If you reach
                                for example a 3 months emergency fund goal then you just push the goal towards having an
                                investment or creating a passive income stream and keep going right.
                                <br>
                                <br>
                                The journey is what changes you in the end. It is illogical to be afraid to start the
                                journey because you are somehow afraid that you might not reach the goal.
                                <br>
                                <br>
                                Why do you think that before you have started your journey you are aiming for the right
                                things in life?? And the aim and the motivation are just a step in the right direction
                                towards taking action. As long as you take the right action. It is all that matters. One
                                step at a time. Only if you reach the wrong goal you will know that the goal was not
                                worth it and move on in the end.
                                <br>
                                <br>
                                It might take 5 years or 10 years but you had to do it to break yourself from that goal.
                                Sometimes, well lost the time you want to do something and go towards that only to find
                                out that it was not what you wanted in life.
                                <br>
                                <br>
                                That’s life man, but the journey that you took and the learning curve always stay with
                                you. That’s something that no one can take away. It is yours forever.
                                <br>
                                <br>
                                Most of the time, after years we learn something new and it changes or enriches our past
                                experiences. But you need to have the experience to learn from.
                                <br>
                                <br>
                                Self-defeating thought is just one way to stay lazy and keep yourself on the sofa
                                binge-eating and watching Netflix all day.
                                <br>
                                <br>
                                Move your a**, and start doing the thing that you wanted to do! Get things done man! And
                                fail fast!! It just helps you move one step closer to the thing that you wanted in life.
                                <br>
                                <br>
                                So what is holding you from success?? It is you and your self-defeating mentality!!
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
                <other-blogs :next="26" :previous="27"></other-blogs>
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
            pageTitle: 'What is holding you down from success?',
            audioPath: "https://audio.blitzbudget.com/psychology/what-is-holding-you-down-from-success.mp3",
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
