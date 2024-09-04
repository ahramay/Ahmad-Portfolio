/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/09/2024 - 13:10:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/09/2024
    * - Author          : 
    * - Modification    : 
**/
import React from "react";
import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";
import { PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import { FaGithub, FaTwitter, FaLinkedin,FaGlobe } from "react-icons/fa6";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
}) {
  const formattedDate = formatDate(page.data.date);
  const isProjectDoc = (page: any): page is Content.ProjectDocument => {
    return (page as Content.ProjectDocument).data.project_link !== undefined;
  };

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-yellow-400">
          {page.tags.map((tag, index) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {formattedDate}
        </p>
      {isProjectDoc(page) && isFilled.link(page.data.project_link) && (
          <div className="socials inline-flex justify-center sm:justify-end">
            <PrismicNextLink
              field={page.data.project_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label="Project Link"
            >
              <FaGlobe />
            </PrismicNextLink>
          </div>
        )}
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
