"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description: "modal",
  },
  {
    title: "Hover Card",
    href: "3",
    description: "sighted",
  },
  {
    title: "Progress",
    href: "#",
    description: "typically",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually",
  },
  {
    title: "Tabs",
    href: "#",
    description: "Sections",
  },
  {
    title: "Tooltip",
    href: "#",
    description: "Are",
  },
];
const dummy = [
  {
    mainHead: "SHOP OUR BEER",
    content: [
      {
        subhead: "DISCOVER",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
      {
        subhead: "Beer Category",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
      {
        subhead: "Beer Category",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
      {
        subhead: "Beer Style",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
      {
        subhead: "Beer Format",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
      {
        subhead: "Beer Flavour",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
      {
        subhead: "Health Category",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
    ],
  },
  {
    mainHead: "STORE LOCATOR",
    // content: [],
  },
  {
    mainHead: "SHOP OUR BEER",
    content: [
      {
        subhead: "",
        list: ["On Sale Now", "Whats New", "Seasonal", "Mixed Pack"],
      },
    ],
  },
  {
    mainHead: "ABOUT US",
    content: [
      {
        subhead: "",
        list: [
          "On Sale Now",
          "Whats New",
          "Seasonal",
          "Mixed Pack",
          "On Sale Now",
          "Whats New",
          "Seasonal",
          "Mixed Pack",
        ],
      },
    ],
  },
  {
    mainHead: "CONTACT",
    content: [],
  },
];

export function Navigation() {
  return (
    <NavigationMenu className="py-3">
      <NavigationMenuList>
        {dummy?.map(({ mainHead, content }, IDX) => (
          <NavigationMenuItem key={`ul${mainHead}`}>
            {[1, 4].includes(IDX) ? (
              <NavigationMenu>
                <NavigationMenu className="text-white hover:text-white focus:text-white p-0 h-auto uppercase text-base mr-10">
                  {mainHead}
                </NavigationMenu>
              </NavigationMenu>
            ) : (
              <NavigationMenuTrigger className="text-white hover:text-white focus:text-white p-0 h-auto uppercase text-base mr-10">
                {mainHead}
              </NavigationMenuTrigger>
            )}

            <NavigationMenuContent className="flex flex-row">
              {content?.map(({ subhead, list }) => (
                <ul
                  className="flex flex-col gap-3 p-3 md:w-[200px] lg:w-[250px] lg:grid-cols-[.75fr_1fr] bg-#f4f4f4"
                  key={`list${subhead}`}
                >
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted  no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {subhead && subhead}
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {list?.map((listItm) => (
                    <ListItem
                      className="p-0"
                      href="/docs"
                      // title="Introduction"
                      key={`list${listItm}`}
                    >
                      {listItm}
                    </ListItem>
                  ))}
                </ul>
              ))}

              {/* <ListItem href="/docs" title="Introduction">
                  On sale
                  </ListItem>
                <ListItem href="/docs">On</ListItem> */}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>

    /* <NavigationMenuItem className="text-white ">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={"p-0 h-auto uppercase text-base mr-10"}
            >
              Store Locator
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white focus:text-white p-0 h-auto uppercase text-base mr-10">
            For Beer Lovers
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-3 md:w-[200px] lg:w-[250px] lg:grid-cols-[.75fr_1fr] bg-#f4f4f4">
              {components.map((component) => (
                <ListItem
                  className="p-0"
                  key={component.title}
                  // title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white focus:text-white p-0 h-auto uppercase text-base mr-10">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium ">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-white ">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={"p-0 h-auto uppercase text-base mr-10"}
            >
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
