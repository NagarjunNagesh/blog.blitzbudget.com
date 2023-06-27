<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/is-the-fear-of-criticism-holding-you-back.jpg')"></div>
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
                            <h3 class="title">Just reminds me of the videos that...</h3>
                            <p> I saw the other where Uncle Roger criticized Gordon
                                Ramsay about making a dish!
                                <br>
                                <br>
                                It’s Gordon Ramsay man! He gets criticized for making a dish. It was so good to watch
                                man!! And so damn funny!
                                <br>
                                <br>
                                If he gets criticized for his cooking be damn sure that you will be as well. It could be
                                for fun, could be for whatever reason. People love criticizing others and for some
                                reason man, it is soo much to watch someone being criticized when the criticism is
                                funny!
                                <br>
                                <br>
                                I am sure it would have been hard for anyone to digest. Remember the Will Smith - Chris
                                Rock slap incident in Oscar?
                                <br>
                                <br>
                                He was a comedian! How do you do a comedy without making fun of something or someone?
                                Society is just so sensitive. What’s gonna happen if you just laugh about it and move
                                on.
                                <br>
                                <br>
                                Maybe it hurts you a little bit. Somewhere in your ego. But, not as much as getting
                                slapped in Oscar man! Not as much as getting slapped during an Oscar performance and
                                having to get back to performing a comedy skit in Oscar.
                                <br>
                                <br>
                                Damn! Hats off Chris!! When someone slaps that hard tears would involuntarily follow.
                                But that guy was tough! Both physically and emotionally.
                                <br>
                                <br>
                                He truly deserved claps for how well he handled that incident and just went back to
                                doing the comedy. So good! So damn good!
                                <br>
                                <br>
                                That’s what happens sometimes when you truly try to achieve. You get slapped in front of
                                millions of people. It’s how well integrated you are man! If you are then you can come
                                back even stronger than you were and just move on with life. But first, you would have
                                to be able to forgive the person who slapped you.
                                <br>
                                <br>
                                That would probably be the first step or not. Maybe the first step would have been to
                                come back to senses about what had just happened. “ oh shit! Just got humiliated during
                                Oscar performance”
                                <br>
                                <br>
                                I am pretty sure he snapped back to his performance mode without giving much thought to
                                it. Because you can carry it to dark places man!! Want to see how??
                                <br>
                                <br>
                                “Oh my wife and kids and everyone I loved just watched me get slapped”
                                <br>
                                <br>
                                “ Does that mean I did something wrong”
                                <br>
                                <br>
                                “ No, I didn’t deserve to be slapped”
                                <br>
                                <br>
                                “ why not slap him back”
                                <br>
                                <br>
                                “ God I didn’t deserve to be treated like that in front of others, I am the best person
                                there is to be privileged to perform in the Oscar”
                                <br>
                                <br>
                                And keep going until it reaches a place where you want to take revenge. I am telling you
                                it takes you to a dark place man.
                                <br>
                                <br>
                                Do you want to find out the darkest place on earth? It’s the comment section when we
                                post a video of us doing something on Youtube.
                                <br>
                                <br>
                                Or nowadays it’s Twitter!! Japan happened to be one of the First Nations to make online
                                insults punishable up to one year in prison. A great step forward man.
                                <br>
                                <br>
                                When you can create a user called “Darth Vader” and comment whatever you want. It does
                                feel more powerful but it also traumatizes someone else if they happen to read it.
                                <br>
                                <br>
                                But you know what is more powerful than that. Just snap back to yourself and tap into
                                your soul and just keep going. That’s even better.
                                <br>
                                <br>
                                You know what would happen. Those who would criticize would just continue criticizing
                                and those who would produce would just keep producing.
                                <br>
                                <br>
                                How can you go closer to perfection if you don’t try and fail the first 1000 times ??
                                <br>
                                <br>
                                It’s a practical impossibility. What if you are born perfect? Hahaha!! Just kidding!!
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
                <other-blogs :next="13" :previous="14"></other-blogs>
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
            pageTitle: 'Is the Fear of Criticism Holding you Back?',
            audioPath: "https://audio.blitzbudget.com/psychology/is-the-fear-of-criticism-holding-you-back.mp3",
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
