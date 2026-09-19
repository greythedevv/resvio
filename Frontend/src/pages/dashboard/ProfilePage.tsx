import { useState } from 'react';
import { FiUser, FiMail } from 'react-icons/fi';

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1 className="font-serif text-2xl text-ink mb-6">Profile</h1>
      <div className="bg-white border border-border rounded-lg p-6 max-w-md space-y-4">
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">Name</label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={15} />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">Email</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={15} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>
        </div>
        <button className="bg-terracotta text-ivory font-serif text-sm px-5 py-2.5 rounded-lg hover:bg-terracotta-dark transition-colors">
          Save changes
        </button>
      </div>
    </div>
  );
}