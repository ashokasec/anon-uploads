import React from "react";
import Navbar from "../(landing)/_components/navbar";
import Footer from "../(landing)/_components/footer";
import { project } from "@/lib/config";
import { bricolage } from "@/lib/fonts";
import { Metadata } from "next";
import {
  Heading1,
  Heading2,
  Paragraph,
} from "@/components/ui/typography-custom";

export const metadata: Metadata = {
  title: `Why I created ${project.name.smallCase}`,
};

const page = () => {
  return (
    <>
      <Navbar />
      <main className="x-ash">
        <article>
          <Heading1 text={`Why I created ${project.name.smallCase}?`} />
          <Paragraph>
            It started with a dare. A hacker friend of mine, someone who thrives
            on breaking systems, challenged me:{" "}
            <strong className="font-semibold">
              “Can you create an image upload platform that’s secure enough for
              even me to fail?”
            </strong>
          </Paragraph>
          <Paragraph>
            I took that challenge personally. The result?{" "}
            <span style={bricolage.style} className="font-bold">
              {project.name.sentenceCase}
            </span>
            —a platform built with security, privacy, and simplicity in mind.
          </Paragraph>
          <Heading2 text="Journey" />
          <Paragraph>
            Building this wasn’t easy. I had to think like a hacker while coding
            like a developer. Every detail mattered—ensuring the uploads are
            secure, stripping metadata, setting strict limits, and keeping
            everything anonymous. No logs, no trackers, no loopholes for
            exploitation. It was a battle of minds, and I wanted to win.
          </Paragraph>
          <Heading2 text="Vision" />
          <Paragraph>
            Anon Uploads isn’t just a personal project; it’s a statement. A
            place where anyone can upload images anonymously, knowing their
            privacy is protected. It’s for those fleeting moments when you need
            to share something securely without judgment, tracking, or
            permanence. And it’s here for the hackers, too—test your skills,
            because I’m confident you won’t break it.
          </Paragraph>
          <Heading2 text={`What ${project.name.sentenceCase} is NOT?`} />
          <ul className="list-disc ml-6">
            <li>
              <Paragraph>
                A photo-sharing app for influencers (sorry, no likes or follows
                here).
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                A permanent image hosting service. Your uploads vanish after 24
                hours.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                A place for illegal or harmful content (let’s not ruin the fun).
              </Paragraph>
            </li>
          </ul>
          <Paragraph className="mt-3">
            It’s just a chaotic, anonymous space for fun and creativity. Upload
            whatever you want (within reason), and let others stumble upon your
            creation before it disappears.
          </Paragraph>

          <Heading2 text="Join the Journey" />
          <Paragraph>
            So, whether you’re here to share something random, test the limits
            of anonymity, or simply see what’s possible—Anon Uploads is ready
            for you. Upload, test, and enjoy. Let’s keep the internet free and
            secure, one image at a time.
          </Paragraph>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default page;
