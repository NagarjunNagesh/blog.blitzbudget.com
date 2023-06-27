<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/change-your-personality-if-it-doesnt-serve-you.jpg')">
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
                            <h3 class="title">Can you imagine a particular aspect that...</h3>
                            <p>
                                defines who you are or have some personality
                                traits that you can rely on during the worst of your times and that is how people see
                                you and expect that behaviour in times of need?
                                <br>
                                <br>
                                Not only do they expect that of you but see you as a person who has that personality
                                trait as if that trait is going to be there for a lifetime.
                                <br>
                                <br>
                                I have also seen people who do not change certain aspects that had to be changed in
                                their 20s and yet they carry it with them like a badge of honour throughout their
                                lifetime.
                                <br>
                                <br>
                                The worst of those traits are always the ones that we are not aware of which can only
                                truly be understood by self-reflection. By observing what you do as they happen or
                                analyzing the past and asking yourself why you had done that.
                                <br>
                                <br>
                                Maybe you have been doing it all your life and the people whom you love, praise it or
                                point it out which makes you proud to have those traits within you.
                                <br>
                                <br>
                                I had never realized until Chris Williamson mentioned in his podcast that we often have
                                to unlearn the traits that had benefited us for a decade because as we get old we find
                                that the same traits that made us who we are now are pulling us away from where we want
                                to go now.
                                <br>
                                <br>
                                Yet, the people around us continue to expect that from us, sometimes they are the things
                                that make your loved ones proud but sometimes it might bring them resentment. Doesn’t
                                matter, either way, we have to live with ourselves first. Only if we are satisfied with
                                the path we are taking will we ever have hope of feeling fulfilled and that might make
                                it a little easier to interact with others.
                                <br>
                                <br>
                                Fulfilment is the cornerstone which can be used to propagate your journey through life
                                in a meaningful manner. As Tom Bilyeu points out fulfilment can never be attained if
                                your motives are selfish, it has to be something that you pursue which makes someone
                                other than you better in one way or another.
                                <br>
                                <br>
                                It is not to say that you should feel miserable on the way to fulfilment. I felt pretty
                                miserable when I tried to change my habits from bad to good ones.
                                <br>
                                <br>
                                When I started investing almost all my free time to develop a web application that I was
                                passionate about knowing fully well that it might or might not work. But what matters is
                                that I try and give my best and through that journey, I will be a better person, better
                                able to do things.
                                <br>
                                <br>
                                That almost always meant that I became a more introverted person, even more so, fully
                                focused on programming during the working hours I would do the programming work that my
                                work demands and during my free time my personal project.
                                <br>
                                <br>
                                It went on for about three years actually before I gave up on it and started developing
                                a mobile application. Never realized that the journey had made me a better programmer.
                                <br>
                                <br>
                                All along, through the pursuit to achieve something in life, I had to not do the things
                                that I really wanted to do 80% of the time. That is painful, extremely painful.
                                <br>
                                <br>
                                Being painful can be miserable at times but without clarity of purpose, we would give up
                                in a week and never touch that again. Sometimes we forget that failure is guaranteed
                                almost always it’s the success defined in your own terms which is hard to achieve.
                                <br>
                                <br>
                                I guess it has to be hard for it to achieve to be worthy of calling it a success I
                                suppose. That takes strength and a strong sense of purpose.
                                <br>
                                <br>
                                And if we are lucky and are prepared we might achieve our goals. That’s good, we can
                                enjoy happiness in achieving the goal but it’s fleeing and there is no use pursuing it.
                                But the story that you tell yourself by achieving what you set out to achieve is what is
                                more important.
                                <br>
                                <br>
                                Whether you like it or not if you are a person who gives up halfway through almost all
                                your life and the next time you tell yourself this time I am going to achieve this new
                                goal. Your conscience is going to laugh at you and say “No, you won’t!”.
                                <br>
                                <br>
                                There is no escaping that. That makes it even more necessary to set out what you plan to
                                do even though throughout the journey the plans slightly change with the new information
                                that you gather along the way.
                                <br>
                                <br>
                                That builds strength I guess, but after all this achievement and fulfilment sometimes we
                                set a goal that requires us to destroy some traits that brought us where we are today.
                                Do not fear my friend, change is the only constant. If it aligns with your goal and
                                purpose and it makes you happy. Go ahead.
                                <br>
                                <br>
                                What doesn’t kill you only makes you stronger.
                                <br>
                                <br>
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
            pageTitle: 'Change your personality if it doesn’t serve you',
            audioPath: "https://audio.blitzbudget.com/psychology/change-your-personality-if-it-doesnt-serve-you.mp3",
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
