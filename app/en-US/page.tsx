import { Education } from '~/components/education-en';
import { InformationEn } from '~/components/information-en';
import { OpenSource } from '~/components/open-source-en';
import { Profile } from '~/components/profile';
import { Work } from '~/components/work-en';

export default function Home() {
  return (
    <>
      <InformationEn></InformationEn>
      <Profile></Profile>
      <Work></Work>
      <OpenSource></OpenSource>
      <Education></Education>
    </>
  )
}