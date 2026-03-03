import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black text-primary mb-4">404</h1>

        <h2 className="text-2xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <a className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-3 font-bold shadow-lg hover:scale-105 transition">
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
}