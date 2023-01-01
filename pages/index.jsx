import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// context
import { useContext } from "react";
import { AppContext } from "./../context/AppContext";

// components
import FadeInCard from "../components/cards/FadeIn";
import Swirl from "../components/Swirl";
import PhotoDivider from "../components/PhotoDivider";
import SlideUpCard from "../components/cards/SlideUp";

// icons
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import pageStyles from "../styles/pages/Home.module.scss";

import CloudAnimation from "../components/CloudAnimation";

export default function Home() {
  const { state } = useContext(AppContext);
  const photoDividerImages = [
    {
      src: "/images/David_in_Chicago.jpg",
      alt: "Image of David inside the Shedd Aquarium in Chicago",
    },
    {
      src: "/images/Chicago_towers.jpeg",
      alt: "Image of some buidling towers in Chicago",
    },
    {
      src: "/images/FBLA_Chicago_David.jpg",
      alt: "Image of David at millennium park in Chicago",
    },
  ];
  return (
    <main>
      <section id={pageStyles.hero_section}>
        <FadeInCard>
          <h1>My portfolio Website is currently under construction</h1>
          <p>
            Come back later to see the finished website. But in the meantime,
            here&#39;s a little bit about me.
          </p>
        </FadeInCard>
        <div id={pageStyles.down_arrow}>
          <FaArrowDown />
        </div>
      </section>

      <section id={pageStyles.about_section}>
        <FadeInCard>
          {state.isMobile ? null : (
            <>
              <div
                key={"1"}
                id={pageStyles.swirl1}
                className={`${pageStyles.background_icon} ${pageStyles.arrowed_swirl}`}
              >
                <Swirl color={"#24c7fd"} />
              </div>

              <div
                key={"2"}
                id={pageStyles.swirl2}
                className={`${pageStyles.background_icon} ${pageStyles.arrowed_swirl}`}
              >
                <Swirl color={"#24c7fd"} />
              </div>
            </>
          )}

          <div>
            {state.isMobile ? (
              <svg
                id={pageStyles.sun}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 499 498"
                fill="none"
                class="Form_formDecor__oBaGt"
              >
                <path
                  id={pageStyles.sunshine}
                  stroke="#ff6b00"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-opacity="0.5"
                  stroke-width="10"
                  d="M249.617 323.258v132.486M234.774 41.862l9.251 132.21m15.948 148.426 18.433 131.174m-72.283-407.74 27.615 129.588m36.452 144.77 36.521 127.38M178.368 53.94l45.358 124.482m56.268 138.28 53.918 121.031M151.929 65.738 214.201 182.7m74.974 129.105 70.212 112.338M127.42 81.055l77.943 107.162m92.233 117.444 85.192 101.504M105.328 99.618l92.027 95.362m107.699 103.437 98.517 88.669M85.997 121.146l104.454 81.561m121.024 87.498 109.908 74.04M69.844 145.092l114.741 66.243m132.067 69.831 119.159 58.032M57.139 171.105l122.887 49.613m140.492 50.786 126.063 40.919M48.233 198.636l128.617 32.018m146.223 30.708 130.481 22.978m-410.29-57.272 131.793 13.869m149.051 10.074 132.484 4.624m-414.296.344 132.414-4.623m148.984-10.766 131.862-13.869M45.335 284.685l130.481-22.978m146.083-31.396 128.617-32.018M52.307 312.767 178.37 271.78m140.286-51.338 122.887-49.683M63.217 339.544l119.09-58.1m131.721-70.387 114.81-66.243M77.643 364.59l109.908-74.109m120.679-88.049 104.454-81.562M95.456 387.291l98.517-88.6m107.215-103.986 92.097-95.293M116.305 407.37l85.193-101.503m91.68-117.857 77.944-107.162M139.708 424.345l70.28-112.337m74.353-129.449L346.544 65.53M165.253 437.87l53.918-121.031m55.643-138.558 45.358-124.482m-127.72 393.939 36.521-127.311m35.83-144.975 27.546-129.587M220.76 453.743l18.433-131.175m15.256-148.565L263.7 41.862"
                ></path>
              </svg>
            ) : (
              <svg
                id={pageStyles.sun}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 499 498"
                fill="none"
                class="Form_formDecor__oBaGt"
              >
                <path
                  id={pageStyles.sunshine}
                  stroke="#ff6b00"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-opacity="0.4"
                  stroke-width="10"
                  d="M249.617 323.258v132.486M234.774 41.862l9.251 132.21m15.948 148.426 18.433 131.174m-72.283-407.74 27.615 129.588m36.452 144.77 36.521 127.38M178.368 53.94l45.358 124.482m56.268 138.28 53.918 121.031M151.929 65.738 214.201 182.7m74.974 129.105 70.212 112.338M127.42 81.055l77.943 107.162m92.233 117.444 85.192 101.504M105.328 99.618l92.027 95.362m107.699 103.437 98.517 88.669M85.997 121.146l104.454 81.561m121.024 87.498 109.908 74.04M69.844 145.092l114.741 66.243m132.067 69.831 119.159 58.032M57.139 171.105l122.887 49.613m140.492 50.786 126.063 40.919M48.233 198.636l128.617 32.018m146.223 30.708 130.481 22.978m-410.29-57.272 131.793 13.869m149.051 10.074 132.484 4.624m-414.296.344 132.414-4.623m148.984-10.766 131.862-13.869M45.335 284.685l130.481-22.978m146.083-31.396 128.617-32.018M52.307 312.767 178.37 271.78m140.286-51.338 122.887-49.683M63.217 339.544l119.09-58.1m131.721-70.387 114.81-66.243M77.643 364.59l109.908-74.109m120.679-88.049 104.454-81.562M95.456 387.291l98.517-88.6m107.215-103.986 92.097-95.293M116.305 407.37l85.193-101.503m91.68-117.857 77.944-107.162M139.708 424.345l70.28-112.337m74.353-129.449L346.544 65.53M165.253 437.87l53.918-121.031m55.643-138.558 45.358-124.482m-127.72 393.939 36.521-127.311m35.83-144.975 27.546-129.587M220.76 453.743l18.433-131.175m15.256-148.565L263.7 41.862"
                ></path>
              </svg>
            )}
          </div>

          <div id={pageStyles.about_container} className={pageStyles.card}>
            <h2 id={pageStyles.title}>
              About <span>Me</span>
            </h2>
            <p className={pageStyles.description}>
              Hello 👋🏼, my name is Fernando, but I go by David. Now with that
              out of the way, let me tell you a bit about me. So I&#39;m a
              college undergraduate student at Arizona State University studying
              computer science. I&#39;m also a certified Full-Stack Developer,
              knowing a wide range and languages and frameworks. I&#39;m also a
              member of ASU&#39;s CodeDevil, where I&#39;m currently helping to
              develop a new version of the club website under the Next.js
              framework. Like how this website is being built.
            </p>
            <p className={pageStyles.description}>
              However, I&#39;m not just a developer because I also strive to be
              a leader wherever I can. However, although I&#39;m not in a
              leadership position at the moment, I do plan to be in the future.
              But as of now, I&#39;m trying to take part in as many research
              opportunities as I can right now. Since I&#39;m wanting to dive
              into artificial intelligence in the future.
            </p>
            <div id={pageStyles.socials}>
              <Image
                id={pageStyles.personal_image}
                src="/images/personal_image.png"
                alt="Image of David"
                width={100}
                height={100}
              />
              <ul id={pageStyles.social_list}>
                <li>
                  <Link
                    href="https://github.com/SloppyFlipFlop"
                    className={pageStyles.link_wrapper}
                  >
                    <FaGithub className={pageStyles.icon} />
                    <p className={pageStyles.text}>Github</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/fernando-nevarez-94612b204"
                    className={pageStyles.link_wrapper}
                  >
                    <FaLinkedinIn className={pageStyles.icon} />
                    <p className={pageStyles.text}>LinkedinIn</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/david_nevarez__/"
                    className={pageStyles.link_wrapper}
                  >
                    <FaInstagram className={pageStyles.icon} />
                    <p className={pageStyles.text}>Instagram</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeInCard>
      </section>

      <section id={pageStyles.extracurricular_section}>
        <h2 id={pageStyles.section_title}>
          Extracurricular
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 742 26"
            fill="none"
            class="TextBlock_line___naGK"
          >
            <path
              stroke="#C0BFBF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity="0.4"
              stroke-width="6"
              d="M1 13c22.418 16 44.836 16 67.253 0 22.418-16 44.836-16 67.254 0 22.417 16 44.835 16 67.253 0 22.417-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.253 0 22.418 16 44.836 16 67.254 0 22.418-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.254 0m.214 0c22.417 16 44.835 16 67.253 0"
              // style="mix-blend-mode:multiply"
            ></path>
          </svg>
        </h2>
        <FadeInCard>
          <div className={pageStyles.extracurricular_wrapper}>
            <PhotoDivider
              imagesArray={photoDividerImages}
              sectionTitle={"FBLA"}
            />

            <SlideUpCard>
              <div id={pageStyles.description_container}>
                <h2>Recounting my time</h2>
                <p>
                  Recalling my time well in FBLA, I could not emphasize enough
                  on how much I have grown as a person because of it and just
                  the overall enjoyment memories the organization has allowed me
                  to experience. But just to explain a little bit about what i
                  have done while in FBLA during my high school career, FBLA has
                  provided me with numerous opportunities to develop my
                  leadership and professional skills. I have had the chance to
                  participate in various conferences and competitions, which
                  have helped me to network with other business professionals
                  and learn about the latest trends and developments in the
                  industry. Additionally, being a member of The Future Business
                  Leaders of America has allowed me to give back to my community
                  through various service projects. Overall, my time in The
                  Future Business Leaders of America has been extremely
                  rewarding and has helped me to grow both personally and
                  professionally.
                </p>
              </div>
            </SlideUpCard>
          </div>
        </FadeInCard>
      </section>

      {/* <CloudAnimation
        numClouds={5}
        size={[
          {
            width: 150,
            height: 100,
          },
          {
            width: 200,
            height: 150,
          },
        ]}
        speed={0.25}
      /> */}

      {/* <section id={pageStyles.projects_section}></section> */}
    </main>
  );
}
