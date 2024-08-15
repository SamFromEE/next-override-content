import React from "react";
const brand = process.env.NEXT_PUBLIC_BRAND;

export function C ({ tag, children } : { tag: string, children: React.ReactNode }) {
  if (!brand) return children;
  
  const content = brands[brand];
  if (!content) return children;
  
  if (content[tag]) {
    return content[tag]
  } else {
    return children;
  }
}



const brand1Content : Record<string, React.ReactNode> = {
  "home:welcome": "Welcome to Brand 1",
  "home:button": "Yes",
  "home:tAndC": <>Read our <a href='/brans1/t&c'>T&C</a></>
};

const brand2Content : Record<string, React.ReactNode> = {
  "home:welcome": "Welcome to Brand 2",
  "home:question": <>Want Brand Two&apos;s <strong>great</strong> car insurance?</>,
  "home:tAndC": <>Read our <a href='/brans2/t&c'>T&C</a></>
};

const brands: Record<string, Record<string, React.ReactNode> | undefined> = {
  brand1: brand1Content,
  brand2: brand2Content
};