<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/believing-in-yourself-when-no-one-else-is.jpg')"></div>
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
                            <h3 class="title">That Single Factor That Pushes You Forward in Life</h3>
                            <p>
                                Sometimes, a single factor can make a significant difference in propelling you forward in
                                life, especially if your goal is something constructive and noble. Despite any disadvantages
                                you may perceive, you are likely not among the most underprivileged communities in the
                                world. Consider those in North Korea or those living without electricity as some of the most
                                underprivileged individuals today.<br><br>
                                Believing in your own ability to change your circumstances is key. Countless stories abound
                                of individuals who were born into poverty but managed to uplift themselves and their
                                families to the middle class, or even achieve true wealth. Take Grant Cardone, for example,
                                who, despite having around 500 million dollars in debt, still considers himself wealthy.
                                While it may be debatable, the key takeaway is that people can live better lives than they
                                initially imagined.<br><br>
                                If you find yourself less privileged, remember that it is not your fault. In a capitalist
                                system (assuming you're not in a tyranny), you have a chance to climb higher on the
                                financial ladder. You deserve success, and it's crucial to truly believe in your worth. That
                                belief is what drives me to work tirelessly, dedicating practically every waking hour to
                                activities that directly benefit the quality of my life.<br><br>
                                Rather than spending weekends binge-watching Netflix, I choose to connect with my family,
                                spend time with my wife, work on my project BlitzBudget, or learn programming. Admittedly,
                                it can be overwhelming at times, as I often have numerous ideas but struggle with efficient
                                execution, which necessitates putting in extra hours.<br><br>
                                They say you need to put in 10,000 hours to truly excel at something. Personally, I feel
                                like I've already put in that amount of time into programming, and yet I know I've barely
                                scratched the surface. Mastery in one area often reveals other skills to be acquired, such
                                as improving Spanish proficiency or communication skills that hinder progress in my
                                job.<br><br>
                                There may be obstacles like age, as some people might consider me too young to be an
                                architect. Nevertheless, I refuse to let that stop me from pursuing my dream. Becoming a
                                software architect has always been my aspiration, and now that I'm in a different country
                                where English is barely spoken and programming is predominantly done in Spanish, I've had to
                                learn the language and improve my communication skills.<br><br>
                                To secure high-paying jobs, one must strive to be better than the average population. So,
                                here I am, determined to surpass expectations. I hope to enhance my Spanish skills to remove
                                that barrier and uncover any other impediments to my progress.<br><br>
                                Life can be tough, but with unwavering willpower, we can view obstacles not as hindrances
                                but as opportunities to become stronger. We're more capable than we may realize.<br><br>
                                On a lighter note, I recently had the chance to visit Rome and witness the grandeur of the
                                Colosseum for the first time. It was a truly awe-inspiring and humbling experience. However,
                                let's not forget the horrors that took place within those ancient walls. People were forced
                                to fight to the death for the entertainment of the crowd—a terrifying ordeal that could be
                                likened to the first large-scale horror movie. The Colosseum, with its seating capacity of
                                thousands, dwarfed even the Santiago Bernabéu stadium in Madrid, measuring a whopping 525

                                meters wide.<br><br>
                                Historical records indicate that during the biggest festivals, 12,000 humans and 11,000
                                animals were slaughtered within a span of 120 days purely for entertainment. It's
                                astonishing to contemplate what humans are capable of doing to one another.<br><br>
                                So, the point is, I am grateful to have been born in a capitalistic democracy where I have a
                                voice and the privilege of reaching a vast audience through the internet, all with minimal
                                investment capital. I'm currently using the free versions of Evernote and Grammarly, and
                                perhaps in the future, I'll use Amazon to turn this blog into a book for sale. What a
                                privilege!<br><br>
                                Even if this book goes unread, even if it becomes the least-read book in the world, it
                                doesn't matter. How would I learn if I don't try? Why should I let the fear of failure or
                                the need for perfection defeat me?<br>
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
                <other-blogs :next="3" :previous="4"></other-blogs>
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
            pageTitle: 'Believing in yourself when no one else is',
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
