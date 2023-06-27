<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/insecurites.jpg')"></div>
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
                            <h3 class="title">Now that’s a dangerous one...</h3>
                            <p>
                                We all seem to have them but sometimes it’s so intrinsic
                                that one might not even notice that at times we seek validation from outside to cure our
                                insecurities without even realizing we are having them.
                                <br>
                                <br>
                                It has the potential to manifest in many forms. Imagine you are born, raised and
                                cultured in a country. We are more or less confident about the things we can do and the
                                things we cannot do, what can you do with whom and what cannot do with anybody.
                                <br>
                                <br>
                                It varies depending on the country. Since we are all migrating and intermingling our
                                cultures all the time, it can sometimes become problematic, especially if we become the
                                minority population in the newly migrated country.
                                <br>
                                <br>
                                Suddenly what we do might seem weird to others. And the percentage of the population
                                that feels weird about our actions is the majority so they cannot be ignored as well.
                                That kind of forces us to realize it and change the behaviour that we had been
                                accustomed to for years and in the majority of cases without even realising that we were
                                doing it.
                                <br>
                                <br>
                                It takes a third person to point it out for us to realize that it was that habit which
                                is weird to the rest of the population. As nowadays people do not say a thing thinking
                                that would be rude, it just makes it harder to guess. We are forced to assume or ask
                                from our closest friends which might sometimes be embarrassing as well.
                                <br>
                                <br>
                                But that has the potential to forge us into something much stronger. A better
                                personality for the likes of which the world hasn’t seen before.
                                <br>
                                <br>
                                That being said, a good act of acknowledgement can go a long way. I still remember when
                                I migrated to Spain and it was 3 - 4 months of working for a big company a colleague of
                                the company personally acknowledged that I was doing something that they could never
                                have done, Migrate to a new country where they eat different food, speak a different
                                language, have a foreign culture in the hopes of assuming that the culture is open
                                enough to integrate me into it at least to the extent that I might not feel left out of
                                it for the duration of my stay in Spain.
                                <br>
                                <br>
                                And it has integrated me with open arms in many ways which makes me extremely happy. I
                                am sure millions or even billions of people are doing that nowadays across the globe and
                                I am insignificant when speaking of integration of such magnitude.
                                <br>
                                <br>
                                But I guess we are focusing on the insecurities which sometimes decide the fates of our
                                lives if we are not cognizant enough to realize that it is the insecurity inside me
                                which is currently speaking and choose to take appropriate action considering that
                                insecurity.
                                <br>
                                <br>
                                It’s hard, really hard. sometimes the only way is to prove to yourself that you can do
                                it irrespective of what your subconscious might feel about and give your everything at
                                it. I guess that is probably one of the rare circumstances where I would use my Will
                                power to do things.
                                <br>
                                <br>
                                As Will power is a finite resource and exhausting it might us unmotivated for a very
                                long time. Tread there very carefully.
                                <br>
                                <br>
                                People who have worked out can relate to the fact that when we try and get our body to
                                shape we are forced to push the limits of our body and at times when we try to convince
                                ourselves that we are going to aim for just a little more than we can handle our
                                subconscious goes like
                                <br>
                                <br>
                                “No you idiot, you will fail, you can’t do it and you never had before”
                                <br>
                                <br>
                                And every single one of us who are in any reasonable shape has made it past that using
                                our sheer Will to suppress our subconscious and do it anyway.
                                <br>
                                <br>
                                Sometimes the subconscious accepts it in one go, sometimes in the hundredth. It’s the
                                capacity to prove yourself to your subconscious that you can do it and you will do it
                                which will give you the confidence to move forward in life with your head held high
                                irrespective of the insecurities which are also an integral part of us.
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
            pageTitle: 'Insecurites',
            audioPath: "https://audio.blitzbudget.com/psychology/insecurites.mp3",
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
