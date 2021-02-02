import './App.css';
/** @jsxImportSource @emotion/react */
import { css, cx } from '@emotion/react';
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

const header = css`
  margin-left: 20px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>You're invited to...</p>
        <img src={mainPicture} alt="the Inside Scoop" />
        <p>
          A free 5-day livestream event where I’ll take you on a
          behind-the-scenes tour of my most successful passion projects!
        </p>
      </header>

      <body>
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
          <p>
            These videos will only be available to watch for *1 week* after
            recording unless you register for this event via email, so don’t
            delay! If you register, you'll receive a link with lifetime access
            to the video playbacks, so you'll always have the inside scoop on my
            creative marketing strategies.
          </p>
          <h2>Sign up to receive reminders & video playbacks!</h2>
          <p>Email Address</p>
          <input></input>
          <p>First Name</p>
          <input></input> <br />
          <button>Sign me up for the scoop!</button>
        </section>

        <section>
          <div>
            <p>Here’s a quick look at our inside scoop schedule:</p>
            <img src={blogPicture1} alt="Daily Dishonesty" />
            <img src={blogPicture2} alt="Ex Boyfriend Tears" />
            <img src={blogPicture3} alt="Will Letter for Lunch" />
            <img src={blogPicture4} alt="No Photos Please" />
            <img src={blogPicture5} alt="Flour Crowns" />
          </div>

          <div>
            <p>Day 1 / May 6th at 12pm EST</p>
            <a href="#1">Daily Dishonesty</a>
            <p>
              In 2012, I started a lettering blog that chronicled all of the
              little white lies my friends and I told in college. Little did I
              know it would go viral and land me a book deal while I was still
              in school! This is the project that launched my lettering career &
              gave me the confidence to leave my full-time job to pursue
              freelance
            </p>

            <p>Day 2 / May 7th at 12pm EST</p>
            <a href="#1">Ex Boyfriend Tears</a>
            <p>
              A particular nasty break up inspired a line of cups and flasks
              called Ex Boyfriend Tears. I was originally only planning on
              producing about 50 for fun, but they got shared like crazy
              online...and I ended up selling over 600 of them. Nasty Gal (RIP)
              bought a wholesale order from me, and Urban Outfitters even ripped
              me off!
            </p>

            <p>Day 3 / May 8th at 12pm EST</p>
            <a href="#1">Will Letter for Lunch</a>
            <p>
              I started bartering restaurant chalkboard menus for the exact menu
              items I lettered. Within 1 year, I had practiced lettering and
              eaten delicious free food at over 30 restaurants in New York City.
              Plus, I built my chalk lettering portfolio up and landed projects
              with Chobani, Samuel Adams, and Microsoft as a result.
            </p>

            <p>Day 4 / May 9th at 12pm EST</p>
            <a href="#1">No Photos Please</a>
            <p>
              For all of 2016, I traveled and worked around the world. In order
              to spend less time looking at a screen, I challenged myself to
              document my trip in travel drawings. I lettered my way around the
              world and shared my drawings, not travel pics, on social media.
              The result? Improved drawing skills and tons of new followers!
            </p>

            <p>Day 5 / May 10th at 12pm EST</p>
            <a href="#1">Flour Crowns</a>
            <p>
              I decided to take a pun way too far and put flours instead of
              flowers in my hair. Why? Mostly for fun, but also to become more
              associated with the food world because I knew I wanted to work on
              a cookbook in the future. This was a delicious baby step in that
              direction without distracting from my lettering career too much.
            </p>
          </div>
        </section>

        <section>
          <p>A lil' bit about me!</p>
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

        <footer>
          <a href="#1">Terms of Use</a>
          <p>/</p>
          <a href="#1">Privacy Policy</a>
        </footer>
      </body>
    </div>
  );
}

export default App;
