import React from 'react'
import {
    Calendar,
    MessageSquare,
    PieChart,
} from "lucide-react";

const Features = () => {
    return (
        <>
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Features</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Everything you need to manage your social presence
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our platform provides all the tools you need to schedule content, analyze performance, and grow your
                                audience.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="rounded-full bg-blue-100 p-3">
                                <Calendar className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold">Content Calendar</h3>
                            <p className="text-center text-gray-500">
                                Plan and schedule your content across multiple platforms with our intuitive drag-and-drop calendar.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="rounded-full bg-blue-100 p-3">
                                <PieChart className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                            <p className="text-center text-gray-500">
                                Track performance metrics and gain insights to optimize your social media strategy.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="rounded-full bg-blue-100 p-3">
                                <MessageSquare className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold">Engagement Tools</h3>
                            <p className="text-center text-gray-500">
                                Respond to comments and messages across all platforms from a single inbox.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features