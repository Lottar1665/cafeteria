import { Card, CardContent } from "@/app/components/ui/card"
import type { TestimonialItem } from "@/app/types/menu"

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Naura",
    image: "/img/img1.png",
    comment: "I really love the cappucino, the coffee was very smooth"
  },
  {
    id: 2,
    name: "John",
    image: "/img/img2.png",
    comment: "this coffee shop is very convenient"
  },
  {
    id: 3,
    name: "Azura",
    image: "/img/img3.png",
    comment: "the coffee menu here is very much"
  }
]

export function Testimonials() {
  return (
    <section className="bg-[#FFF8F0] py-16">
      <div className="container px-4">
        <h2 className="mb-8 text-2xl font-bold">What they say about us</h2>
        <p className="mb-12 text-muted-foreground">
          We always provide the best service and always maintain the quality of coffee
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex gap-4 p-6">
                <img
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                  src={item.image}
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.comment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

