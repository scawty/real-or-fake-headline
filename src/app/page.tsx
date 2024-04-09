import Image from "next/image";
import { HeadlineCard } from "@/components/HeadlineCard";
import { Button } from "@/components/Button";
import { faker } from '@faker-js/faker'
import { Headline } from "@/types";

export default function Home() {

  const headline: Headline = {
    id: faker.string.uuid(),
    text: faker.lorem.sentence(),
    isReal: false,
    guessCounts: {
      realGuessCount: faker.number.int(),
      fakeGuessCount: faker.number.int()
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <div className="w-full max-w-3xl md:w-2/3 h-screen flex-col flex items-center pt-12">
        <HeadlineCard headline={headline}/>
        <div className="flex flex-row justify-evenly w-2/3">
          <Button type="REAL"/>
          <Button type="FAKE"/>
        </div>
      </div>
    </main>
  );
}
