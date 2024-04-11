import dynamic from "next/dynamic"
import React from "react"

import EmptyClipBoard from "../assets/empty-clipboard.json"

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // Disable server-side rendering for this component
})

const Empty = () => <Lottie animationData={EmptyClipBoard} loop={true} width={80} height={80} />

export default Empty
