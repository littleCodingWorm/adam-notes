import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main className="mx-48 pt-8">
      <article>
        <header>
          <h1 className="font-bold text-4xl">
            Insta360 X3 vs X4 comparision. Worth the upgrades?
          </h1>
          <p>
            Lost crops like fonio could help us fight climate change and
            malnutrition.
          </p>
          <p className="text-neutral-500">
            By Trung | April 16, 2024 4 minute read
          </p>
          <Image
            src={'/x4vsx3.jpg'}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </header>
        <section>main article</section>
        <footer>foot shits</footer>
      </article>
      <footer>even footer shits</footer>
    </main>
  );
};

export default page;
