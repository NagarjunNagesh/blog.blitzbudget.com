<template>
  <div class="wrapper blog-posts">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg44.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              A Place to learn about personal finance and live an independant
              life.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 ml-auto mr-auto">
          <h2 class="title">Personal Finance</h2><br />
          <card type="blog" plain v-for="post in blogposts" :key="post.url">
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded" :src="post.image.src"
                    :alt="post.image.alt" />
                </div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link :to="post.url">{{ post.title }}</nuxt-link>
                </h3>
                <p class="card-description">
                  {{ post.description }}<nuxt-link :to="post.url">
                    Read
                    More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/what-is-money.jpg" alt="Personal Finance 1: What is money?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/what-is-money/">Personal Finance 1: What is Money?</nuxt-link>
                </h3>
                <p class="card-description">These are some of the words which evoke extreme emotions. Love is prevalent
                  in the society. We learn to express them from the moment we are born. Nobody has to
                  expressly teach us how to love. They are embedded in our DNA. However the same cannot be told for
                  money. Ask yourself what is money?<nuxt-link to="/personal-finance/what-is-money/"> Read More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/where-should-we-begin.jpg"
                    alt="Personal Finance 2: Where should we Begin?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/where-should-we-begin/">Personal Finance 2: Where
                    should we
                    Begin?</nuxt-link>
                </h3>
                <p class="card-description">We all have to start from wherever we are today. But to be financially
                  successful where do we start from? Let’s find out, Which statement resonates with
                  you?<nuxt-link to="/personal-finance/where-should-we-begin/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded" src="/img/personal-finance/bg-1.jpg"
                    alt="Personal Finance 3: Why the Rich get Richer?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/why-the-rich-get-richer/">Personal Finance 3: Why the
                    Rich
                    get Richer?</nuxt-link>
                </h3>
                <p class="card-description">Certainly, the possibility of living in a civilized world develops the
                  opportunity for inequality. The opportunists seize every opportunity to make a profit. They deserve
                  every single penny they make out of it while the
                  others stay in ignorance of these opportunities.<nuxt-link
                    to="/personal-finance/why-the-rich-get-richer/">
                    Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/are-you-rich-if-you-own-a-bmw.jpg"
                    alt="Personal Finance 4: Are you Rich if you own a BMW?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/are-you-rich-if-you-own-a-bmw/">Personal Finance 4:
                    Are you
                    Rich if you own a BMW?</nuxt-link>
                </h3>
                <p class="card-description">While studying my master’s in Coventry University, I used to live with 5
                  other friends of which 3
                  of them were really big fans of cars. As far as I know, we all come from a middle class family who
                  could not afford to sponsor our
                  living expenses in UK with the income from India.<nuxt-link
                    to="/personal-finance/are-you-rich-if-you-own-a-bmw/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/is-your-home-an-asset-or-liability.jpg"
                    alt="Personal Finance 5: Is your Home an Asset or a Liability?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/is-your-home-an-asset-or-liability/">Personal Finance
                    5: Is
                    your Home an Asset or a Liability?</nuxt-link>
                </h3>
                <p class="card-description">We call it home because we live there with our loved ones; else it is a
                  house, a real estate
                  property, an asset or a liability. Your financial planner / real estate agent calls your home an
                  asset. But what is the difference between an asset and a liability in the first place? Is your
                  home an asset or a liability? Well, you are going to pay a rent for the house you are living in
                  if you do not own that house.<nuxt-link to="/personal-finance/is-your-home-an-asset-or-liability/">
                    Read
                    More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/self-analysis-understanding-your-habits.jpg"
                    alt="Personal Finance 6: Self Analysis! Understanding your habits?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/self-analysis-understanding-your-habits/">Personal
                    Finance
                    6: Self Analysis! Understanding your habits?</nuxt-link>
                </h3>
                <p class="card-description">We were born helpless, unable to speak or feed ourselves on our own. The
                  factors that influence who we become is to a large extent from the outside. Isn’t it? Yes but we all
                  know the one person who despite all their circumstances succeeded to a large extent.
                  <nuxt-link to="/personal-finance/self-analysis-understanding-your-habits/"> Read
                    More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/self-motivation-a-necessity-for-success.jpg"
                    alt="Personal Finance 7: Self Motivation! A necessity for success?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/self-motivation-a-necessity-for-success/">Personal
                    Finance
                    7: Self Motivation! A necessity for success?</nuxt-link>
                </h3>
                <p class="card-description">Self-Motivation. Some time that is the only thing you will have in order to
                  push yourself towards success. Waking up every day feeling that you are causing a positive
                  change in other people’s life and making it better for everybody as a community can be a motivator.
                  Purpose can be the biggest motivator at times of hardship.<nuxt-link
                    to="/personal-finance/self-motivation-a-necessity-for-success/"> Read
                    More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/find-your-desire-for-financial-freedom.jpg"
                    alt="Personal Finance 8: Find your desire for Financial Freedom" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/find-your-desire-for-financial-freedom/">Personal
                    Finance
                    8: Find your desire for Financial Freedom</nuxt-link>
                </h3>
                <p class="card-description">Why do human beings do what they do? Why do we need to be financially free?
                  Some of them make a
                  killing. Some sacrifice their life in the hope of providing a better life for their children. People
                  are pushed by needs. There are five needs which foster the desire for financial freedom.
                  They are the most fundamental needs and everyone has a collection of these needs.<nuxt-link
                    to="/personal-finance/find-your-desire-for-financial-freedom/"> Read
                    More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/find-what-drives-you-to-achieve.jpg"
                    alt="Personal Finance 9: Find what Drives you to Achieve" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/find-what-drives-you-to-achieve/">Personal Finance 9:
                    Find
                    what Drives you to Achieve</nuxt-link>
                </h3>
                <p class="card-description">Let’s find out what drives us to achieve. A good number of people do the
                  jobs they do not love to
                  earn the riches they desire. If you have just enough determination, passion and desire to
                  achieve and consistently outperform, financial success will be the byproduct. But we all know
                  the person who works for more than 10 hours a day.<nuxt-link
                    to="/personal-finance/find-what-drives-you-to-achieve/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/include-your-partner.jpg"
                    alt="Personal Finance 10: Include your Partner" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/include-your-partner/">Personal Finance 10: Include
                    your
                    Partner</nuxt-link>
                </h3>
                <p class="card-description">Your partner is one of the most influential people in your life. The
                  importance of having a right
                  partner in life is realized in the emotional and financial aspect of your life. With increasing
                  equality towards women even in the developing nations, it is an eventuality that
                  they will be treated equally to men around the world, a safer world where they have equal
                  rights.<nuxt-link to="/personal-finance/include-your-partner/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/power-of-dreaming.jpg"
                    alt="Personal Finance 11: The Power of Dreaming" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/power-of-dreaming/">Personal Finance 11: The Power of
                    Dreaming</nuxt-link>
                </h3>
                <p class="card-description">The dream has to be justified with a
                  definiteness of purpose. The purpose then drives us to plan and to take action. Keep repeating
                  the action with discipline and there you have it! A glimpse of the path to success. Assuming you are
                  dreaming to become successful in the field that you love, you would find it
                  relatively easy to learn from your mistakes. Learning from the mistakes fine tunes your skills &
                  improves it to an extent that you become more and more valuable day by day.<nuxt-link
                    to="/personal-finance/power-of-dreaming/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/do-you-really-need-a-budget-to-become-financially-free.jpg"
                    alt="Personal Finance 12: Do you really need a budget to become Financially Free?" />
                </div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/do-you-really-need-a-budget-to-become-financially-free/">Personal
                    Finance 12:
                    Do you really need a budget to become Financially Free?</nuxt-link>
                </h3>
                <p class="card-description">We all love freedom. Doesn’t budgeting restrict our freedom of spending?
                  Yes, it does restrict our freedom to spend. That’s the whole point but it will not feel that way
                  when you get used to the budget.The initial inertia required to start practicing to budget is minimal.
                  But how many of them stick
                  to the budget every month? What about one year? 10 years and your lifetime?<nuxt-link
                    to="/personal-finance/do-you-really-need-a-budget-to-become-financially-free/"> Read
                    More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/i-cannot-save-a-penny-more.jpg"
                    alt="Personal Finance 13: I cannot save a Penny More" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/i-cannot-save-a-penny-more/">Personal Finance 13: I
                    cannot
                    save a Penny More</nuxt-link>
                </h3>
                <p class="card-description">Why aren’t people saving? You’ll start saving money when your future needs
                  become more important than your current desires. People spend on things which they do not need. One
                  could easily avoid regular restaurant expenses
                  by cooking from home. That’s the reason why people are not saving. Your current wants outweigh
                  the necessity to save more for tomorrow.<nuxt-link to="/personal-finance/i-cannot-save-a-penny-more/">
                    Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/income-allocation-strategy.jpg"
                    alt="Personal Finance 14: Income Allocation Strategy" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/income-allocation-strategy/">Personal Finance 14:
                    Income
                    Allocation Strategy</nuxt-link>
                </h3>
                <p class="card-description">The income allocation blueprint is a suggestion to allocate a certain
                  portion of your income. This income allocation suggestion works really well when you include your
                  partner as well. To
                  prevent you from calculating all the budgeting allocation yourself. To help you understand the
                  strategy better, all of the components mentioned in the strategy is
                  broken down and explained in bullet points.<nuxt-link
                    to="/personal-finance/income-allocation-strategy/">
                    Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/emergency-fund-why-is-it-important.jpg"
                    alt="Personal Finance 15: Emergency Fund: Why is it important?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/emergency-fund-why-is-it-important/">Personal Finance
                    15:
                    Emergency Fund: Why is it important?</nuxt-link>
                </h3>
                <p class="card-description">Have you ever noticed that we keep staring at someone for no reason? It
                  makes everyone
                  uncomfortable. We only do so when the emotions are strong enough and even then rarely consistently
                  unless the
                  other reciprocates. Other 4 senses do not have this intimate interaction. Any other species which
                  relies on smell or
                  hearing does not have this intimate emotional interaction.<nuxt-link
                    to="/personal-finance/emergency-fund-why-is-it-important/"> Read More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/debt-analysis-analysing-your-financial-past.jpg"
                    alt="Personal Finance 16: Debt Analysis: Analysing Your Financial Past?" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/debt-analysis-analysing-your-financial-past/">Personal
                    Finance 16: Debt Analysis: Analysing Your Financial Past?</nuxt-link>
                </h3>
                <p class="card-description">How much are you in debt? You need to analyze the past. If you are in debt
                  make sure you do not
                  stack up anymore. That’s half the battle against debt won! The need to stop stalking up more
                  debt has to come from within. Knowledge of how the money work is the first step against personal debt.
                  Click the link below to
                  know the basic mechanics of how the money machine works as explained by Ray Dalio (67th Richest
                  Man in the world)<nuxt-link to="/personal-finance/debt-analysis-analysing-your-financial-past/">
                    Read
                    More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/debt-management-strategy.jpg"
                    alt="Personal Finance 17: Debt Management Strategy" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/debt-management-strategy/">Personal Finance 17: Debt
                    Management Strategy</nuxt-link>
                </h3>
                <p class="card-description">Debt management requires your utmost commitment to get rid of debt. The
                  first step in making sure
                  that you start reducing your debt is an emergency fund. You need to accumulate six months of your
                  income as an emergency fund before venturing into debt
                  repayments. You do not know what is going to happen the next month.<nuxt-link
                    to="/personal-finance/debt-management-strategy/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/credit-cards-how-to-increase-your-credit-score.jpg"
                    alt="Personal Finance 18: Credit Cards: How to Increase your Credit Score" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/credit-cards-how-to-increase-your-credit-score/">Personal
                    Finance 18: Credit Cards: How to Increase your Credit Score</nuxt-link>
                </h3>
                <p class="card-description">If a credit card is a bad tool to be used for spending on budget and
                  repaying the borrowed amount
                  immediately, then we are talking about having no credit score. If one does not have any credit score
                  then you will not be granted any loan or probably a minimum
                  loan amount.<nuxt-link to="/personal-finance/credit-cards-how-to-increase-your-credit-score/">
                    Read
                    More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/home-loan-is-it-a-boon-in-disguise.jpg"
                    alt="Personal Finance 19: Home Loan: Is it a Boon in Disguise" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/home-loan-is-it-a-boon-in-disguise/">Personal Finance
                    19:
                    Home Loan: Is it a Boon in Disguise</nuxt-link>
                </h3>
                <p class="card-description">It all starts with a dream of having a roof on top of one’s head for the
                  sake of their family. But many end up not being able to afford to buy a home with cash. Liberate your
                  income by stepping down the expenses or stepping up your salary. Start saving a
                  substantial portion of your salary towards owning a home.<nuxt-link
                    to="/personal-finance/home-loan-is-it-a-boon-in-disguise/"> Read More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/savings-management-strategy.jpg"
                    alt="Personal Finance 20: Savings Management Strategy" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/savings-management-strategy/">Personal Finance 20:
                    Savings
                    Management Strategy</nuxt-link>
                </h3>
                <p class="card-description">Short-term investment vessel includes your car as well. Car is a
                  depreciating asset but you could put
                  the money in a fixed deposit till you accumulate an adequate amount in order to buy a car.  The last
                  thing which you should be doing is to buy a car on a loan. Save your allocated budget as a recurring
                  deposit if you are in India or in a fixed deposit. Keep it
                  safe and risk-free.<nuxt-link to="/personal-finance/savings-management-strategy/"> Read More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/mark-zuckerberg-didnt-save-his-way-to-financial-freedom.jpg"
                    alt="Personal Finance 21: Mark Zuckerberg Didn’t Save His Way To Financial Freedom" />
                </div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/mark-zuckerberg-didnt-save-his-way-to-financial-freedom/">Personal
                    Finance
                    21: Mark Zuckerberg Didn’t Save His Way To Financial Freedom</nuxt-link>
                </h3>
                <p class="card-description">Why do people think saving is the key to wealth when the most wealthy people
                  didn’t get to the
                  top by saving? A really good question. But it lacks depth. Do you really think that a really talented
                  could
                  achieve peak wealth with the effort which he alone put? The answer is NO. We all know that even the
                  most talented person could only reach the pinnacle of wealth with the
                  help of their relatives.<nuxt-link
                    to="/personal-finance/mark-zuckerberg-didnt-save-his-way-to-financial-freedom/"> Read
                    More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/how-to-save-your-way-to-achieve-your-dream.jpg"
                    alt="Personal Finance 22: How to Save Your Way to Achieve Your Dream" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/how-to-save-your-way-to-achieve-your-dream/">Personal
                    Finance 22: How to Save Your Way to Achieve Your Dream</nuxt-link>
                </h3>
                <p class="card-description">There is one thing that we know with certainty, i.e. in today’s economic
                  situation a single
                  steady income stream is not enough to sustain a family. Feudalism supported loyalty; The Lord provided
                  land and safety in exchange for service and
                  loyalty. Communism supported equality; Every person is equal economically and hence ensure
                  everyone is suffering in equal misery or enjoys equal benefits.<nuxt-link
                    to="/personal-finance/how-to-save-your-way-to-achieve-your-dream/">
                    Read
                    More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/buying-a-car-the-right-way.jpg"
                    alt="Personal Finance 23: Buying a Car the Right Way" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/buying-a-car-the-right-way/">Personal Finance 23:
                    Buying a
                    Car the Right Way</nuxt-link>
                </h3>
                <p class="card-description">Every plan, savings or budget is personalized and cannot be implemented by
                  your neighbor. It
                  won’t be the right fit for them. So is your car.Which car should you buy? A Ferrari? A Toyota? or a
                  Mini Cooper? Do you want it new or don’t mind if it is a few years old? Is a 2 seater enough for you?
                  How about a 5 seater?<nuxt-link to="/personal-finance/buying-a-car-the-right-way/"> Read More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/never-kill-your-golden-goose.jpg"
                    alt="Personl Finance 24: Never Kill Your Golden Goose" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/never-kill-your-golden-goose/">Personl Finance 24:
                    Never
                    Kill Your Golden Goose</nuxt-link>
                </h3>
                <p class="card-description">What does secured capital mean? It means <strong>Minimum Risk and Maximum
                    Security</strong> to me. These are the most common ways to kill your Golden Goose. Bad investment
                  thereby
                  losing the capital and potential return. Secured capital and promised return but you spend your
                  interest earned.<nuxt-link to="/personal-finance/never-kill-your-golden-goose/"> Read More
                  </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/financial-goals-to-achieve-before-you-turn-thirty-five.jpg"
                    alt="Personl Finance 25: Financial Goals to Achieve Before You Turn 35" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/financial-goals-to-achieve-before-you-turn-thirty-five/">Personl
                    Finance 25:
                    Financial Goals to Achieve Before You Turn 35</nuxt-link>
                </h3>
                <p class="card-description">You must have come across a recent study which suggests that you must have
                  saved twice your
                  annual salary before you reach the age of 35 in order to ensure that you retire by 67 having to
                  live a similar lifestyle afterward. As many agree and as many disagree, The fact still remains
                  the same.<nuxt-link to="/personal-finance/financial-goals-to-achieve-before-you-turn-thirty-five/">
                    Read
                    More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/investment-management-strategy.jpg"
                    alt="Personl Finance 26: Investment Management Strategy" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/investment-management-strategy/">Personl Finance 26:
                    Investment Management Strategy</nuxt-link>
                </h3>
                <p class="card-description">The investment management strategy has to be personalized and should satisfy
                  your need. For this reason, I do not provide a tailor made strategy which could satisfy everyone's
                  needs. The above mentioned strategy is a sample blueprint which could be implemented by any individual
                  in India.<nuxt-link to="/personal-finance/investment-management-strategy/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/investing-in-mutual-funds.jpg"
                    alt="Personl Finance 27: Investing in Mutual Funds" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/investing-in-mutual-funds/">Personl Finance 27:
                    Investing
                    in Mutual Funds</nuxt-link>
                </h3>
                <p class="card-description">Mutual funds also known as actively managed funds are the most sorted out
                  forms of investments by
                  the public. The general interest towards the mutual fund being “You do not know the rules of investing
                  in a
                  mutual fund; let the professionals take care of your money and we will beat the market.”<nuxt-link
                    to="/personal-finance/investing-in-mutual-funds/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/investing-in-index-funds.jpg"
                    alt="Personl Finance 28: Investing in Index Funds" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/investing-in-index-funds/">Personl Finance 28:
                    Investing in
                    Index Funds</nuxt-link>
                </h3>
                <p class="card-description">Index funds are low-cost funds which do not require any active management.
                  They typically follow an index and their primary agenda is to reduce the tracking error of the
                  fund. A really good index fund has a minimum tracking error. Since they do not need any fund managers
                  the cost of managing the funds are really low as well.<nuxt-link
                    to="/personal-finance/investing-in-index-funds/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
          <card type="blog" plain>
            <div class="row">
              <div class="col-md-4">
                <div class="card-image"><img class="img img-raised rounded"
                    src="/img/personal-finance/investing-in-fixed-deposits.jpg"
                    alt="Personl Finance 29: Investing in Fixed Deposits" /></div>
              </div>
              <div class="col-md-8">
                <h3 class="card-title">
                  <nuxt-link to="/personal-finance/investing-in-fixed-deposits/">Personl Finance 29:
                    Investing
                    in Fixed Deposits</nuxt-link>
                </h3>
                <p class="card-description">These are one of the most common forms of investment in the developing
                  nations, although not
                  common among developed nations. These play an important role when it comes to managing emergency
                  funds. They are also the least sort after forms of investments but are a good fit for emergency
                  funds.<nuxt-link to="/personal-finance/investing-in-fixed-deposits/"> Read More </nuxt-link>
                </p>
                <div class="author"><img v-lazy="'img/authors/nagarjun.jpg'" alt="..."
                    class="avatar img-raised"><span>Nagarjun Nagesh</span></div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="section">
          <h3 class="title text-center">You may also be interested in</h3>
          <br />
          <div class="row">
            <div class="col-md-4">
              <card type="blog" plain>
                <img slot="image" class="img rounded img-raised" src="img/personal-finance/power-of-dreaming.jpg"
                  alt="Dream" />
                <h6 class="category text-info">Personal Finance</h6>
                <h4 class="card-title">
                  <nuxt-link to="/personal-finance/power-of-dreaming/">The Power of Dreaming</nuxt-link>
                </h4>
                <p class="card-description">
                  It all starts with a dream to become successful in life. The
                  dream has to be justified with a definiteness of purpose. The
                  purpose then drives us to plan and to take action.
                  <nuxt-link to="/personal-finance/power-of-dreaming/"> Read More </nuxt-link>
                </p>
                <div class="author">
                  <img v-lazy="'img/authors/nagarjun.jpg'" alt="..." class="avatar img-raised" />
                  <span>Nagarjun</span>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <card type="blog" plain>
                <img slot="image" class="img rounded img-raised"
                  src="img/personal-finance/are-you-rich-if-you-own-a-bmw.jpg" alt="BMW" />
                <h6 class="category text-success">Personal Finance</h6>
                <h4 class="card-title">
                  <nuxt-link to="/personal-finance/are-you-rich-if-you-own-a-bmw/">Are you Rich if you own a BMW?
                  </nuxt-link>
                </h4>
                <p class="card-description">
                  The majority of millionaires own their cars rather than lease.
                  Approximately 1 in 4 hold the current years model but another
                  25 % have a model that is a four-year-old model.
                  <nuxt-link to="/personal-finance/are-you-rich-if-you-own-a-bmw/">
                    Read More
                  </nuxt-link>
                </p>
                <div class="author">
                  <img v-lazy="'img/authors/nagarjun.jpg'" alt="..." class="avatar img-raised" />
                  <span>Nagarjun</span>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <div class="card card-plain card-blog">
                <div class="card-image">
                  <nuxt-link to="/psychology/the-truth-about-white-lies/">
                    <img class="img rounded img-raised" src="img/psychology/bg18.jpg" alt="Lies" />
                  </nuxt-link>
                </div>
                <div class="card-body">
                  <h6 class="category text-danger">
                    <em class="now-ui-icons media-2_sound-wave"></em> Psychology
                  </h6>
                  <h4 class="card-title">
                    <nuxt-link to="/psychology/the-truth-about-white-lies/">The Truth about White Lies</nuxt-link>
                  </h4>
                  <p class="card-description">
                    Once we establish ourselves as a person who would not shy
                    away from saying white lies as long as we get what we
                    want/prevent bad things from happening by telling the truth.
                    <nuxt-link to="/psychology/the-truth-about-white-lies/">
                      Read More
                    </nuxt-link>
                  </p>

                  <div class="author">
                    <img v-lazy="'img/authors/nagarjun.jpg'" alt="..." class="avatar img-raised" />
                    <span>Nagarjun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import initParallax from "@/utils/initParallax";
export default {
  name: "blog-posts",
  head: {
    title: 'Personal Finance',
  },
  layout: "default",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      blogposts: [
        {
          "image": {
            "src": "img/psychology/should-you-buy-crypto-currency.jpg",
            "alt": "Should you buy Crypto Currency?"
          },
          "url": "/psychology/should-you-buy-crypto-currency",
          "title": "Should you buy Crypto Currency?",
          "tag": "Psychology",
          "date": "Jan 03, 2023",
          "description": "People all around us constantly shouting to buy Crypto including Tom Bilyeu and Robert Kiyosaki author of Rich Dad and poor dad. Understand that those who shout are using crypto as a way to either save a portion of their portfolio of investments"
        }
      ]
    };
  },
  mounted() {
    initParallax();
  },
};
</script>
<style>

</style>
