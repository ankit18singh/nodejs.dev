import React from 'react';
import { Link } from 'gatsby';
import Hero from '../components/hero';
import Layout from '../components/layout';
import '../util/konami';

import '../styles/index.css';

import featureImg from '../images/placeholder-img.svg';

import logoImg1 from '../images/logos/ibm-logo.svg';
import logoImg2 from '../images/logos/linkedin-logo.svg';
import logoImg3 from '../images/logos/microsoft-logo.svg';
import logoImg4 from '../images/logos/netflix-logo.svg';
import logoImg5 from '../images/logos/paypal-logo.svg';

import GetStartedIllustration1 from '../images/illustrations/beginners-guide-illustration.svg';
import GetStartedIllustration2 from '../images/illustrations/do-more-illustration.svg';

import pentagonIllustration1 from '../images/illustrations/pentagon-illustration1.svg'
import pentagonIllustration2 from '../images/illustrations/pentagon-illustration2.svg'
import leafsIllustration from '../images/illustrations/leafs-illustration.svg'


const nodeFeature1 =
  'Lorem ipsum dolor amet pug vape +1 poke pour-over kitsch tacos meh. ';
const nodeFeature2 =
  'Lorem ipsum dolor amet pug vape +1 poke pour-over kitsch tacos meh. ';
const nodeFeature3 =
  'Lorem ipsum dolor amet pug vape +1 poke pour-over kitsch tacos meh. ';

const NodeFeature = ({ img, featureText }: Props) => {
  return (
    <div className="node-features__feature">
      <img src={img} alt="node feature" />
      <p className="t-caption">{featureText}</p>
    </div>
  );
};

export default function Index(): JSX.Element {
  const title = 'The power of JavaScript minus the browser';
  const subTitle =
    'Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.';
  const description = 'Welcome to Node.js!';

  return (
    <Layout title={title} description={description} style={{ overflow: "hidden" }}>
      <div className="home-page">
        <Hero title={title} subTitle={subTitle} />

        <section className="node-demo-container">
          <div className="node-demo"></div>
          <img className="leafs-illustration" src={leafsIllustration} />
        </section>

        <section className="node-features">
          <NodeFeature img={featureImg} featureText={nodeFeature1} />
          <NodeFeature img={featureImg} featureText={nodeFeature2} />
          <NodeFeature img={featureImg} featureText={nodeFeature3} />
        </section>

        <section className="join-node">
          <h4 className="t-headline">
            <span className="accent">Join</span> the community
          </h4>
          <div className="join-node-form-container">
            <p className="t-body2">
              We’ll never share your information and always respect your inbox -
              quality content only, we promise.{' '}
            </p>
            <div style={{ display: `flex`, alignItems: 'flex-start' }}>
              <input
                type="email"
                placeholder="node@nodejs.dev"
                className="input-subscribe"
              />
              <button className="btn-subscribe t-body1" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className="trusted-by">
          <h4 className="t-headline">
            Trusted by development teams around the world
          </h4>
          <p>Including IBM, LinkedIn, Microsoft, Netflix, and PayPal.</p>
          <div className="logos-container">
            <img src={logoImg1} alt="ibm logo" />
            <img src={logoImg2} alt="linkedin logo" />
            <img src={logoImg3} alt="microsoft logo" />
            <img src={logoImg4} alt="netflix logo" />
            <img src={logoImg5} alt="paypal logo" />
          </div>
        </section>

        <section className="get-started-callouts">
          <Link to="/learn" className="get-started-callout">
            <img src={GetStartedIllustration1} alt="" />
            <h5 className="t-headline">A beginner’s guide</h5>
            <p>
              Lorem ipsum dolor amet pug vape +1 poke pour-over kitsch tacos
              meh.
            </p>
          </Link>

          <Link to="/documentation" className="get-started-callout">
            <img src={GetStartedIllustration2} alt="" />
            <h5 className="t-headline">Do even more with Node</h5>
            <p>
              Lorem ipsum dolor amet pug vape +1 poke pour-over kitsch tacos
              meh.
            </p>
          </Link>
        </section>

        <Link to="/learn" className="btn-primary">
          Get Started
        </Link>

      </div>
      <img className="pentagon-illustration-big1" src={pentagonIllustration1} />
      <img className="pentagon-illustration-big2" src={pentagonIllustration2} />
      <div className="double-background"></div>
    </Layout>
  );
}

interface Props {
  img: string;
  featureText: string;
}