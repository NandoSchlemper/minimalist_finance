import { 
    SidebarProvider,
    SidebarTrigger
} from "../ui/sidebar"

import AppSidebar from "./items/sidebar.itens"


export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
