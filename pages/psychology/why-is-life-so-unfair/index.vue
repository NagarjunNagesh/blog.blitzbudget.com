<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/why-is-life-so-unfair.jpg')">
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
                            <h3 class="title">Why is there evil in this world?...</h3>
                            <p>
                                There is so much going on in life that sometimes we
                                think what’s the point of so much suffering.
                                <br>
                                <br>
                                Sometimes there is so much deliberate suffering enforced upon us simply by life itself
                                or mostly by other humans that it is possibly not bearable at all.
                                <br>
                                <br>
                                Everything in life could just seem unfair. Well, life in its essence is just unfair.
                                Like it or not. Why should I be born as a child of a humble parent why not a child of
                                Warren Buffet, who got 27 billion in trust funds each. That’s one hell of an amount to
                                inherit even though they had to open an NGO.
                                <br>
                                <br>
                                Everyone knows 95% of the cost in the NGO is just management fees. So they have
                                inherited everything. I could think life is so unfair that it has to be artificially
                                made equal for everybody.
                                <br>
                                <br>
                                Guess what Mao’s Great Leap Forward tried exactly that! Stalin's communist revolution
                                tried exactly that. Mao destroyed the family unit and gathered everyone in communities
                                and even regulated the sex lives. Who says anyone knows anything about fairness!!!
                                <br>
                                <br>
                                As a result, somewhere between 25 million to 45 million people died as a direct result
                                of the Great Leap Forward movement. Almost as many causalities as World War II. The
                                number of people who died as a direct result of Imperialism, World War I, World War II,
                                Stalin's Communist Russia and Mao is somewhere in the hundreds of millions of people.
                                <br>
                                <br>
                                I am just surprised that we did not annihilate ourselves in the 20th century after the
                                invention of nuclear warheads. Now people say we have nuclear heads hundreds of times
                                stronger than the ones that detonated in Hiroshima and Nagasaki.
                                <br>
                                <br>
                                Enough to ensure that the whole world is destroyed for sure man. And the button is there
                                with the leaders of some countries and everything can descend into chaos at any time.
                                Why create Putin right and give him hundreds of Nuclear Warheads?
                                <br>
                                <br>
                                Well if Putin was not born it would have been someone else in his place doing the same
                                thing or worse things man. Imagine if Hitler had Nuclear Weapons!!! I am pretty sure he
                                would have wiped out East Asia and Africa thinking we are all inferior races and killed
                                all the Jews.
                                <br>
                                <br>
                                Let’s face the facts there are horrible people in this world and they would do anything,
                                even kill millions of people simply to stay in power or earn an extra 100 million rubles
                                if they can. They will!!
                                <br>
                                <br>
                                Think about the blast that happened in Beirut! Just because of the mismanagement of tons
                                2750 tons of Ammonium Nitrate by the government. As a direct result of the explosion,
                                300,000 people lost their homes.
                                <br>
                                <br>
                                All hard-working people I am sure in an already civil war-torn country!! We can bare
                                those suffering. We can! It just keeps making us stronger for some reason. I wonder how
                                much suffering one has to endure to emerge stronger, wiser, and richer on the other
                                side.
                                <br>
                                <br>
                                I don’t know man! I do not know. I just know this. Some of us are more fortunate than
                                others simply because of luck and where we were born and the circumstances around us.
                                Let’s learn to appreciate whatever we currently have, and cherish them.
                                <br>
                                <br>
                                If we do not, trust me we will lose it! Anything we do not pay attention to, we lose it!
                                The same goes for money BTW! And most of all people and relationships.
                                <br>
                                <br>
                                Without overall growth in your life, life is meaningless and unfair. I am sure we can
                                all try to make it a little bit tolerable as we learn to navigate this increasingly
                                harsh life.
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
                <other-blogs :next="30" :previous="31"></other-blogs>
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
            pageTitle: 'Why is life so unfair?',
            audioPath: "https://audio.blitzbudget.com/psychology/why-is-life-so-unfair.mp3",
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
