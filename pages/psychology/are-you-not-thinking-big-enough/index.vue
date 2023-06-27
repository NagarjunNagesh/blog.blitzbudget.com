<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/are-you-not-thinking-big-enough.jpg')"></div>
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
                            <h3 class="title">The biggest constraint keeping us down is...</h3>
                            <p>
                                our knowledge. As Grant Cardone says, knowledge
                                is power! But wrong knowledge is the opposite of it. It is what keeps us all bogged down
                                from achieving what we want to achieve, no matter how much effort we put into it.
                                The one thing that made me think it is way too much is when Grant Cardone said that it
                                took him thirty years of constant effort to become rich and achieve what he wanted in the
                                end.
                                <br>
                                <br>
                                It's not just about wanting to be rich, right? It applies to anything that you want to
                                achieve
                                which is hard and takes time. There is nothing in this world that you would value
                                more if you had to work for it for more than 20 years to achieve. If someone gave you
                                something for free, would you value it as much as if you had to work on it for the next 20
                                years? No! Heck no! I even throw away stuff that I bought and don't need.
                                <br>
                                <br>
                                The next generation, which has only seen riches, would likely take everything that we
                                achieved for granted, and the probability of them squandering what the previous
                                generation has amassed is extremely high. Some statistics predict that wealth is
                                completely dissipated into nothingness within three generations. So,
                                everyone becomes rich at some point only to lose it in a few generations. On
                                a large scale, everything might seem pointless.
                                <br>
                                <br>
                                But it is just pointless altogether to live a life without a target. So if we dream big, we
                                better dream of becoming a multi-millionaire or even a billionaire. If
                                not, what's the point? The margin of error is just too high, and hence the probability of
                                reaching there is already too low with luck, where we are born, and how hard we work
                                being some of the major factors impacting the possibility of us reaching there.
                                <br>
                                <br>
                                And if all we dream about is just owning a home, a car, and having a relationship, it is
                                probably a goal too low to set anyway. It is probably what we might end up having. Only
                                if we dream too big, it is even embarrassing to put it into words that we know we
                                are dreaming high enough.
                                <br>
                                <br>
                                When I was earning pennies, I told my wife that by the time we retire, to maintain the
                                same lifestyle, we need to be making around 300,000 euros per year, and we both were
                                shocked by what we found out. By the time I am 65, we need to ensure that we have
                                at least 300,000 euros per year to maintain the same lifestyle we are currently
                                enjoying at 30.
                                <br>
                                <br>
                                I was speaking with my dad and asking him about his pay when he started working in the
                                banking sector back in the 80s, and he said he earned 3000 rupees per month as his
                                starting salary. When he retired, he was earning
                                around 150,000 per month. The percentage of growth in the span of 30 years is 50 times
                                more than what he started earning, and the lifestyle and earnings had increased but not
                                by a factor of 50. We had to factor in inflation.
                                <br>
                                <br>
                                So even if we dream so big that we are afraid to even speak it aloud, it might not
                                guarantee that we have factored in a million other factors that would just ensure that
                                we reach where we want to. Imagine taking life on autopilot without any proper
                                navigation and course correction.
                                <br>
                                <br>
                                The percentage of course correction required if we continuously course-correct ourselves
                                towards our goal could be 0.001% of the change per day, but remember it is an exponential
                                change that we are talking about. Life is exponential. All the change that you are
                                accumulating right now might not provide you with enough explanation right now for why you
                                are doing what you are doing. But it is accumulating, and one day it might explode, and the
                                exponential growth would truly show
                                its power, thereby increasing your return more than what you had ever dreamed in your
                                entire life.
                                <br>
                                <br>
                                Reaching the goal can mean that you simultaneously grow in different aspects of your
                                life, and it is required for all of us to grow in different directions at the same time.
                                It can exhaust us, and sometimes we might need to take a break, but it should never be able
                                to stop us from attaining what we deserve to achieve.
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
                <other-blogs :next="1" :previous="2"></other-blogs>
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
            pageTitle: 'Are you not thinking big enough?',
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
