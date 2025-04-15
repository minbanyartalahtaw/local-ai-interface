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

// Menu items.
const items = [
  /* {
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
  }, */
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
                          <a href={item?.url || "#"}>
                            {item?.icon && <item.icon />}
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
