
'use client';

import { Card } from 'flowbite-react';

export default function Component() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://th.bing.com/th/id/OIP.OZcqhaIGP1m9KSwDJWBm4wHaEz?rs=1&pid=ImgDetMain"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Power Rangers Lost Galaxy
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Power Rangers Lost Galaxy follows a team of space explorers who discover a new world, Terra Venture, and must protect it from evil threats using their advanced technology and mystical powers.
      </p>
    </Card>
  );
}
