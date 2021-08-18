import React from 'react';

import { BiChevronsRight } from 'react-icons/bi';

import heroimg from '../assets/heroimg.png';
import {
  HERO_CTA,
  HERO_SUBTITLE,
  HERO_TITLE,
} from '../constants/heroConstants';

const Hero = () => {
  return (
    <section className='hero-container'>
      <section className='hero-caption'>
        <section className='hero-text'>
          <h1 className='hero-title'>{HERO_TITLE}</h1>
          <h4 className='hero-subtitle'>{HERO_SUBTITLE}</h4>
        </section>
        <section className='hero-cta'>
          <a href='#pay-now'>
            {HERO_CTA} <BiChevronsRight className='icon-double-arrow' />
          </a>
        </section>
      </section>
      <section className='hero-img-container'>
        <img src={heroimg} alt='hero' className='hero-img' />
      </section>
    </section>
  );
};

export default Hero;
