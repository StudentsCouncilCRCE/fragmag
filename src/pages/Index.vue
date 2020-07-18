<template>
  <Layout :showLogo="false">
    <div class="container">
      <css-doodle>
        :doodle { @grid: 500x1/ 40vmin; perspective: 12vmin; } @place-cell:
        center; @size: 40% 1px; will-change: transform, opacity;
        transform-style: preserve-3d; background: linear-gradient(to left,
        @multi(@p([2-4]), @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d)), transparent
        @r(50%) ); animation: move @r(1s, 2s, .1) linear infinite;
        animation-delay: -@r(.1s, 2s); --trans: translateX(50%)
        rotateX(@r(-180deg, 180deg)) rotateY(@r(-180deg, 180deg))
        rotateZ(@r(-180deg, 180deg)); transform-origin: 0 center; transform:
        var(--trans) scale(2); opacity: 0; @keyframes move { 20% { opacity: 1; }
        100% { transform: var(--trans) scale(0); } }
      </css-doodle>
    </div>
    <div class="main-content">
      <h1 id="fragmag">FRAGMAG</h1>
      <div class="sub-content">
        <h2>Catalyse</h2>
        <blockquote style="text-align:left;">
          Catalyse: Cause or Accelerate (a reaction) by acting as a catalyst.
        </blockquote>
        <br />
        <p>
          Welcome to a mercurial world backed by the latest technological
          advancements. Today, the slow and steady cannot win the race, but the
          faster and smarter one can. Just as a Catalyst that speeds up a
          chemical reaction, we as individuals also need to catalyse ourselves
          to achieve all that we desire.
        </p>
        <p>
          Catalyse your aim & level up your game. Catalyse your life's mission.
          Catalyse the most influential factor for success, that is, self-esteem
          and see the magic that you create for your very own self! Believing
          that you can do it and deserve it, will help you to conquer the world!
        </p>
        <p>
          Fr. CRCE has been a focal point in the development of a student's
          personality. It has provided the students with an opportunity to have
          an all-round development. It has created a platform for the students
          to stimulate their talents/hobbies by participating in numerous
          activities apart from academics. CRCE has given all the students an
          excellent opportunity to catalyse them and to pass out not just as
          Engineers but future entrepreneurs & CEO's.
        </p>
        <p>
          With the theme for this year's edition of FragMag, we wish to convey a
          message that whatever you do, do it to the best of your ability and
          act fast upon it because the opportunity once lost may not be yours
          soon. Time is not a factor; it's the only factor.
        </p>
        <p>
          Your aim should not be to participate but to secure a podium finish.
          Catalyse yourself See the difference. Make it happen.
        </p>
      </div>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.container {
  opacity: 0.75;
  display: flex;
  z-index: -1000;
  margin: 1rem 5rem;
  position: absolute;
  $breakpoint-tablet: 768px;
  @media (min-width: $breakpoint-tablet) {
    margin: 5rem 28rem;
  }
}
.main-content {
  #fragmag {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 3.5rem;
    font-weight: normal;
    font-family: "Saira Stencil One", cursive;
    -webkit-text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
    $breakpoint-tablet: 768px;
    @media (min-width: $breakpoint-tablet) {
      font-size: 8.5rem;
      letter-spacing: 2px;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
.sub-content {
  padding: 0 0.5rem;
  text-align: justify;
  $breakpoint-tablet: 768px;
  @media (min-width: $breakpoint-tablet) {
    padding: 0 5rem;
  }
}
</style>
