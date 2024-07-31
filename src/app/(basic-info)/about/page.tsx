import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://simplianimate.com/about"),
  title: "About",
  description: "Animation templates made easy & simple",
};

export default function About() {
  return (
    <div className="relative max-w-7xl mx-auto mt-20 pb-20">
      <div className="flex flex-col justify-center items-center px-10 md:px-20">
        <h1 className="text-4xl font-bold">About</h1>

        <div className="max-w-3xl relative mx-auto mt-8 bg-white text-gray-800 pb-16 border-2 border-black p-10 rounded-xl mb-10">
          <div className="drop-shadow-none z-10 ">
            <p className="mt-2">
              Hi, I&apos;m Harshith, a software engineer based in India.
            </p>

            <p className="mt-2">
              I created this app to help my mother with her YouTube channel
              (Samruddha Kannada). She wanted to make short quiz videos, similar
              to the popular TV show &quot;Who Wants to Be a Millionaire,&quot;
              focusing on Kannada grammar and general knowledge. Instead of
              creating a template in Premiere Pro, I decided to build a web app,
              and that&apos;s how this app came to be.
            </p>

            <p className="mt-2">
              As I developed the quiz template, I also added a few more
              templates—some for fun and others for learning. I discovered that
              I really enjoy creating these templates and tools. These
              animations were a key part of what got me interested in
              programming.
            </p>

            <p className="mt-2">
              If there&apos;s a{" "}
              <Link
                href="https://simplianimate.canny.io/"
                className="text-blue-500"
                target="_blank"
              >
                feature or template
              </Link>{" "}
              you&apos;re looking for that we don&apos;t have yet, please let us
              know. We&apos;re constantly adding new features and templates to
              make this better.
            </p>

            <p className="mt-2">
              If you have any questions, you can reach out to me directly at
              astroashvi@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
