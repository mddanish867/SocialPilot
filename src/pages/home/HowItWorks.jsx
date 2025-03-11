import React from 'react'

const HowItWorks = () => {
    return (
        <>
            <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">How It Works</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Simple steps to social media success
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Get started in minutes and see results in days, not months.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="relative flex flex-col items-center space-y-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">1</div>
                            <h3 className="text-xl font-bold">Connect Your Accounts</h3>
                            <p className="text-center text-gray-500">
                                Link your social media accounts to our platform with just a few clicks.
                            </p>
                            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
                        </div>
                        <div className="relative flex flex-col items-center space-y-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">2</div>
                            <h3 className="text-xl font-bold">Plan Your Content</h3>
                            <p className="text-center text-gray-500">
                                Create and schedule posts using our content calendar and post editor.
                            </p>
                            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">3</div>
                            <h3 className="text-xl font-bold">Analyze & Optimize</h3>
                            <p className="text-center text-gray-500">
                                Track performance and adjust your strategy based on real-time analytics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks