<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/the-physiology-of-feeling-motivated.jpg')"></div>
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
                            <h3 class="title">I've seen people attribute motivating people to...</h3>
                            <p>
                                some kind of an undesired attribute to
                                go after but I really think feeling motivated is a precursor to taking action towards
                                your goal. But I think we are all taking one thing for granted. ENERGY! There is only a
                                finite amount of energy and as such, there is only a finite amount of undivided
                                attention assuming you can focus relentlessly.
                                <br>
                                <br>
                                Use music to your advantage to get more energy from your system. It only goes so far
                                because there are people who are lazy and I often feel people say that they are a
                                procrastinator or lazy person. But if they understand that laziness and lethargy also
                                come from training your body for inaction over a long course of time then you should
                                know that the opposite is also possible.
                                <br>
                                <br>
                                There was a time when I did not have a morning routine but we all used to go to work
                                every single day and that demanded something from the body. After the COVID crisis was
                                taken away and we had to work from home at least the ones who were fortunate to have
                                that opportunity. I saw a lot of people focus more on their bodies and bring that back
                                to shape. I was a late bloomer in that sense. I noticed that my breathing had changed
                                and even how I felt. If I pushed my tummy with my hand too much then it would hurt.
                                <br>
                                <br>
                                I lost the energy that I once had and I was a fast walker as well, I lost that too. It
                                felt so weird to have lost all of that. I felt so low emotionally as well. and that was
                                kind of my motivation to not feel bad about myself that I wanted to start working. And I
                                got this knee pain in my right leg. That was kind of a starting point of realization
                                that I reached such a low that it was action towards improvement or further
                                deterioration to a point of no return.
                                <br>
                                <br>
                                All I wanted was for the body pain to go away, get back to a better shape and feel like
                                I live in a body that I am comfortable with, let alone be proud of my body. I had bare
                                minimum expectations. I keep doing it for the next two months and I start to see the
                                change in my energy level that I have expendable throughout the day. After COVID hit, I
                                started sleeping for like 10 hours every day and if I had like a 7-hour sleep cycle then
                                my eyes would hurt from sleeplessness, Like waking at 04:00 in the morning and trying to
                                keep myself awake. All that went away after continuous exercise. The pain in my tummy
                                went away. It was not only easy to walk fast, but I also started walking faster without
                                any pain and I often started feeling like my body is going faster than I want and it is
                                in this flow state. Often makes me feel more comfortable with my body now and it feels
                                comfortable to know that.
                                <br>
                                <br>
                                All of that gives me more energy motivation and purpose to focus on the factors that are
                                providing me with the capability to earn more money. And lets me focus on my personal
                                projects, ambitions and goals. What happens when I had focus and more energy is that I
                                was able to focus on one thing deeply which kind of lets me finish a task in 30 minutes
                                that would normally take 1 and half hours. I was entering the flow state more often.
                                That was surprising.
                                <br>
                                <br>
                                Nowadays I am more surprised by the outcomes. I think it is because I started being more
                                self-aware of my body and soul and as a result am capable of understanding and verbally
                                describing the differences to which I was oblivious for the past 30 years. Without that
                                energy, There is no use feeling motivated. What is the use of feeling motivated to do
                                something and then you have successfully associated yourself with being lethargic and a
                                procrastinator? So this combination would only make you feel more shitty about yourself
                                which would further push you into binge eating or other self-destructive activity that
                                would worsen your current state.
                                <br>
                                <br>
                                There are some dangerous things which if you self iterate then it would just push you
                                deeper and deeper towards misery. These are the things that you should start becoming
                                more aware of. Being Fat is not OK. Feeling more energetic is a direct result of
                                fasting, exercising and having a positive relationship with one or more people. Stop
                                judging me or anyone for saying the truth out loud, I do not have to be politically
                                correct, I just have to point out that if you are not comfortable with your own body
                                change it. I promise it would only help you and others around you a lot of good and
                                probably be mindful of what you eat as well. God without that all of the above is a
                                no-go! I had to learn to do intermittent fasting and iterate it so much that it is next
                                to natural for me now. I am sure other things can be done and different bodies require
                                different types of stimuli to keep them moving towards a lean healthy body. Do your own
                                research and let me know how getting back to shape has helped you fix other aspects of
                                your life as well.
                                <br>
                                <br>
                                The reality is that not being comfortable with your body is preventing you from success,
                                Either change that restrictive mentality or change the body. Or both! You will live a
                                more fulfilling life, I promise.
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
                <other-blogs :next="19" :previous="20"></other-blogs>
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
            pageTitle: 'The Psychology of Feeling Motivated',
            audioPath: "https://audio.blitzbudget.com/psychology/the-physiology-of-feeling-motivated.mp3",
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
