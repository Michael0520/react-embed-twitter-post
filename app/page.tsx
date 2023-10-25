import Link from "next/link"
import { Tweet } from "react-tweet"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { components } from "@/components/tweet-components"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Try to use the twitter post components in project and you will see how
          easy it
        </p>
      </div>
      <div className="flex gap-4">
        <Tweet
          data-theme="dark"
          id="1628832338187636740"
          components={components}
        />
      </div>
    </section>
  )
}
