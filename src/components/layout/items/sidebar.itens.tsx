import { 
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar"

import { ChevronDown } from "lucide-react"

import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
} from "@/components/ui/collapsible"
import { useState } from "react"

export const Item = [
    {name: 'Homepage', url: '/homepage', type: 'User'},
]

export const Categories = [
    {name: 'User'},
    {name: 'Financial'}
]

export default function AppSidebar() {
    const [itens] = useState(Item)
    const [categories] = useState(Categories)

    return (
    <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>

          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              Help
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>

          <CollapsibleContent>
            <SidebarGroupContent />
          </CollapsibleContent>

        </SidebarGroup>
    </Collapsible>
    )
}