import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"

export function SubscribeForm() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="relative w-[] overflow-hidden rounded-3xl bg-black p-8 text-white">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Subscribe to get 50% discount price</h2>
            <div className="flex gap-4">
              <Input
                className="bg-white"
                placeholder="Email address"
                type="email"
              />
              <Button variant="secondary">Order now</Button>
            </div>
          </div>
          <img
            alt="Coffee background"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            src="/img/bgsub.png"
          />
        </div>
      </div>
    </section>
  )
}

