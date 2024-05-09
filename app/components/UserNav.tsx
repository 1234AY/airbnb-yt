import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";





export function UserNav () {

  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>

                <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg" 
                alt="image of the user" 
                className="rounded-full w-8 h-8 hidden lg:block"
                />
            </div>
        </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-(200px)">
             <DropdownMenuItem>
                <RegisterLink className="w-full">Register</RegisterLink>
             </DropdownMenuItem>
             <DropdownMenuItem>
                <LoginLink className="w-full">Login</LoginLink>
             </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
  );
    
    
    
    
  }
     

       
    



   
