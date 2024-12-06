import Link from "next/link"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Search, ShoppingCart } from 'lucide-react'
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link className="flex items-center gap-2" href="/">
          <Image alt="" src="/img/navbar/logo_coffe.svg" width={150} height={30}/>
        </Link>
        <div className="flex items-center gap-6">
          <Link className="text-sm font-medium" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium" href="#">
            Our Product
          </Link>
          <Link className="text-sm font-medium" href="#">
            Delivery
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-8"
              placeholder="Search..."
              type="search"
            />
          </div>
          <Button size="icon" variant="ghost">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
