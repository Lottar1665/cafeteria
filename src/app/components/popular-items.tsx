import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Plus } from 'lucide-react'
import type { MenuItem } from "@/app/types/menu"

const popularItems: MenuItem[] = [
  {
    id: 1,
    name: "Vanilla Latte",
    price: 21,
    image: "/img/popular/vanilla.png",
    description: "Hot • Fresh • Vanilla",
    likes: 21000
  },
  {
    id: 2,
    name: "Espresso",
    price: 12,
    image: "/img/popular/espresso.png",
    description: "Hot • Fresh • Strong",
    likes: 12000
  },
  {
    id: 3,
    name: "Hazelnut Latte",
    price: 23,
    image: "/img/popular/hazelnut.png",
    description: "Hot • Fresh • Hazelnut",
    likes: 23000
  }
]

export function PopularItems() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <h2 className="mb-8 text-2xl font-bold">Popular Now</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <img
                  alt={item.name}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                  src={item.image}
                />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="mb-1 font-semibold">{item.price}K</div>
                    <Button size="icon" variant="secondary">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

