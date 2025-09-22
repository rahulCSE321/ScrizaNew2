"use client"

export default function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-[#38857a] text-white p-4 rounded-lg shadow-lg max-w-xs">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-medium text-sm">We're Online!</span>
        </div>
        <p className="text-sm">How may I help you today?</p>
      </div>
    </div>
  )
}