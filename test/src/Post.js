import React from 'react'; 
import Stories from "./Stories";
import Feeds from './Feeds';

function Post() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:max-w-5xl mx-auto mt-2">
      <section className="col-span-2">
        <Stories />
        <Feeds />
      </section>
    </main>
  )
}

export default Post