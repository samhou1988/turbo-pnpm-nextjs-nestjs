import { Button, Input } from '@repo/ui';
import { Mail } from 'lucide-react';

export default function Page() {
  return (
    <main>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Input type="email" placeholder="Email" />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </main>
  );
}
