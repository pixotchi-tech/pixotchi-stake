import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background px-4 py-4 sm:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 SEED Staking. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}