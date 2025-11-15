 import Image from "next/image";
 import Link from "next/link";

 const footerSections = [
   {
     title: "Featured",
     links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
   },
   {
     title: "Shoes",
     links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
   },
   {
     title: "Clothing",
     links: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
   },
   {
     title: "Kids'",
     links: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"],
   },
 ];

 const socialIcons = [
   { name: "X", src: "/public/x.svg" },
   { name: "Facebook", src: "/public/facebook.svg" },
   { name: "Instagram", src: "/public/instagram.svg" },
 ];

 const logoSrc = "/public/logo.svg";

 export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
     <footer className="bg-[var(--color-dark-900)] text-[var(--color-light-400)]">
       <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:gap-16">
         <div className="flex-1">
           <Image
             src={logoSrc}
             alt="Nike swoosh"
             width={72}
             height={24}
             className="h-6 w-auto"
           />
           <p className="mt-4 max-w-sm text-sm text-[var(--color-dark-500)]">
             Pushing the boundaries of sport and style with every product we craft.
           </p>

           <div className="mt-6 flex items-center gap-4">
             {socialIcons.map((icon) => (
               <Link
                 key={icon.name}
                 href="#"
                 className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-dark-700)] bg-transparent text-[var(--color-light-100)] transition hover:border-[var(--color-light-100)]"
                 aria-label={icon.name}
               >
                 <Image
                   src={icon.src}
                   alt={`${icon.name} icon`}
                   width={18}
                   height={18}
                 />
               </Link>
             ))}
           </div>
         </div>

         <div className="grid flex-[2] grid-cols-2 gap-8 md:grid-cols-4">
           {footerSections.map((section) => (
             <div key={section.title}>
               <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-light-200)]">
                 {section.title}
               </p>
               <ul className="mt-4 space-y-3 text-sm text-[var(--color-dark-500)]">
                 {section.links.map((link) => (
                   <li key={link}>
                     <Link href="#" className="transition hover:text-[var(--color-light-100)]">
                       {link}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
       </div>

       <div className="border-t border-[var(--color-dark-700)]">
         <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-[var(--color-dark-500)] md:flex-row md:items-center md:justify-between">
           <p>&copy; {currentYear} Nike. All rights reserved.</p>
           <div className="flex flex-wrap gap-4">
             <Link href="#" className="hover:text-[var(--color-light-100)]">
               Privacy Policy
             </Link>
             <Link href="#" className="hover:text-[var(--color-light-100)]">
               Terms of Use
             </Link>
             <Link href="#" className="hover:text-[var(--color-light-100)]">
               Accessibility
             </Link>
           </div>
         </div>
       </div>
     </footer>
   );
 }

