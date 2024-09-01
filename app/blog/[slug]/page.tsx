type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug || "No Slug Provided"}</h1>
      <p>Ken 1 year</p>
      <p>Wellcome to HCM</p>
      <p>Test commit CICD</p>
    </>
  );
}