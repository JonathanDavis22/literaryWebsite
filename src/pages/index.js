import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import pic3 from '../images/pic03.jpg';
import pic7 from '../images/pic07.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id='wrapper'>
      <section id='intro' className='wrapper style1 fullscreen fade-up'>
        <div className='inner'>
          <h1>Jonathan Davis</h1>
          <p>A writer of literary fiction from Seattle, WA.</p>
          <ul className='actions'>
            <li>
              <Scroll type='id' element='one'>
                <a href='#one' className='button'>
                  Stories
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id='one' className='wrapper style2 spotlights'>
        <section>
          <a href='/#' className='image' alt='image'>
            <img src={pic1} alt='' data-position='center center' />
          </a>
          <div className='content'>
            <div className='inner'>
              <h2>Sad Cowboy</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className='actions'>
                <li>
                  <Link className='button' to='/'>
                    Read the Story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href='/#' className='image'>
            <img src={pic2} alt='' data-position='top center' />
          </a>
          <div className='content'>
            <div className='inner'>
              <h2>Scary Bathtub Story</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className='actions'>
                <li>
                  <Link className='button' to='/'>
                    Read the Story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href='/#' className='image'>
            <img src={pic3} alt='' data-position='top center' />
          </a>
          <div className='content'>
            <div className='inner'>
              <h2>Push Alert</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className='actions'>
                <li>
                  <Link className='button' to='/'>
                    Read the Story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href='/#' className='image'>
            <img src={pic1} alt='' data-position='top center' />
          </a>
          <div className='content'>
            <div className='inner'>
              <h2>Marimokkori</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className='actions'>
                <li>
                  <Link className='button' to='/'>
                    Read the Story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href='/#' className='image'>
            <img src={pic7} alt='' data-position='top center' />
          </a>
          <div className='content'>
            <div className='inner'>
              <h2>Weird and Blue</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className='actions'>
                <li>
                  <Link className='button' to='/'>
                    Read the Story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id='two' className='wrapper style3 fade-up'>
        <div className='inner'>
          <h2>Biography</h2>
          <p>
            Jonathan Davis is a writer of literary fiction from Seattle, WA. He
            comes from an ongoing tradition of cattle ranching dating back to
            19th century Texas. The guy graduated from UT Austin and the
            University of Washington, and has lived in the Capitol Hill
            neighborhood of Seattle since 2014.
          </p>
          {/* <div className='features'>
            <section>
              <span className='icon major fa-code' />
              <h3>Lorem ipsum amet</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className='icon major fa-lock' />
              <h3>Aliquam sed nullam</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className='icon major fa-cog' />
              <h3>Sed erat ullam corper</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className='icon major fa-desktop' />
              <h3>Veroeros quis lorem</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className='icon major fa-chain' />
              <h3>Urna quis bibendum</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className='icon major fa-diamond' />
              <h3>Aliquam urna dapibus</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
          </div> */}
          {/* <ul className='actions'>
            <li>
              <Link className='button' to='/generic'>
                Learn more
              </Link>
            </li>
          </ul> */}
        </div>
      </section>

      <section id='three' className='wrapper style1 fade-up'>
        <div className='inner'>
          <h2>Contact the Writer</h2>
          {/* <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p> */}
          <div className='split style1'>
            <section>
              <form method='post' action='#'>
                <div className='fields'>
                  <div className='field half'>
                    <label for='name'>Name</label>
                    <input type='text' name='name' id='name' />
                  </div>
                  <div className='field half'>
                    <label for='email'>Email</label>
                    <input type='text' name='email' id='email' />
                  </div>
                  <div className='field'>
                    <label for='message'>Message</label>
                    <textarea name='message' id='message' rows='5' />
                  </div>
                </div>
                <ul className='actions'>
                  <li>
                    <a href='/#' className='button submit'>
                      Send Message
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className='contact'>
                <li>
                  <h3>Address</h3>
                  <span>
                    The Winchester
                    <br />
                    605 E Denny Way
                    <br />
                    Seattle, WA 98122
                    <br />
                    USA
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <a href='/#'>jdaviswebdev@gmail.com</a>
                </li>
                {/* <li>
                  <h3>Phone</h3>
                  <span>(206) 488-8321</span>
                </li> */}
                <li>
                  <h3>Social</h3>
                  <ul className='icons'>
                    <li>
                      <a
                        href='https://www.instagram.com/some_fiction/'
                        className='fa-instagram'
                      >
                        <span className='label'>Instagram</span>
                        Instagram
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
