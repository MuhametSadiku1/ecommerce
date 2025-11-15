 "use client";

 import Image from "next/image";
 import Link from "next/link";
 import { useState } from "react";

 const navLinks = ["Men", "Women", "Kids", "Collections", "Contact"];
 const utilityLinks = ["Search", "My Cart (2)"];

 const logoSrc = "/public/logo.svg";

 export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
     <header className="w-full border-b border-[var(--color-light-300)] bg-[var(--color-light-100)]">
       <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-0"
          aria-label="Primary navigation"
        >
         <Link href="/" className="flex items-center gap-2" aria-label="Nike Home">
           <Image
             src={logoSrc}
             alt="Nike swoosh"
             width={48}
             height={18}
             priority
             className="invert"
           />
         </Link>

         <button
           className="ml-auto inline-flex items-center rounded-md border border-[var(--color-light-300)] px-3 py-2 text-sm font-medium text-[var(--color-dark-900)] transition-colors hover:border-[var(--color-dark-900)] sm:hidden"
           onClick={() => setIsOpen((prev) => !prev)}
           aria-label="Toggle navigation menu"
           aria-expanded={isOpen}
         >
           <span className="sr-only">Toggle navigation menu</span>
           <svg
             className="h-5 w-5"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth={1.5}
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             {isOpen ? (
               <>
                 <line x1="6" y1="6" x2="18" y2="18" />
                 <line x1="6" y1="18" x2="18" y2="6" />
               </>
             ) : (
               <>
                 <line x1="4" y1="6" x2="20" y2="6" />
                 <line x1="4" y1="12" x2="20" y2="12" />
                 <line x1="4" y1="18" x2="20" y2="18" />
               </>
             )}
           </svg>
         </button>

         <div className="hidden items-center gap-10 text-[var(--color-dark-900)] sm:flex">
           {navLinks.map((link) => (
             <Link
               key={link}
               href="#"
               className="text-sm font-medium transition-colors hover:text-[var(--color-green)]"
             >
               {link}
             </Link>
           ))}
         </div>

         <div className="ml-10 hidden items-center gap-6 text-sm font-medium text-[var(--color-dark-700)] sm:flex">
           {utilityLinks.map((link) => (
             <button
               key={link}
               className="transition-colors hover:text-[var(--color-dark-900)]"
               type="button"
             >
               {link}
             </button>
           ))}
         </div>
       </nav>

       {isOpen && (
         <div className="border-t border-[var(--color-light-300)] bg-[var(--color-light-100)] px-4 py-4 sm:hidden">
           <div className="flex flex-col gap-4 text-sm font-medium text-[var(--color-dark-900)]">
             {navLinks.map((link) => (
               <Link
                 key={link}
                 href="#"
                 className="rounded-md px-2 py-2 hover:bg-[var(--color-light-200)]"
               >
                 {link}
               </Link>
             ))}
             <div className="border-t border-[var(--color-light-300)] pt-4 text-[var(--color-dark-700)]">
               {utilityLinks.map((link) => (
                 <button
                   key={link}
                   className="block w-full rounded-md px-2 py-2 text-left hover:bg-[var(--color-light-200)]"
                   type="button"
                 >
                   {link}
                 </button>
               ))}
             </div>
           </div>
         </div>
       )}
     </header>
   );
 }

