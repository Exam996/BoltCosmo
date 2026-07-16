import Link from 'next/link';
import { Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-luxe">
          <Sparkles className="h-8 w-8" />
        </span>
        <h1 className="mt-8 font-display text-6xl font-bold text-gradient-primary">
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold">
          Page not found
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          The page you are looking for may have been moved or no longer exists.
          Let us guide you back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-luxe"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
