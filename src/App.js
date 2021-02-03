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

  h1 {
    font-size: 40px;
    /*font-family: ;*/
    margin-block-start: 0;
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
  }

  h3 {
    color: #f68b8b;
  }

  input {
    margin-bottom: 24px;
  }

  button {
    background-color: #f68b8b;
    color: white;
    padding: 11 15 11 15;
    :hover {
      background-color: ;
    }
  }

  a {
    font-size: 30px;
    color: #008080;
  }
`;

const columnStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1px;
  width: 50% 50%;
  padding: 0 10px;
`;

const footerStyle = css`
  height: 120px;
  display: inline-block;
  a {
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
          <h1>You're invited to...</h1>
          <img src={mainPicture} alt="the Inside Scoop" />
          <p>
            A free 5-day livestream event where I’ll take you on a
            behind-the-scenes tour of my most successful passion projects!
          </p>
        </section>
        <hr />
        <section>
          <h2>For each project I’ll share...</h2>
          <ol>
            <li>
              How I came up with each idea (plus how much time + money it took
              to bring it to life)
            </li>
            <li>
              The EXACT tangible outcomes each project led to (income, clients,
              followers, book deal, etc.)
            </li>
            <li>
              What lessons I learned and what I’d do differently now (so you can
              learn from my mistakes)
            </li>
          </ol>
          <p class="column">
            These videos will only be available to watch for *1 week* after
            recording unless you register for this event via email, so don’t
            delay! If you register, you'll receive a link with lifetime access
            to the video playbacks, so you'll always have the inside scoop on my
            creative marketing strategies.
          </p>
          <h2>Sign up to receive reminders & video playbacks!</h2>
          <p>Email Address</p>
          <input />
          <p>First Name</p>
          <input /> <br />
          <button>Sign me up for the scoop!</button>
        </section>
        <hr />
        <section>
          <h2>Here’s a quick look at our inside scoop schedule:</h2>
          <div css={columnStyle}>
            <div>
              <img src={blogPicture1} alt="Daily Dishonesty" width="300px" />
              <img src={blogPicture2} alt="Ex Boyfriend Tears" width="300px" />
              <img
                src={blogPicture3}
                alt="Will Letter for Lunch"
                width="300px"
              />
              <img src={blogPicture4} alt="No Photos Please" width="300px" />
              <img src={blogPicture5} alt="Flour Crowns" width="300px" />
            </div>

            <div>
              <span>
                <p>
                  Day 1 <span class="column">/ May 6th at 12pm EST</span>
                </p>
              </span>

              <a href="#1">Daily Dishonesty</a>

              <p class="column">
                In 2012, I started a lettering blog that chronicled all of the
                little white lies my friends and I told in college. Little did I
                know it would go viral and land me a book deal while I was still
                in school! This is the project that launched my lettering career
                & gave me the confidence to leave my full-time job to pursue
                freelance
              </p>

              <span>
                <p>
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
                even ripped me off!
              </p>

              <span>
                <p>
                  Day 3 <span class="column">/ May 8th at 12pm EST</span>
                </p>
              </span>

              <a href="#1">Will Letter for Lunch</a>
              <p class="column">
                I started bartering restaurant chalkboard menus for the exact
                menu items I lettered. Within 1 year, I had practiced lettering
                and eaten delicious free food at over 30 restaurants in New York
                City. Plus, I built my chalk lettering portfolio up and landed
                projects with Chobani, Samuel Adams, and Microsoft as a result.
              </p>
              <span>
                <p>
                  Day 4 <span class="column">/ May 9th at 12pm EST</span>
                </p>
              </span>

              <a href="#1">No Photos Please</a>
              <p class="column">
                For all of 2016, I traveled and worked around the world. In
                order to spend less time looking at a screen, I challenged
                myself to document my trip in travel drawings. I lettered my way
                around the world and shared my drawings, not travel pics, on
                social media. The result? Improved drawing skills and tons of
                new followers!
              </p>
              <span>
                <p>
                  Day 5 <span class="column">/ May 10th at 12pm EST</span>
                </p>
              </span>
              <a href="#1">Flour Crowns</a>
              <p class="column">
                I decided to take a pun way too far and put flours instead of
                flowers in my hair. Why? Mostly for fun, but also to become more
                associated with the food world because I knew I wanted to work
                on a cookbook in the future. This was a delicious baby step in
                that direction without distracting from my lettering career too
                much.
              </p>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <h3>A lil' bit about me!</h3>
          <img src={aboutMePicture} alt="About me" />
          <p>
            Hello! My name is Lauren Hom, and I'm a designer & letterer who's
            used passion projects to shape her career (and teaches others how to
            do the same). In 2014, I left my 9-to-5 job in advertising to start
            my own creative studio, Hom Sweet Hom. Since then, I've designed for
            clients like Google, Starbucks, and TIME Magazine, and my work has
            been recognized by the Type Directors Club, Communication Arts, and
            the Webby Awards. My motto is, and always will be, "Work hard, snack
            often."
          </p>
          <img src={facebookLogo} alt="facebook" />
          <img src={twitterLogo} alt="twitter" />
          <img src={instagramLogo} alt="instagram" />
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
