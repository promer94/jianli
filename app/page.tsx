import { Contribution } from '~/components/contribution';
import { Education } from '~/components/education';
import { OpenSource } from '~/components/open-source';
import { PersonalInformation } from '~/components/personal-information';
import { Work } from '~/components/work';

export default function Home() {
  return (
    <>
      <PersonalInformation></PersonalInformation>
      <Education></Education>
      <Work></Work>
      <Contribution></Contribution>
      <OpenSource></OpenSource>
    </>
  )
}

export const runtime = 'edge';
export const revalidate = 86400