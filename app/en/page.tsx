
import { Education } from '~/components/education-en';
import { OpenSource } from '~/components/open-source-en';
import { Profile } from '~/components/profile';
import { Work } from '~/components/work-en';

export default function Home() {
  return (
    <>
      <Profile></Profile>
      <Work></Work>
      <OpenSource></OpenSource>
      <Education></Education>
    </>
  )
}

export const runtime = 'edge'