'use client'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react' // Import useState for managing component state

const reviews = [
  {
    text: `Our team's productivity soared with this messaging tool. Its simplicity fosters quick decision-making and seamless collaboration, essential for our fast-paced product development.`,
    name: "Emily Rodriguez",
    company: "PinPoint",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ER",
    logoAlt: "PinPoint Logo"
  },
  {
    text: `With this tool, our team's workflow has become more efficient and organized. We spend less time navigating complex interfaces and more time focusing on what matters: delivering quality products to our customers.`,
    name: "David Patel",
    company: "Hues",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "DP",
    logoAlt: "Hues Logo"
  },
  {
    text: `The intuitive design and robust features have made communication effortless for our distributed team.`,
    name: "Sophia Lee",
    company: "BrightTech",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "SL",
    logoAlt: "BrightTech Logo"
  },
  {
    text: `We love how easy it is to onboard new members and keep everyone in sync.`,
    name: "Michael Chen",
    company: "Syncro",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "MC",
    logoAlt: "Syncro Logo"
  },
  {
    text: `A game-changer for our remote collaboration. Highly recommended!`,
    name: "Ava Smith",
    company: "RemotePro",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "AS",
    logoAlt: "RemotePro Logo"
  },
  {
    text: `The support team is responsive and always ready to help. Great experience overall.`,
    name: "Liam Johnson",
    company: "HelpDesk",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "LJ",
    logoAlt: "HelpDesk Logo"
  },
  {
    text: `Our meetings are more productive and focused thanks to this tool.`,
    name: "Olivia Brown",
    company: "Meetly",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "OB",
    logoAlt: "Meetly Logo"
  },
  {
    text: `Simple, effective, and reliable. It just works!`,
    name: "Noah Wilson",
    company: "SimpleSoft",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "NW",
    logoAlt: "SimpleSoft Logo"
  },
  {
    text: `The best messaging platform we've used so far.`,
    name: "Emma Davis",
    company: "Connectify",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },
  {
    text: `It keeps our team connected and our projects on track.`,
    name: "William Martinez",
    company: "TrackIt",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "WM",
    logoAlt: "TrackIt Logo"
  }
]

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2; // Display 2 cards at a time for md and lg screens
  const avatarColors = [
    "bg-purple-500",
    "bg-blue-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
  ];

  // Calculate the start index of the last "page" (which might be partial)
  const lastValidStartIndex = reviews.length - (reviews.length % itemsPerPage === 0 ? itemsPerPage : reviews.length % itemsPerPage);

  // Function to navigate to the previous set of reviews
  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? lastValidStartIndex : prev - itemsPerPage));
  };

  // Function to navigate to the next set of reviews
  const handleNext = () => {
    setStartIndex((prev) => (prev >= lastValidStartIndex ? 0 : prev + itemsPerPage));
  };

  // Get the reviews to display based on the current startIndex
  const currentDisplayedReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full py-1 flex justify-center items-center  bg-gray-50 dark:bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What our clients say</h2>
          <div className="flex gap-2">
            <button
              className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors"
              onClick={handlePrev}
              aria-label="Previous reviews"
            >
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </button>
            <button
              className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors"
              onClick={handleNext}
              aria-label="Next reviews"
            >
              <ArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        <div key={startIndex} className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 justify-items-center items-center animate-fadeIn">
          {currentDisplayedReviews.map((review, idx) => (
            <Card key={startIndex + idx} className="p-6 flex flex-col justify-between h-full">
              <CardContent className="text-2xl font-normal text-gray-700 dark:text-gray-300 p-0">
                &quot;{review.text}&quot;
              </CardContent>
              <CardFooter className="flex items-center justify-between p-0">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback className={`${avatarColors[(startIndex + idx) % avatarColors.length]} text-white`}>
                      {review.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-50">{review.name}</p>
                    {/* Conditionally display company name */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.company ? `${review.name}, ${review.company}` : review.name}
                    </p>
                  </div>
                </div>
 
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
