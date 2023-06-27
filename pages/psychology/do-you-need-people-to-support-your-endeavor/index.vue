<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/do-you-need-people-to-support-your-endeavor.jpg')"></div>
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
                            <h3 class="title">Just don’t expect to be supported...</h3>
                            <p>When you start doing something.<br><br>
                                I don’t know, people just criticize you from the start, man! You just have to do something
                                out of the ordinary to get criticized by your parents or your loved ones.<br><br>
                                And no one! Trust me, no one will support crazy endeavors. And you know what? They are
                                right. They just don’t want you to fail, get embarrassed, and be hurt along the way.<br><br>
                                What if! What if!!<br><br>
                                If you are afraid of getting hurt, embarrassed, bullied, and worst of all, what if you
                                spent 5 years working on something for nothing?<br><br>
                                What if you develop a product and nobody wants it?<br><br>
                                What if you start a restaurant and no one wants it?<br><br>
                                What if you create a YouTube channel and no one watches it??<br><br>
                                What if, man!! What if??!<br><br>
                                You have to start from scratch when you start something. You just can scale. Life is
                                also made hard by the fact that you are not just competing with your neighbor but also
                                with Kim Jong Un’s cousin who is also doing exactly what you are doing but just has
                                infinite capital, right??<br><br>
                                Life is hard, man! And unfair! If you think that is going to stop you, just stop right
                                now and quit!! How will we know if we are even capable of beating someone with infinite
                                capital if we haven’t even tried?<br><br>
                                Maybe you can? Or maybe you don’t even have to compete? You can just create your niche
                                where such competence is unnecessary, and in that space, you can cater to your
                                audience.<br><br>
                                You never know, buddy! Isn’t there already too many restaurants in your neighborhood
                                already? Does that stop someone from just starting a new one just around the corner?<br><br>
                                I am pretty sure that you know a new restaurant that just started around the corner if
                                you are living in the cities. They don’t give up, man! They don’t say, "There are already
                                enough restaurants, and I would never be able to compete in the already saturated
                                market."<br><br>
                                Si no! If you are looking for emotional support from your loved ones when you start
                                something new in your life, not everybody gets it! And you shouldn’t expect it as
                                well.<br><br>
                                How can you expect others to believe that you will make it if you are unsure about it
                                and can never possibly know??<br><br>
                                We all need that thick skin to shrug off the sheer magnitude of the task that awaits us
                                to achieve something.<br><br>
                                I could not imagine becoming an architect in the first few years of being a junior
                                programmer. God, there are 40-year-olds who are still senior software developers. And every
                                day, there is something new in the world of programming that I cannot ever hope to learn
                                everything and also be good at communication. 24 hours a day just seem too little for a
                                task that big.<br><br>
                                However, that does not stop me from working every day as a senior software developer in
                                my current company and daydreaming about becoming an architect.<br><br>
                                I often ask myself, "What if you become an architect? What do you want to be after that? I
                                don’t know! I don’t know!" All I know is that something new would just come up!<br><br>
                                Or maybe I would never become an architect! I don’t know, man! It’s life! You never
                                know!!<br><br>
                                That just doesn’t stop me from trying though. I never even knew I could even become a
                                graduate software developer. If it wasn’t for my mom, it would have probably taken me at
                                least a year or two to become a software developer.<br><br>
                                She referred me to a company, and I am forever grateful for that opportunity. If not
                                for that, I would have never been able to reach where I am today.<br><br>
                                Sometimes I just have to take a step back, but most of the time, someone from somewhere
                                whom you never even thought could help will help you and make it happen.<br><br>
                                We cannot hope to chart out everything in life. I guess and hope that everyone around us
                                will support our endeavor as well.<br><br>
                                They will not!! They are smart people, man. They know how futile most of the things that we
                                do are. Maybe we are the dumb ones.<br><br>
                                You never know, buddy! Speak with them; they probably have a good reason! Find out why!!
                                Try to convince them and negotiate with them, and probably they would get convinced. But
                                the one thing I wouldn’t do is try to go against the storm.<br><br>
                                There is always another opportunity in another country which wants to go where I want to
                                go, and my wife supports it and is also on board with the plan.<br><br>
                                I am fortunate in that sense that I can choose from a plethora of choices, and I do
                                understand that it is not the same for others. For that, I am grateful.
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
                <other-blogs :next="6" :previous="7"></other-blogs>
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
            pageTitle: 'Do you need people to support your endeavor?',
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
