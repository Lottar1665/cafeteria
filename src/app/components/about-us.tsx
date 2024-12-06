import { Button } from "@/app/components/ui/button"

export function AboutUs() {
  return (
    <section className="bg-[#FFF8F0] py-16">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-[400px]">
            <img
              alt="Coffee cup"
              className="absolute h-full w-full rounded-2xl object-cover"
              src="/img/cafe/cafeaboutus.png"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">About us</h2>
            <h3 className="mb-6 text-xl font-semibold">
              We provide quality coffee, and ready to deliver.
            </h3>
            <p className="mb-8 text-muted-foreground">
              We are a company that makes and distributes delicious drinks. our main product is made with a
              secret recipe and available in stores worldwide.
            </p>
            <Button className="w-fit">Get your coffee</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

