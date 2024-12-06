import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-[#FFF8F0] py-20">
      <div className="container px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter">
              Enjoy your <span className="text-[#FF9F43]">coffee</span>
              <br />
              before your activity
            </h1>
            <p className="text-muted-foreground">
              Boost your productivity and build your mood with a glass of coffee in the morning.
            </p>
            <div className="flex gap-4">
              <Button>Order now</Button>
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          <div className="relative">

            <div className="relative h-[416px] w-[416px] rounded-full">

            <div className="absolute top-10 -translate-y-1/2 translate-x-1/4 rounded-3xl bg-white p-4 shadow-lg mb-2 text-lg font-semibol border-8 border-gray-800[.50] ">

            <div className="flex items-center gap-2 ">Cappuccino</div>
            
            </div>
              <div className="absolute right-0 top-64 -translate-y-1/2 translate-x-1/4 rounded-3xl bg-white p-4 shadow-lg border-8 border-gray-800[.50]">
                <div className="flex items-center gap-2 bg-white">
                  <Badge>4.8 ★</Badge>
                </div>
              </div>
              
              <span className="absolute top-80 right-80 h-[69px] w-[155px] -translate-y-1/2 translate-x-1/4 rounded-3xl bg-white p-4 shadow-lg mb-2 text-lg font-semibol border-8 border-gray-800[.50]">18K</span>

              <Image
                alt="Cappuccino"
                width={300}
                height={300}
                className="absolute left-1/2 top-40 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
                src="/img/hero/hero.png"
              />
              <Image alt="" width={416} height={416} src="/img/hero/herobg.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

