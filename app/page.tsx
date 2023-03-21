import { Education } from '~/components/education';
import { OpenSource } from '~/components/open-source';
import { PersonalInformation } from '~/components/personal-information';
import { Work } from '~/components/work';

export default function Home() {
  return (
    <>
      <PersonalInformation></PersonalInformation>
      <Work></Work>
      <OpenSource></OpenSource>
      <Education></Education>
    </>
  )
}
