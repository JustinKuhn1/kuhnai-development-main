"use client";

import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import AnimatedNavbar from "../components/animated-navbar";
import Footer from "../components/footer";
import { Button } from "../components/ui/button";
import { User, Mail, Shield, Clock, LogOut } from "lucide-react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, []);

  // Handle login modal open (passed to navbar)
  const handleLoginClick = () => {
    // Implementation would depend on your login modal implementation
    console.log("Open login modal");
  };

  // Similar to your navbar's logic for a display name
  const getDisplayName = () => {
    if (!user) return "";
    if (user.user_metadata?.full_name) return user.user_metadata.full_name;
    if (user.user_metadata?.name) return user.user_metadata.name;
    return user.email?.split("@")[0] || "User";
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Optionally redirect after logout
    window.location.href = "/";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <>
        <AnimatedNavbar onLoginClick={handleLoginClick} />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full border-4 border-t-[#2A6B74] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <p className="mt-4 text-zinc-600">Loading your profile...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <AnimatedNavbar onLoginClick={handleLoginClick} />
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4 text-zinc-800">Not Logged In</h1>
            <p className="text-zinc-600 mb-6">Please log in to view your profile.</p>
            <Button
              className="bg-[#2A6B74] hover:bg-[#215760] w-full"
              onClick={handleLoginClick}
            >
              Log In
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AnimatedNavbar onLoginClick={handleLoginClick} isProfilePage={true} />
      <div className="min-h-screen bg-zinc-50 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Profile header with user info */}
          <div className="bg-gradient-to-r from-[#2A6B74] to-[#1D4F54] rounded-lg shadow-md p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-white/20 h-24 w-24 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                <User size={48} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">{getDisplayName()}</h1>
                <p className="text-zinc-100 mt-1">{user.email}</p>
                <p className="text-zinc-200 mt-4 text-sm">Member since {formatDate(user.created_at)}</p>
              </div>
            </div>
          </div>

          {/* Profile content with tabs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b border-zinc-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-[#2A6B74] text-[#2A6B74]'
                    : 'text-zinc-600 hover:text-zinc-800'
                }`}
              >
                <User size={18} className="mr-2" />
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-6 py-4 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === 'security'
                    ? 'border-b-2 border-[#2A6B74] text-[#2A6B74]'
                    : 'text-zinc-600 hover:text-zinc-800'
                }`}
              >
                <Shield size={18} className="mr-2" />
                Security
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-6 py-4 font-medium text-sm flex items-center whitespace-nowrap ${
                  activeTab === 'activity'
                    ? 'border-b-2 border-[#2A6B74] text-[#2A6B74]'
                    : 'text-zinc-600 hover:text-zinc-800'
                }`}
              >
                <Clock size={18} className="mr-2" />
                Recent Activity
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-zinc-800 mb-4">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-sm text-zinc-500">Full Name</p>
                      <p className="font-medium text-zinc-800">{user.user_metadata?.full_name || getDisplayName()}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-zinc-500">Email Address</p>
                      <div className="flex items-center">
                        <Mail size={16} className="text-zinc-400 mr-2" />
                        <p className="font-medium text-zinc-800">{user.email}</p>
                      </div>
                    </div>
                    
                    {user.user_metadata?.company && (
                      <div className="space-y-1">
                        <p className="text-sm text-zinc-500">Company</p>
                        <p className="font-medium text-zinc-800">{user.user_metadata.company}</p>
                      </div>
                    )}
                    
                    <div className="space-y-1">
                      <p className="text-sm text-zinc-500">User ID</p>
                      <p className="font-medium text-zinc-800 text-sm font-mono">{user.id}</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-zinc-200">
                    <Button
                      variant="outline"
                      className="border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-800 mb-4">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <h3 className="font-medium text-zinc-800 mb-2">Password</h3>
                      <p className="text-zinc-600 text-sm mb-4">Secure your account with a strong password</p>
                      <Button
                        variant="outline"
                        className="border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                      >
                        Change Password
                      </Button>
                    </div>
                    
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <h3 className="font-medium text-zinc-800 mb-2">Two-Factor Authentication</h3>
                      <p className="text-zinc-600 text-sm mb-4">Add an additional layer of security to your account</p>
                      <Button
                        variant="outline"
                        className="border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                      >
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'activity' && (
                <div>
                  <h2 className="text-xl font-bold text-zinc-800 mb-4">Recent Activity</h2>
                  
                  <div className="bg-zinc-50 p-6 rounded-lg text-center">
                    <Clock size={32} className="text-zinc-400 mx-auto mb-3" />
                    <p className="text-zinc-600">Your activity history will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Logout button */}
          <div className="mt-6 flex justify-end">
            <Button
              variant="outline"
              className="border-red-200 text-red-600 hover:bg-red-50 flex items-center"
              onClick={handleLogout}
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}