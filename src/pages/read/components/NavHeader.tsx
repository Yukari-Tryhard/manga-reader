"use client"

import * as React from "react"

import { cn } from "@/src/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/src/components/ui/navigation-menu"

const components: { title: string; href: string }[] = [
    {
        title: "Chap 30: Chuyện gì xảy ra với Haru?",
        href: ""
      }
    
]

export default function NavHeader() {

  const queryParameters = new URLSearchParams(window.location.search)
  const chapter = queryParameters.get("chapter")

  return (
    <NavigationMenu className="mt-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#273452] text-white">Chapter {chapter}</NavigationMenuTrigger>
          <NavigationMenuContent className="left-[-2rem]">
            <ul className="grid w-[400px] gap-1 px-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] left-[-2rem] h-[fit-content] max-h-[30rem] overflow-x-scroll">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  href={component.href}
                >
                  {component.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
