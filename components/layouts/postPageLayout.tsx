import Head from 'next/head';

import { BreadcrumbObj, resultObj } from '../../types';

type propsType = {
  postMetadata: Omit<resultObj, 'content'>;
  children: React.ReactElement;
};

const PostPageLayout = ({ postMetadata, children }: propsType) => {
  const { title, subtitle, category, slug, date, author, image } = postMetadata;
  const breadcrumbs: BreadcrumbObj[] = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: title, href: `/posts/${category}/${slug}` },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
      </Head>
      <main>
        <div className="flex-grow">{children}</div>
      </main>
    </>
  );
};
export default PostPageLayout;
