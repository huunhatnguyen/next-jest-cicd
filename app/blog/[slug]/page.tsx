type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export async function generateStaticParams() {
  // Ví dụ: Fetch danh sách các slug từ một API hoặc nguồn dữ liệu
  const res = await fetch('https://example.com/api/posts');
  const posts = await res.json();

  // Trả về một mảng các object với giá trị `slug` được xác định trước
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug || "No Slug Provided"}</h1>
      <p>Ken</p>
      <p>Wellcome to HCM</p>
    </>
  );
}