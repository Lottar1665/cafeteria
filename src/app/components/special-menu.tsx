import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Plus } from 'lucide-react'
import type { MenuItem } from "@/app/types/menu"

const specialItems: MenuItem[] = [
  {
    id: 1,
    name: "Sandwich",
    price: 12,
    image: "/img/cafe/sanduiche.png",
    description: "bread with meat and vegetables"
  },
  {
    id: 2,
    name: "Hot Milk",
    price: 12,
    image: "/img/cafe/chocolate.png",
    description: "Hot milk with less sugar"
  },
  {
    id: 3,
    name: "Coffee Ice Cream",
    price: 12,
    image: "/img/cafe/cafezinho.png",
    description: "Coffee with ice cream vanilla"
  },
  {
    id: 4,
    name: "Cappucino",
    price: 12,
    image: "/img/cafe/cappucino.png",
    description: "Hot cappucino"
  },
  {
    id: 5,
    name: "Moccachino",
    price: 12,
    image: "/img/cafe/moccacino.png",
    description: "Hot moccachino"
  },
  {
    id: 6,
    name: "Waffle Ice Cream",
    price: 12,
    image: "/img/cafe/waffle.png",
    description: "Waffle with ice cream"
  }
]

export function SpecialMenu() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <h2 className="mb-8 text-2xl font-bold">Special menu for you</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialItems.map((item) => (
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

