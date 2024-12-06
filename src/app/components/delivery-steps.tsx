export function DeliverySteps() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-2xl font-bold">How to use delivery service</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <img
                alt="Choose coffee"
                className="h-24 w-24"
                src="/img/delivery/cup1.png"
              />
            </div>
            <h3 className="mb-2 font-semibold">Choose your coffee</h3>
            <p className="text-sm text-muted-foreground">there are 20+ coffees for you</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <img
                alt="We delivery it to you"
                className="h-24 w-24"
                src="/img/delivery/cup2.png"
              />
            </div>
            <h3 className="mb-2 font-semibold">we delivery it to you</h3>
            <p className="text-sm text-muted-foreground">Choose delivery service</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <img
                alt="Enjoy your coffee"
                className="h-24 w-24"
                src="/img/delivery/cup3.png"
              />
            </div>
            <h3 className="mb-2 font-semibold">Enjoy your coffee</h3>
            <p className="text-sm text-muted-foreground">Choose delivery service</p>
          </div>
        </div>
      </div>
    </section>
  )
}

