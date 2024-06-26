import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full border h-[350px] overflow-hidden rounded-lg sm:w-[400px] border-teal-500 hover:border-2 transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="absolute z-10 group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-center transition-all duration-300 py-2 rounded-md !rounded-tl-none m-2"
        >
            Read arcticle
        </Link>
      </div>
    </div>
  );
}
