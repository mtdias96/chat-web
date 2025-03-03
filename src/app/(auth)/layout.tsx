import { auth } from '@/lib/auth';
import { MessageCircle } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = Boolean(await auth());
  if (isAuthenticated) {
    return redirect('/chat');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center rounded-full bg-teal-500 p-2">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Web Chat</h1>
          <p className="text-sm text-gray-500">
            Conecte-se e converse em tempo real
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
