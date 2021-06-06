import { getPageContent } from './api/api';

export default function Generated({ content }) {
  return (
    <div>
      <div className="container mx-auto py-20 px-8">
        <h1 className="text-5xl text-center text-accent-1 mb-16">
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.map((co) => (
                {co}
          ))}
        </div>
        {/* <div className="text-center mt-8">
          {reasons.slice(reasons.length - 1).map(({ title, description }) => (
            <div className="markdown inline-p" key={title}>
              <strong>{title}</strong>{' '}
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}


export async function getStaticProps(context) {
    const content = await getPageContent();
  
    return {
      props: {
        content,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  }
