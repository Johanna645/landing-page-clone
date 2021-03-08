/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import mainPicture from './pictures/mainPicture.gif';
import aboutMePicture from './pictures/aboutMePicture.png';
import blogPicture1 from './pictures/blogPicture1.jpg';
import blogPicture2 from './pictures/blogPicture2.jpg';
import blogPicture3 from './pictures/blogPicture3.jpg';
import blogPicture4 from './pictures/blogPicture4.jpg';
import blogPicture5 from './pictures/blogPicture5.jpg';
import facebookLogo from './pictures/facebookLogo.png';
import instagramLogo from './pictures/instagramLogo.png';
import twitterLogo from './pictures/twitterLogo.png';

const headerStyle = css`
  background-color: #d7f1e7;
  height: 60px;
`;

const bodyStyle = css`
  padding-left: 200px;
  padding-right: 200px;
  background-color: #d7f1e7;
  text-align: center;
  color: #008080;
  font-family: 'playfair display', Georgia, Times, 'Times New Roman', serif;
  line-height: 1.7;

  h1 {
    font-size: 40px;
    font-weight: bold;

    /*font-family: font used in template is something extra imported, so went with just cursive, which is a bit different (broader than the original);*/

    margin-block-start: 0;
  }

  .special {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 24;
  }

  .column {
    color: #808080;
  }

  h2 {
    color: #f68b8b;
    font-weight: bold;
    padding-top: 20px;
  }

  h3 {
    color: #f68b8b;
  }

  a {
    font-size: 30px;
    font-weight: bold;
    color: #008080;
  }
`;

const textbox = css`
  padding-left: 300px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  width: 30%;

  input {
    padding-bottom: 9px;
    height: 36px;
  }

  button {
    width: fit-content
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    height: 46px;
    background-color: #f68b8b;
    color: white;
    padding: 11 15;
    :hover {
      background-color: #b83232;
    }
`;

const columnStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 50% 50%;
`;

const blogBox = css`
  display: grid;
  grid-template-columns: 1fr;
  width: 300px;
  height: 300px;
  line-height: 1.2;
`;

const blogHeading1 = css`
  font-size: 20px;
  font-weight: bold;
`;

const singleBlueLine = css`
  color: #00add8;
  margin-bottom: solid #00add8 2px;
`;

const footerStyle = css`
  height: 240px;
  display: inline-block;
  a {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 12px;
    color: #00add8;
  }
  p {
    text-align: right;
  }
