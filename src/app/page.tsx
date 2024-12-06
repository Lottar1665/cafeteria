import { Navbar } from "@/app/components/navbar"
import { Hero } from "@/app/components/hero"
import { PopularItems } from "@/app/components/popular-items"
import { DeliverySteps } from "@/app/components/delivery-steps"
import { AboutUs } from "@/app/components/about-us"
import { SpecialMenu } from "@/app/components/special-menu"
import { Testimonials } from "@/app/components/testimonials"
import { SubscribeForm } from "@/app/components/subscribe-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PopularItems />
        <DeliverySteps />
        <AboutUs />
        <SpecialMenu />
        <Testimonials />
        <SubscribeForm />
      </main>
    </div>
  )
}

