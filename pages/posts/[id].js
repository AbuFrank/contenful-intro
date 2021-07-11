import Link from "next/link";

export default function SinglePost({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <div>
        <p>{post.content}</p>
      </div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
