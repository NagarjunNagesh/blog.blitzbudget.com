<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/should-you-give-importance-to-getting-wealthy.jpg')"></div>
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
                            <h3 class="title">Like it or not! Without money,..</h3>
                            <p>
                                you will most likely starve to death if you are not in
                                one of the most fortunate countries which provides social security.
                                <br>
                                <br>
                                Damn, money is so much more important in the US, only because there is no Social
                                Security, Honestly removing the Social Security made money the only thing in the bucket.
                                That is honestly too much man!!
                                <br>
                                <br>
                                Also in India by the way and in many other parts of the world. If you didn’t have money,
                                you would lose your social circle and the government already does not care, so you would
                                just be left to die because you couldn’t even pay for the hospitals right ??
                                <br>
                                <br>
                                Heck, what is motivating me to study money and how to be truly wealthy? It is the need
                                to be as far away from risk, if we need to keep moving I would rather move towards more
                                freedom and more financial and social power than the other direction.
                                <br>
                                <br>
                                Who would move in the other direction right? You would be a surprised man! Seriously. It
                                is so hard to make money and even harder to retain it and near impossible to be so good
                                at it that it makes so much money that you don’t care about money anymore.
                                <br>
                                <br>
                                Don’t spend like you don’t care about money! You will just end up with no money by the
                                way as long as you are a multi-millionaire.
                                <br>
                                <br>
                                I no longer use the term rich and have moved on to the Yerma wealthy because rich is so
                                polluted that it means owning stuff right? If you own a Gucci or a Rolce Royce are you
                                truly a rich man!?
                                <br>
                                <br>
                                I am almost tired of hearing stories about people buying a BMW and not having enough
                                money to maintain it. God, it’s a no-brainer! Don’t buy it if you cannot afford to pay
                                cash for it…
                                <br>
                                <br>
                                I still remember the days when I was poor. It was when I first came to Spain and even
                                though they provided a paid-for home including the bills. I would get around 500 euros
                                as an allowance per month to live in Spain.
                                <br>
                                <br>
                                I felt like I was a poor man. Luckily it was the first time that I felt like that
                                because I was living a poor person's life in the UK when I did my masters and was used
                                to it by then. It was only after my wife got a full-time job that we were truly able to
                                afford to live like a decent human beings.
                                <br>
                                <br>
                                I am so thankful for being able to buy a decent 55 m2 building and live in it. But have
                                I achieved what I wanted in life and should I just give up wanting for more and keep
                                calm and chill??
                                <br>
                                <br>
                                That is so counterintuitive man! Honestly. Staying in the same place requires you to
                                grow by at least the percentage equivalent to the inflation in your country.
                                <br>
                                <br>
                                So imagine the people who have villainized the capitalist systems and are actively
                                working to destroy the system and move away from capitalism. What do you think they are
                                doing to themselves. I am pretty sure that they would just do more harm to themselves
                                than to the system.
                                <br>
                                <br>
                                It’s not the system that is the root cause of the injustice man. More than 99% of the
                                species that were present at the inception of the earth are just no more. Doesn’t that
                                single factor alone make us one of the most privileged beings on earth that has ever
                                lived ???
                                <br>
                                <br>
                                Just enjoy life, help people and the earth itself by being a responsible human being and
                                move on! There is so much money in the system that living poor just makes no sense. I
                                know living poor is never a choice for most people.
                                <br>
                                <br>
                                There are injustices in the system and a certain percentage of the population is
                                consciously keeping the other population poor for personal benefits. I am not talking
                                about the poor people who are already doing everything in their power to do whatever it
                                is that they are doing.
                                <br>
                                <br>
                                I am talking about the lazy ones who are just blaming the system and living a life of
                                misery! And those who live a comfortable life now think that you have made it live and
                                have enough money.
                                <br>
                                <br>
                                If you have enough money to maintain the same lifestyle factoring in all the future
                                inflations and fluctuations okay! Hats off! For those living barely comfortably as it
                                is. Just do something in your power. It could be something that is going to enhance your
                                ability to gain more money man! Just do it! Life is worth living to its fullest! Keep
                                going, man! One day you will reach there.
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
                <other-blogs :next="17" :previous="18"></other-blogs>
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
            pageTitle: 'Should you give importance to getting wealthy?',
            audioPath: "https://audio.blitzbudget.com/psychology/should-you-give-importance-to-getting-wealthy.mp3",
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
