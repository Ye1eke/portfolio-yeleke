"use client"

import Header from '../components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../../typings'
import { fetchPageInfo } from '../../utils/fetchPageInfo'
import { fetchExperiences } from '../../utils/fetchExperiences'
import { fetchSkills } from '../../utils/fetchSkills'
import { fetchProjects } from '../../utils/fetchProjects'
import { fetchSocials } from '../../utils/fetchSocials'
import React, { useEffect, useState } from 'react';
type Props = {
  pageInfo: PageInfo | null;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home: React.FC<Props> = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

      <Header socials={socials} />
      {pageInfo === null ? (
        <div className='bg-[rgb(36,36,36)] flex items-center justify-center h-screen w-screen text-gray-400 m-auto'>
          <div className='animate-pulse text-3xl'>Loading...</div>
        </div>
      ) : (
        <>
          <section id='hero' className='snap-start'>
            <Hero pageInfo={pageInfo} /> 
          </section>

          <section id='about' className='snap-center'>
            <About pageInfo={pageInfo} />
          </section>

          <section id='experience'className='snap-center'>
            <WorkExperience experiences={experiences} />
          </section>

          <section id='skills' className='snap-start'>
            <Skills skills={skills} />
          </section>

          <section id='projects' className='snap-start'>
            <Projects projects={projects} />
          </section>
          {/* Contact Me */}
          <section id='contact' className='snap-start'>
            <ContactMe pageInfo={pageInfo} />
          </section>
          <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer'>
              <div className='flex items-center justify-center bg-[#F7AB0A] rounded-full w-7 h-7 m-auto animate-pulse text-black text-xl font-extrabold'>
                ^
              </div>
            </footer>
          </Link>
        </>
      )}
    </div>
  )
}

const HomePage: React.FC = () => {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [socials, setSocials] = useState<Social[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pageInfoData = await fetchPageInfo();
        const experiencesData = await fetchExperiences();
        const skillsData = await fetchSkills();
        const projectsData = await fetchProjects();
        const socialsData = await fetchSocials();

        setPageInfo(pageInfoData);
        setExperiences(experiencesData);
        setSkills(skillsData);
        setProjects(projectsData);
        setSocials(socialsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Home pageInfo={pageInfo} experiences={experiences} skills={skills} projects={projects} socials={socials}/>
  );
};

export default HomePage;
