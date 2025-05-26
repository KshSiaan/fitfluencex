import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <main className="!py-12 !px-4 md:!px-12 !space-y-6">
      <h1 className="!mb-12 text-center text-6xl font-bold">FAQ</h1>
      <div className="">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What kind of creators can join your platform?
            </AccordionTrigger>
            <AccordionContent>
              Our platform is designed for all types of content creators,
              including artists, musicians, writers, gamers, educators,
              podcasters, and more! If you create content and want to connect
              with your audience, you&apos;re welcome here.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I grow my community on your platform?
            </AccordionTrigger>
            <AccordionContent>
              We offer various tools and features to help you grow your
              community, including personalized creator profiles, easy content
              sharing, direct messaging with fans, and analytics to understand
              your audience better.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What kind of exclusive content can I share with my fans?
            </AccordionTrigger>
            <AccordionContent>
              You can share a wide range of exclusive content, such as
              behind-the-scenes glimpses, early access to new releases, private
              tutorials, Q&A sessions, digital downloads, and anything else you
              can imagine that brings value to your community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How do creators get rewarded for their work?
            </AccordionTrigger>
            <AccordionContent>
              We provide multiple ways for creators to get rewarded, including
              fan subscriptions, one-time donations, and the ability to sell
              digital products directly to their supporters. Our goal is to make
              it easy for your fans to support you financially.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Is there a fee for creators to use the platform?
            </AccordionTrigger>
            <AccordionContent>
              We offer different tiers and pricing plans for creators, some of
              which include a small percentage fee on earnings or a monthly
              subscription. We aim to keep our fees competitive and transparent
              to ensure you get the most out of your hard work.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              How do fans support their favorite creators?
            </AccordionTrigger>
            <AccordionContent>
              Fans can support creators through various methods, such as
              subscribing to exclusive content tiers, making one-time
              contributions, purchasing digital goods, or simply by engaging
              with and sharing the creator&apos;s content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What measures are in place to ensure a safe community?
            </AccordionTrigger>
            <AccordionContent>
              We are committed to maintaining a safe and engaging environment
              for everyone. We have robust community guidelines, moderation
              tools, and reporting features to address any inappropriate
              behavior and ensure a positive experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Can I interact directly with my favorite creators?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Our platform facilitates direct interaction between
              fans and creators through comments, direct messages, and exclusive
              Q&A sessions, helping to build stronger, more meaningful
              connections.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              How do I get started as a creator?
            </AccordionTrigger>
            <AccordionContent>
              Getting started is easy! Simply sign up for a creator account, set
              up your profile, and start sharing your amazing content. We have
              helpful guides and tutorials to walk you through each step.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              What if I have technical issues or need support?
            </AccordionTrigger>
            <AccordionContent>
              Our dedicated support team is here to help! You can reach us
              through our contact page, and we&apos;ll do our best to resolve
              any issues or answer your questions promptly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>
              Can I customize my creator profile?
            </AccordionTrigger>
            <AccordionContent>
              Yes, creators have the ability to customize their profiles to
              reflect their unique brand and style. You can upload banners,
              profile pictures, and write a compelling bio to welcome your fans.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              Is the platform available globally?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our platform is accessible to creators and fans worldwide,
              allowing for a truly global community and support network.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
