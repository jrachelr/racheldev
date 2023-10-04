import Link from "next/link";
import DateFormatter from "./DateFormatter";

type Props = {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  //   tags: string[];
};

export default function PostPreview({
  title,
  subtitle,
  date,
  slug,
}: //   tags,
Props) {
  return (
    <div>
      <h3>
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div>
        <DateFormatter dateString={date} />
      </div>
      <p>{subtitle}</p>
      <ul>
        Tags:
        <li>tag1</li>
      </ul>
    </div>
  );
}