`;

function App() {
  return (
    <div>
      <header css={headerStyle} />
      <div css={bodyStyle}>
        <section>
          <h1>
            <em>You're invited to...</em>
          </h1>
          <img src={mainPicture} alt="the Inside Scoop" />
          <p class="special">
            A free 5-day livestream event where I’ll take you on a
            behind-the-scenes tour of my most successful passion projects!
          </p>
        </section>
        <hr />
        <section>
          <h2>For each project I’ll share...</h2>
          <ul>
            <li>
              <strong>How I came up with each idea </strong>(plus how much time
              + money it took to bring it to life)
            </li>
            <li>
              <strong>The EXACT tangible outcomes each project led to </strong>
              (income, clients, followers, book deal, etc.)
            </li>
            <li>
              <strong>
                What lessons I learned and what I’d do differently now{' '}
              </strong>
              (so you can learn from my mistakes)
            </li>
          </ul>
          <p class="column">
            <strong>
              These videos will only be available to watch for *1 week* after
              recording unless you register for this event via email, so don’t
              delay!{' '}
            </strong>
            If you register, you'll receive a link with lifetime access to the
            video playbacks, so you'll always have the inside scoop on my
            creative marketing strategies.
          </p>
          <h2>Sign up to receive reminders & video playbacks!</h2>
          <div css={textbox}>
            <h3>Email Address</h3>
            <input />
            <h3>First Name</h3>
            <input /> <br />
            <button>Sign me up for the scoop!</button>
          </div>
        </section>
        <hr />
        <section>
          <h2>Here’s a quick look at our inside scoop schedule:</h2>
          <div css={columnStyle}>
            <div>
              <div css={blogBox}>
                <img src={blogPicture1} alt="Daily Dishonesty" width="300px" />
              </div>
              <div css={blogBox}>
                <img
                  src={blogPicture2}
                  alt="Ex Boyfriend Tears"
                  width="300px"
                />
              </div>
              <div css={blogBox}>
                <img
                  src={blogPicture3}
                  alt="Will Letter for Lunch"
                  width="300px"
                />
              </div>
              <div css={blogBox}>
                <img src={blogPicture4} alt="No Photos Please" width="300px" />
              </div>
              <div css={blogBox}>
                <img src={blogPicture5} alt="Flour Crowns" width="300px" />
              </div>
            </div>

            <div>
              <div css={blogBox}>
                <span>
                  <p css={blogHeading1}>
                    Day 1 <span class="column">/ May 6th at 12pm EST</span>
                  </p>
                </span>

                <a href="#1">Daily Dishonesty</a>

                <p class="column">
                  In 2012, I started a lettering blog that chronicled all of the
                  little white lies my friends and I told in college. Little did
                  I know it would go viral and land me a book deal while I was
                  still in school! This is the project that launched my
                  lettering career & gave me the confidence to leave my
                  full-time job to pursue freelance.
                </p>
              </div>

              <div css={blogBox}>
                <span>
                  <p css={blogHeading1}>
                    Day 2 <span class="column">/ May 7th at 12pm EST</span>
                  </p>
                </span>

                <a href="#1">Ex Boyfriend Tears</a>
                <p class="column">
                  A particular nasty break up inspired a line of cups and flasks
                  called Ex Boyfriend Tears. I was originally only planning on
                  producing about 50 for fun, but they got shared like crazy
                  online...and I ended up selling over 600 of them. Nasty Gal
                  (RIP) bought a wholesale order from me, and Urban Outfitters
                  even <span css={singleBlueLine}>ripped me off</span>!
                </p>
              </div>

              <div css={blogBox}>
                <span>
                  <p css={blogHeading1}>
                    Day 3 <span class="column">/ May 8th at 12pm EST</span>
                  </p>
                </span>

                <a href="#1">Will Letter for Lunch</a>
                <p class="column">
                  I started bartering restaurant chalkboard menus for the exact
                  menu items I lettered. Within 1 year, I had practiced
                  lettering and eaten delicious free food at over 30 restaurants
                  in New York City. Plus, I built my chalk lettering portfolio
                  up and landed projects with Chobani, Samuel Adams, and
                  Microsoft as a result.
                </p>
              </div>

              <div css={blogBox}>
                <span>
                  <p css={blogHeading1}>
                    Day 4 <span class="column">/ May 9th at 12pm EST</span>
                  </p>
                </span>

                <a href="#1">No Photos Please</a>
                <p class="column">
                  For all of 2016, I traveled and worked around the world. In
                  order to spend less time looking at a screen, I challenged
                  myself to document my trip in travel drawings. I lettered my
                  way around the world and shared my drawings, not travel pics,
                  on social media. The result? Improved drawing skills and tons
                  of new followers!
                </p>
              </div>

              <div css={blogBox}>
                <span>
                  <p css={blogHeading1}>
                    Day 5 <span class="column">/ May 10th at 12pm EST</span>
                  </p>
                </span>
                <a href="#1">Flour Crowns</a>
                <p class="column">
                  I decided to take a pun way too far and put flours instead of
                  flowers in my hair. Why? Mostly for fun, but also to become
                  more associated with the food world because I knew I wanted to
                  work on a cookbook in the future. This was a delicious baby
                  step in that direction without distracting from my lettering
                  career too much.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <h3>A lil' bit about me!</h3>
          <img src={aboutMePicture} alt="About me" />
          <p class="column">
            Hello! My name is Lauren Hom, and I'm a designer & letterer who's
            used passion projects to shape her career (and teaches others how to
            do the same). In 2014, I left my 9-to-5 job in advertising to start
            my own creative studio, Hom Sweet Hom. Since then, I've designed for
            clients like Google, Starbucks, and TIME Magazine, and my work has
            been recognized by the Type Directors Club, Communication Arts, and
            the Webby Awards. My motto is, and always will be, "Work hard, snack
            often."
          </p>
          <span>
            <img src={facebookLogo} alt="facebook" width="24px" />
            <img
              src={twitterLogo}
              alt="twitter"
              width="24px"
              margin-right="10px"
            />
            <img src={instagramLogo} alt="instagram" width="24px" />
          </span>
        </section>
        <hr />
        <footer css={footerStyle}>
          <a href="#1">Terms of Use</a>
          <span>
            /<a href="#1">Privacy Policy</a>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
