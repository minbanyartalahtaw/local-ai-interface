"use client";
import { ChevronDown, House, MessageCircle, Plus } from "lucide-react";
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
import { useEffect, useState } from "react";

interface SideBarChat {
  id: string;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AppSidebar(prop: any) {
  const chat = prop;
  const [items, setItems] = useState<SideBarChat[]>([chat.prop]);

  useEffect(() => {
    setItems(chat.prop);
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  <MessageCircle className="mr-2" />Saved Chat
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
                  <SidebarMenu>



                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={"/chat/new"}>
                    <Plus />
                    <span>{"New Chat"}</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <a href={"/"}>
                    <House />
                    <span>{"Home"}</span>
                  </a>
                </SidebarMenuButton>

              </SidebarMenuItem>
            </SidebarGroup>
          </Collapsible>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
