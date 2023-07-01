"use client"
import Image from 'next/image'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"




export default function Home() {
  return (
    
    <div className="flex flex-col items-center ">
      <NavigationMenu>
        <NavigationMenuList>

    {/* Item 1 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
             
              <NavigationMenuContent className='flex flex-col w-full p-2 mx-auto'>
              
              <Link href='/services' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Residential
              </NavigationMenuLink>
              </Link>
              
              
              <Link href='/services' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Corporate
              </NavigationMenuLink>
              </Link>

              
              <Link href='/services' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Move In/Out
              </NavigationMenuLink>
              </Link>
            
            </NavigationMenuContent>
            
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
          
    </div>

  )
}
