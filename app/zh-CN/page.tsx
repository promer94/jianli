import { Suspense } from 'react'
import { Contribution } from '~/components/contribution';
import { Education } from '~/components/education';
import { OpenSource } from '~/components/open-source';
import { PersonalInformation, Loading } from '~/components/personal-information';
import { Work } from '~/components/work';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <PersonalInformation />
      </Suspense>
      <Education></Education>
      <Work></Work>
      <Contribution></Contribution>
      <OpenSource></OpenSource>
    </>
  )
}