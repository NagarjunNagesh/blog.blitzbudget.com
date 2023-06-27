<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/your-immediate-social-circumstances-also-constrains-you.jpg')">
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
                            <h3 class="title">What I had seen a lot of people...</h3>
                            <p>
                                do is say that they want to achieve something in life. I
                                truly believe that they want to achieve the things they say that they want to achieve
                                but at the same time, they have a different conflicting part inside of them that is
                                preventing them to achieve exactly that goal.
                                <br>
                                <br>
                                It could be as simple as if I go towards that goal, I am simultaneously moving away from
                                my past. It could your past circle of friends that you hold on to or your family or your
                                wife or your habits or any other conflicting fear that keep you from moving towards your
                                goal.
                                <br>
                                <br>
                                The other day I heard Jordan Peterson say only 2% of people have a Career and others
                                just have a job. I love the way he defined a career. A career is a relentless focus on
                                the work and putting your 100% on the job and wanting to move up the ladder as a direct
                                result of the effort put into the work. It could even be unproductive work and politics
                                in my experience. They are the ones truly having a career.
                                <br>
                                <br>
                                Well, in that sense I am having a job man! I am not that relentless. Well, I am also in
                                Europe and Europe heavily discourages overworking and promotes a balance in life over
                                having a career let’s say! That is if you define a career like that!
                                <br>
                                <br>
                                The philosophy behind Europe's move towards a balanced life is most welcome and
                                comforting and that is what I love about being in Europe. No questions what si ever!
                                Moving on!
                                <br>
                                <br>
                                If a Career is something that you want and what is holding you back is your life it
                                truly means that I am asking you to throw away the remainder of your life for the career
                                and lose the rest. if you also want what you currently have and also have a career let’s
                                say.
                                <br>
                                <br>
                                Let me ask you this! Let’s say that your country promotes working for 10, 12 or even 14
                                hours every day, which simply means you wouldn’t have a life, to begin with. There are
                                always people who would be ready to do exactly that but hung else for the next 30 years
                                of their life. If you are a more balanced person! And just want to move up the ladder
                                without having to put that extra effort.
                                <br>
                                <br>
                                To be honest you just have to find a different company or change the country altogether.
                                So you would be able to keep that balance in life and also move up in the career, earn a
                                little bit more and have a bit more responsibility and learn a little bit more, right?
                                In this case,
                                <br>
                                <br>
                                You had an unreasonable goal which is no application for the current country and also
                                you did not want to pay the price of losing your life for work.
                                <br>
                                <br>
                                Let’s face it, man! It is not fair! Just stop whining about it and break free from the
                                constraint! The constraint could be that you were born in that country and it is a
                                prestigious organization that you are working on right now but if you want it to move up
                                and you are stuck and feel miserable. You have to learn to let go and move on!!
                                <br>
                                <br>
                                It could be that you had built up your reputation and prestige in your social circle and
                                people respect you because you work in that big organization. But deep inside you feel
                                like crap! Is it worth it??
                                <br>
                                <br>
                                If you feel like crap! Do something about it! Embrace the fact that you are feeling like
                                crap! That’s the first step towards achieving your goal. Then Maybe start talking about
                                it without loved ones.
                                <br>
                                <br>
                                Then Maybe formulate a plan together to move towards feeling less crappy!! Whatever is
                                preventing you from achieving your goal if you can overcome it if you won't achieve that
                                goal bad enough!
                                <br>
                                <br>
                                It could even be your loved one keeping you down! Or it could be that you have been so
                                bossy with everyone because you are the CEO of the organization now even If you feel
                                crappy deep inside you have to keep that position if not people would just pounce on you
                                and devour you if you lose your power.
                                <br>
                                <br>
                                That Karma man! Nobody, not even god can save you if you do not see the problem yourself
                                and acknowledge it! If you do acknowledge it then Maybe you can reduce the imminent
                                suffering that you are surely going to face!!
                                <br>
                                <br>
                                Align yourself towards righteousness and move towards it, be humble and always say the
                                truth! It is the only right way to navigate the world. And it will set us all free. Not
                                power! Not greed! Not money!!
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
                <other-blogs :next="33" :previous="1"></other-blogs>
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
            pageTitle: 'Your immediate social circumstances also constrains you',
            audioPath: "https://audio.blitzbudget.com/psychology/your-immediate-social-circumstances-also-constrains-you.mp3",
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
