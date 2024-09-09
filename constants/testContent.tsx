import Image from 'next/image';
import React from 'react';

import wework from '../public/assets/img/webpage/wework.jpeg';

const TestContent = () => {
  return (
    <div>
      <h1>Heading 1</h1>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2">
            <p>
              This is a paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod magna vitae lacus auctor, vel pulvinar eros interdum. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
              sagittis, velit et bibendum varius, dolor enim feugiat erat, eget fermentum turpis
              odio eu turpis. Sed hendrerit non risus eget malesuada. Ut egestas eget purus nec
              dictum. Quisque porttitor vitae magna sit amet volutpat.
            </p>
            <p>
              This is a paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod magna vitae lacus auctor, vel pulvinar eros interdum. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
              sagittis, velit et bibendum varius, dolor enim feugiat erat, eget fermentum turpis
              odio eu turpis. Sed hendrerit non risus eget malesuada. Ut egestas eget purus nec
              dictum. Quisque porttitor vitae magna sit amet volutpat.
            </p>
          </div>
          <div className="mx-auto max-w-screen-xl">
            <Image
              src={wework}
              alt="Logo"
              className="rounded-img w-full"
              style={{
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          </div>
        </div>
      </div>
      <h2>Heading 2</h2>
      <ul className="my-4 ml-8 list-disc">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
      <h3>Heading 3</h3>
      <ol className="my-4 ml-8 list-decimal">
        <li>Ordered list element 1</li>
        <li>Ordered list element 2</li>
        <li>Ordered list element 3</li>
      </ol>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <section>
        <h3>Секция</h3>
        <p>
          This is the section with styles applied. Phasellus nec nisi ex. Nulla facilisi. Curability
          eget eget eget eget euismod lectus. Duis ut orci dui. Nam hendrerit lectus sed volutpat
          pellentesque. facilisis mi in urna tincidunt, vitae luctus dolor facilisis. Integer in
          odio scelerisque, interdum nisi nec, fringilla est.
        </p>
      </section>
      <article>
        <h3>Article</h3>
        <p>
          This is an article with styles applied. Etiam nec massa ex. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Cras sed turpis purus. Fusce
          volutpat auctor scelerisque. Donec eu eros sit amet erat viverra volutpat in id ipsum.
          Proin vulputate magna id neque faucibus, non venenatis sem accumsan. Ut ut rhoncus tortor.
        </p>
      </article>
      <blockquote>
        <p>This is a quote.</p>
        <footer>Quote author</footer>
      </blockquote>
      <img
        src="https://via.placeholder.com/400"
        alt="Placeholder Image"
        className="my-4 rounded-md border-2 border-gray-300 p-1"
      />
      <p>
        Another paragraph of text. Vestibulum et bibendum elit. Vivamus elementum nulla a volutpat
        mollis. In ac metus non orci malesuada egestas a nec arcu. Nulla facilisi. Nullam viverra
        ultrices nulla, et scelerisque mi fermentum id.
      </p>
    </div>
  );
};

export default TestContent;
