import Image from "next/image";
import { ReactNode } from "react";

export interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  price?: string | number;
  badgeLabel?: string;
  badgeTone?: "default" | "success" | "danger" | "orange";
  imageSrc: string;
  imageAlt?: string;
  footer?: ReactNode;
  meta?: string;
  className?: string;
}

type BadgeTone = NonNullable<CardProps["badgeTone"]>;

const badgeToneToStyles: Record<BadgeTone, string> = {
  default: "bg-light-200 text-dark-900",
  success: "bg-green text-light-100",
  danger: "bg-red text-light-100",
  orange: "bg-orange text-light-100",
};

export default function Card({
  title,
  subtitle,
  description,
  price,
  badgeLabel,
  badgeTone = "default",
  imageSrc,
  imageAlt = title,
  footer,
  meta,
  className = "",
}: CardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-lg bg-light-100 transition hover:shadow-lg ${className}`}
    >
      <div className="relative bg-light-300">
        <div className="flex aspect-square items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={512}
            height={512}
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>
      </div>

      <div className="bg-light-100 px-4 py-4">
        <h3 className="mb-2.5 text-base font-semibold leading-tight text-dark-900">
          {title}
        </h3>
        
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex flex-col gap-1">
            {subtitle && (
              <p className="text-sm text-dark-700">
                {subtitle}
              </p>
            )}
            {meta && (
              <p className="text-sm text-dark-700">
                {meta}
              </p>
            )}
          </div>
          
          {typeof price !== "undefined" && (
            <div className="flex-shrink-0 text-base font-semibold text-dark-900">
              {typeof price === "number" ? `$${price.toFixed(2)}` : price}
            </div>
          )}
        </div>
      </div>

      {footer && (
        <div className="border-t border-light-300 px-6 py-4 text-dark-700">
          {footer}
        </div>
      )}
    </article>
  );
}

