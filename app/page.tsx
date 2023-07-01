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
import Champ from '../public/Champion.png'




export default function Home() {
  return (
    <div className='flex justify-left'>
    
       {/* <Image src={Champ} width="550" /> */}
      
    <div className="flex pt-4 justify-evenly">
      {/* Nav Menu */}
      <NavigationMenu>
        <NavigationMenuList>

    {/* Item 1 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
             
              <NavigationMenuContent className='flex flex-col w-full p-2 mx-auto'>
              
              <Link href='/faq' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ
              </NavigationMenuLink>
              </Link>
              
              
              <Link href='/services' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Cleaning Services
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

      {/* Banner */}
   
      </div>
    </div>

  )
}
