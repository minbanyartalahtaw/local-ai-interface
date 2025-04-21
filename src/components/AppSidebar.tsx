"use client"
import { ChevronDown, MessageSquare } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import "@/app/globals.css";
import { use, useEffect, useState } from "react";

interface SideBarChat {
  id: string;
  title: string;
}


export function AppSidebar(prop: any) {
  const chat = prop
  const [items, setItems] = useState<SideBarChat[]>([chat.prop])
  useEffect(() => {
    setItems(chat.prop)
  })

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  Saved Chat
                  <ChevronDown className="ml-auto rotate-270 transition-transform group-data-[state=open]/collapsible:rotate-360" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>

                <SidebarGroupContent>
                  <SidebarMenuSub>
                    {items.map((item, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton asChild>
                          <a href={item?.id ? `/chat/${item.id}` : "#"}>
                            <span>{item?.title || "Home"}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
