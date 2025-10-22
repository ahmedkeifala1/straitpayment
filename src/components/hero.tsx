import type { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  title?: string;
  subtitle?: string;
  titleProps?: ComponentProps<"h1">;
  subtitleProps?: ComponentProps<"p">;
};

export default function Hero({
  children,
  title,
  subtitle,
  titleProps,
  subtitleProps,
  ...props
}: Props) {
  return (
    <section
      {...props}
      className={`hero-gradient text-white py-20 md:py-32 ${props.className ?? ""}`}
    >
      <div className="container mx-auto px-6 text-center">
        {children ? (
          children
        ) : (
          <>
            <h1
              {...titleProps}
              className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${titleProps?.className ?? ""}`}
              data-aos="fade-up"
            >
              {title}
            </h1>
            <p
              {...subtitleProps}
              className={`text-xl mb-8 ${subtitleProps?.className ?? ""}`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {subtitle}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
