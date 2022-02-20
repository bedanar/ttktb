import React from "react";
import styled from "styled-components";
import { Section, SectionTitle, Button, Text as p } from "../styles";
import about from '../assets/about.jpg'
import Slider from './Slider'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

const aboutImg = [
  about, about1, about2
]

export const AboutMuseum = () => {
    return (
        <Section>
            <div>
              <SectionTitle>Музей турында</SectionTitle>
              <div className="mt-10 grid grid-cols-1  md:grid-cols-2 gap-12">
                <Slider mainSliderBlocks={aboutImg} As='img' />
                <div className="">
                  <p  className="font-bold mb-4 text-lg md:text-xl">Шәриф Камал музее</p>
                  <p className="text-base md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla pretium laoreet magna, sit amet suscipit quam cursus 
                    vitae. Sed vulputate purus faucibus justo semper, sit amet 
                    efficitur justo viverra. Etiam venenatis placerat dui eget 
                    ornare. Nam sollicitudin augue enim, eget vulputate ipsum 
                    feugiat eget. Sed eros nibh, lobortis nec ornare ac, semper 
                    a risus. Proin placerat tortor eget auctor faucibus. Donec 
                    dapibus, metus in luctus consectetur, sapien lacus ultricies 
                    ligula, ac sodales lacus lectus eu ipsum. Morbi aliquam interdum 
                    mi, eget condimentum nisi scelerisque vel. Nunc non quam venenatis 
                    lacus imperdiet mollis. Maecenas sem ante, feugiat nec mauris vel, 
                    tincidunt laoreet est. Phasellus nec vestibulum dolor.
                  </p>
                  <Button backgroundColor="var(--yellow-color)" 
                    padding="12px 24px" 
                    textSize="18px" 
                    borderRadius="6px" className="font-bold mt-8">Тулырак укырга</Button>
                </div>
              </div>
            </div>
        </Section>
    )
}