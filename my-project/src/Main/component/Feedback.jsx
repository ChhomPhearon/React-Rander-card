'use client';

import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { Avatar, Blockquote, Rating } from 'flowbite-react';

export default function Feedback() {
  return (
     <section>
    <figure className="max-w-screen-md">
    <div className="mb-4 flex items-center">
      <Rating size="md">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
      </Rating>
    </div>
    <Blockquote>
      <p className="text-2xl font-semibold text-gray-900 dark:text-white">
        "Power Rangers are a nostalgic and exciting part of many childhoods, promoting teamwork, friendship, and fighting for justice"
      </p>
    </Blockquote>
    <figcaption className="mt-6 flex items-center space-x-3">
      <Avatar rounded size="xs" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiyyAUKdkZqY2xW1tnWdVLd3rkK_l3f08obnVIoyT1Q&s" alt="profile picture" />
      <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
      </div>
    </figcaption>
  </figure>

    <Toast className='h-20 w-[500px]'>
      <FaTelegramPlane className="h-8 w-8 text-cyan-600 dark:text-cyan-500" />
      <div className="pl-10 text-sm font-normal"> Write us some massge about our service....</div>
    </Toast>
    </section>
  );
}