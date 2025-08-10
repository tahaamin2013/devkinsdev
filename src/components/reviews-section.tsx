'use client'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react' // Import useState for managing component state

const reviews = [
 
  {
    text: `Excellent work with a user-friendly email creator
`,
    name: "Jodel",
    company: "Thryve.today",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "SL",
    logoAlt: "BrightTech Logo"
  },
  {
    text: `Phanstastic and professional work from Devkins. I will continue to work with them toget. Thank you very much also for your advise and suggestion.`,
    name: "Yveslupitu",
    company: "Yves lupitu",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "MC",
    logoAlt: "Syncro Logo"
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
    text: `Devkins was great!`,
    name: "Benfallon Psych",
    company: " ",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "DP",
    logoAlt: "Hues Logo"
  },
  {
    text: `Thank you for the amazing result! Will keep using more and more.`,
    name: "Imperialkb",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "AS",
    logoAlt: "RemotePro Logo"
  },
 
    {
    text: `Super arbeit gerne wieder. Kann ich jedem empfehlen der probleme mit excel hat`,
    name: "Tobias Koblenz",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "AS",
    logoAlt: "RemotePro Logo"
  },
 

  {
    text: `It's been an amazing time working Devkins. Keep up the good work. I will be reaching out very soon`,
    name: "Lui Becker",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "OB",
    logoAlt: "Meetly Logo"
  },
  {
    text: `they has been very professional, and they immediately figured out my idea and helped me make it happen.`,
    name: "Wmanuele Maugeri",
    company: "SimpleSoft",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "NW",
    logoAlt: "SimpleSoft Logo"
  },

    {
    text: `Exceptional work, delivered the work well before time. Would love to work with them again.`,
    name: "ozyrod1984",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },

     {
    text: `10/10. I'm truly impressed by  work—if you need any Excel assistance, they's the go-to person!`,
    name: "Davey Bacaron",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },
       {
    text: `Thanks a lot for your good work`,
    name: "Kaseb Daco",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },

        {
    text: `Fantastic work and did a wonderful job with requested edits`,
    name: "igurumarketing",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },

      {
    text: `Great working with Excel Guru, qualify product delivered for my project!`,
    name: "mfbron13",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },
        {
    text: `5 ★ Excellent work! I hired this seller to build my Client Progress Dashboard—an automated ITP/ABLLS-style tracking theyet—and they went above and beyond. They: Followed every instruction (and helped me refine my ideas when I changed my mind) Communicated clearly in English and were easy to understand Even created a “How to Use” help theyet that wasn’t in the original scope The result is absolutely perfect. I’ll definitely return for future projects! `,
    name: "leacochran",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },
    {
    text: `Effective & Efficient service creating an automation formula on my theyet with adjustments, which will help me be more effective and at a faster pace. Polite, fast & with an instructional video to assist, will return and work with Devkins again.`,
    name: "richexperia",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },



  


     {
    text: `Exceptional Work – Highly Recommended! I had an amazing experience working with them! They delivered an outstanding Excel project with incredible attention to detail, accuracy, and speed. The quality of work was far beyond my expectations – everything was structured, clear, and tailored perfectly`,
    name: "Ahmad Ghafoor",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ED",
    logoAlt: "Connectify Logo"
  },
  {
    text: `Devkins did an INCREDIBLE job on our data visualization project!  professionalism, attention to detail, and proactive communication truly exceeded my expectations. It's a game-changer for my team and me this season. I've worked with many vendors, but Devkins is SECOND TO NONE. 🙌`,
    name: "Elite Bookkeeper",
    company: "",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "WM",
    logoAlt: "TrackIt Logo"
  },
     {
    text: `Devkins was exceptional in transforming our typeform forms to tally and seamlessly integrating them with Pipedrive, which was not an easy fix and required complicated coding. His professionalism and thorough documentation made the entire process a breeze. With his quick delivery and proactive communication, I'm thrilled to have worked with someone who deeply understands our needs - would gladly collaborate again and it seems like we will be! 👏`,
    name: "Karina Assaf",
    company: " ",
    avatar: "/placeholder.svg?height=40&width=40",
    fallback: "ER",
    logoAlt: "PinPoint Logo"
  },
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
