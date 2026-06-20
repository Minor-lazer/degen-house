import { Button } from "@/components/ui/button";

type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="container flex min-h-screen flex-col items-start justify-center pt-24">
      <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-acid">Coming Soon</p>
      <h1 className="max-w-3xl text-5xl font-black uppercase leading-none text-white sm:text-7xl">{title}</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
        This route is wired for future expansion. The V1 launch focuses on the homepage while keeping multi-page
        growth ready.
      </p>
      <Button href="/" className="mt-8">
        Back Home
      </Button>
    </section>
  );
}
