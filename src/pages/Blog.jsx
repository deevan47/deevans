export default function Blog() {
  const posts = [
    { title: "How I Built My Portfolio", date: "May 2024" },
    { title: "JavaScript Tips & Tricks", date: "Mar 2024" },
    { title: "Tailwind CSS: Why I Love It", date: "Jan 2024" }
  ];

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto py-10">
      <h1>Blog</h1>
      <ul>
        {posts.map((post, i) => (
          <li key={i} className="border-l-4 border-indigo-500 pl-4 mb-4">
            <h3 className="text-xl">{post.title}</h3>
            <p className="text-sm text-gray-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
