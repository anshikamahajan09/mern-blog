import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

export default function Postpage() {
  const { postSlug } = useParams();
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/post/getPosts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setLoading(false);
          setError(data.message);
          return;
        } else {
          setLoading(false);
          setPost(data.posts[0]);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch("/api/post/getPosts?limit=3");
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log(recentPosts);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="xl" />
        </div>
      )}
      <div className="p-3 min-h-screen max-w-6xl mx-auto flex flex-col">
        <h1 className="text-center text-3xl lg:text-4xl p-3 mt-10 font-serif mx-auto">
          {post.title}
        </h1>
        <Link
          to={`/search?category=${post.category}`}
          className="self-center mt-5"
        >
          <Button color="gray" pill size="s" className="p-2">
            {post.category}
          </Button>
        </Link>
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-h-[600px] object-cover mt-5 p-3"
        />
        <div className="flex justify-between p-3 border-b border-slate-500  w-full max-w-2xl mx-auto text-xs">
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          {post && post.content && (
            <span className="italic">
              {(post.content.length / 1000).toFixed(0)} mins read
            </span>
          )}
        </div>
        <div
          className="p-3 max-w-2xl mx-auto w-full post-content"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
        <CommentSection postId={post._id} />
        <div className="flex flex-col justify-center items-center mb-5 ">
          <h1 className="text-xl mt-5">Recent Articles</h1>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {recentPosts &&
              recentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
