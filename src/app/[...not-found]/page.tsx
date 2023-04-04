import {notFound} from "next/navigation"
import { ReactNode } from "react"
export default function NotFound(): ReactNode | Promise<ReactNode> {
  notFound()
}
