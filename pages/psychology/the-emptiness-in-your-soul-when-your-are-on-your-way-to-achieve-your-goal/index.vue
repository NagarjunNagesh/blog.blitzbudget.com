<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/the-emptiness-in-your-soul-when-your-are-on-your-way-to-achieve-your-goal.jpg')">
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
                            <h3 class="title">Sometimes what I had faced when trying...</h3>
                            <p>
                                to achieve something is that I have truly
                                exhausted
                                every cell in my body emotionally and I just do not have enough to give.
                            </p>
                            <p>
                                When I reach that state. It feels like my soul is empty. I have nothing more to give.
                                And it
                                is most often the time when I try to start playing games and just stop thinking for like
                                a
                                few days and focus on something else.
                            </p>
                            <p>
                                That break could be a few days, months or even years. But that break was necessary in
                                most
                                cases. It was not however the break from creation itself it was just a break from
                                creating a
                                website that I wanted to create but focusing on writing a blog.
                            </p>
                            <p>
                                In some instances, I just stop creating and focus on growing and learning more or just
                                binge-watch for months together. I still do not know why I feel like doing it. But I do
                                it
                                anyway man! If you guys know why do fill me in! Glad to hear your story.
                            </p>
                            <p>
                                That emptiness as I figured stems from the amount of willpower that you use just keep
                                working. Remember waking up and not feeling good about it and just wanting to sleep all
                                day
                                not having to work or even not wanting to see Monday.
                            </p>
                            <p>
                                Monday Blues as they call it is just according to me at least stems from not liking your
                                job
                                and not looking forward to going to your work. It is all the same thing. It would feel
                                like
                                life is forcing you to work because there is no other alternative in life.
                            </p>
                            <p>
                                You would probably be miserable working there after a few years man! Just quit if you
                                can!
                                My wife’s first job in Spain just made her feel bad about herself and he capabilities
                                for
                                the first three years in Spain.
                            </p>
                            <p>
                                I am telling you she did more damage to her health than whatever she could earn as a
                                result
                                of working there. It is just not good for anybody. I guess that’s also a point where I
                                and
                                Grant Cardone disagree right?
                            </p>
                            <p>
                                He is worth millions and I am worth nothing who am I to disagree with him right ?? Well,
                                honestly man, it could be the right advice for a certain percentage of the population
                                but I
                                hardly doubt one size fits 8 billion exists in this world.
                            </p>
                            <p>
                                This is why we have a free society in which we can say what we feel and as long it is
                                constructive it can be heard. And I am willing to conjure that spirit of goodwill to
                                have
                                another contradictory opinion.
                            </p>
                            <p>
                                So moving on!! When feeling a pit in your stomach when you are trying to move towards
                                your
                                goal. It could even be paralyzed with fear but most often it is when you have used your
                                willpower to push forward when you should have listened to your heart and just stopped
                                to
                                focus on other things in your life and get back at it after a while.
                            </p>
                            <p>
                                Most often I was able to do the same thing much more efficiently and much better if I
                                had
                                the positive motivation to do it.
                            </p>
                            <p>
                                If I did not then everything just took longer to do! Everything just was a little bit
                                harder
                                and everything was a little bit more annoying because if only I could finish this goal I
                                could just move on to the next one. But the goal just does not seem to come to fruition
                                no
                                matter how many extra hours I would seem to put in.
                            </p>
                            <p>
                                It is during those times that I have quit and stopped trying to achieve my goal for
                                months
                                or even years altogether but fortunately, I tried to grow in a different dimension in
                                life
                                that I found to be more interesting and that has almost always enriched my rich even
                                more.
                            </p>
                            <p>
                                So no I do not ever regret pausing in my endeavour to achieve my goal. It has only given
                                me
                                more clarity as to why is it that I am trying to achieve the goal. And why is it that I
                                am
                                settings those things as my goals in the first place? it took me a long time to figure
                                out
                                that it was exhaustion! And that's what exhaustion feels like. Have never felt emotional
                                exhaustion before.
                            </p>
                            <p>
                                As a direct result, I do believe that I am becoming a much better human being. So no!
                                Quitting or in other words pausing an endeavour does not mean that you are quitting!!
                                Stop
                                feeling bad about it and just take a deep breath!!! You deserve it!!</p>
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
                <other-blogs :next="22" :previous="23"></other-blogs>
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
            pageTitle: 'The emptiness in your soul when your are on your way to achieve your goal',
            audioPath: "https://audio.blitzbudget.com/psychology/the-emptiness-in-your-soul-when-your-are-on-your-way-to-achieve-your-goal.mp3",
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
