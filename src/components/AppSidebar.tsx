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
} from "@/components/ui/sidebar";
import "@/app/globals.css";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  ,
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  ,
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  ,
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  ,
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  ,
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Home",
    url: "#",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Saved Chat
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
