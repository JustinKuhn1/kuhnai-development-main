// pages/404.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/globals.css'; // Ensure this file exists and contains your Tailwind or global styles

export default function Custom404() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    // Redirect to homepage after 5 seconds
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    // Update countdown every second
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    // Clean up timers on component unmount
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      
      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      
      <p className="text-gray-500 mb-6">
        Redirecting to homepage in {countdown} seconds...
      </p>
      
      <div className="flex space-x-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          Go Back
        </button>
        
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go Home
        </Link>
      </div>
    </div>
  )
}