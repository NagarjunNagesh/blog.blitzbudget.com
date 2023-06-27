<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/dealing-with-anger-when-an-injustice-has-been-done-to-you.jpg')">
            </div>
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
                            <h3 class="title">That is often the hardest to control...</h3>
                            <p>
                                Personally, I find it challenging to control certain aspects of my life. When confronted
                                with false accusations that unjustly paint me as the bad person, it becomes an immediate
                                struggle to rectify the situation. It's natural to feel a sense of injustice when such
                                allegations are made against us, but it's essential to reflect on our own actions and
                                consider if there was anything we could have done differently to prevent being in that
                                situation in the first place. Sometimes, we may be unknowingly influenced or manipulated
                                into acting against our own wishes under specific circumstances or emotional triggers.
                                <br>
                                <br>
                                If you have thoroughly examined the situation and genuinely believe that the other person is
                                unjustly criticizing you, going beyond a mere negative perception, it may be time to
                                distance yourself from that individual or group. Learn from the experience and grow, but do
                                not retreat into your own shell or become an introvert again. If you find yourself
                                withdrawing from others and retreating into isolation, it is likely triggered by your own
                                insecurities. Such a scenario often leads to disconnection and restless nights.
                                <br>
                                <br>
                                Instead, strive to act as you normally would but develop the ability to identify
                                manipulative individuals more quickly and filter them out of your life and relationships. By
                                doing so, you can avoid repeating such unpleasant experiences. Your primary goal should be
                                to protect yourself and your loved ones, enabling personal growth and progress toward a
                                better future.
                                <br>
                                <br>
                                When I encounter situations like this, I often feel frustration or anger, and a strong urge
                                to correct the perceived injustice and take immediate action. However, anger is a peculiar
                                negative emotion that compels us to react impulsively, often leading to unintended
                                consequences that we wouldn't otherwise choose under normal circumstances.
                                <br>
                                <br>
                                It's important to work on managing this emotion rather than suppressing it, as bottling up
                                anger can lead to increased stress and irritability. Instead, find healthy outlets for that
                                energy. Redirect it into something constructive or find alternative ways to release it. One
                                effective method I've discovered is writing. Take a piece of paper, isolate yourself from
                                distractions, and allow your thoughts to flow freely without filtering. If the content
                                becomes too provocative, consider burning the paper afterward. This outlet can be divine,
                                providing a sense of relief and freeing you from the burden of the emotion. It's a clear
                                indication that you are no longer consumed by it. This process also helps you organize your
                                thoughts and gain clarity. Writing is a therapeutic way to spend time alone and sort through
                                the internal mess. Alternatively, engaging in physical activities like punching a bag (not
                                actual people who triggered your emotions) can also provide a release.
                                <br>
                                <br>
                                Remember, the key is to learn from these experiences and strive to do better in the future.
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
            pageTitle: 'Dealing with anger when an injustice has been done to you',
            audioPath: "https://audio.blitzbudget.com/psychology/dealing-with-anger-when-an-injustice-has-been-done-to-you.mp3",
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
