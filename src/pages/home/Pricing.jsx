import React from 'react';
import {
    CheckCircle,
} from "lucide-react";

const Pricing = () => {
    return (
        <>
            <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Pricing</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Choose the plan that's right for your business.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                        {/* Starter Plan */}
                        <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                            <div className="mb-4">
                                <h3 className="text-lg font-bold">Starter</h3>
                                <p className="text-sm text-gray-500">Perfect for individuals and small businesses</p>
                            </div>
                            <div className="mb-4 flex items-baseline">
                                <span className="text-3xl font-bold">$29</span>
                                <span className="ml-1 text-sm text-gray-500">/month</span>
                            </div>
                            <ul className="mb-6 space-y-2 text-sm">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>5 social profiles</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>30 scheduled posts per profile</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Basic analytics</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>1 user</span>
                                </li>
                            </ul>
                            <button className="mt-auto bg-blue-600 hover:bg-blue-700">Get Started</button>
                        </div>

                        {/* Professional Plan */}
                        <div className="flex flex-col rounded-lg border-2 border-blue-600 bg-white p-6 shadow-md">
                            <div className="mb-4">
                                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                                    Most Popular
                                </div>
                                <h3 className="mt-2 text-lg font-bold">Professional</h3>
                                <p className="text-sm text-gray-500">Ideal for growing businesses</p>
                            </div>
                            <div className="mb-4 flex items-baseline">
                                <span className="text-3xl font-bold">$79</span>
                                <span className="ml-1 text-sm text-gray-500">/month</span>
                            </div>
                            <ul className="mb-6 space-y-2 text-sm">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>15 social profiles</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Unlimited scheduled posts</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Advanced analytics</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>3 users</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Content suggestions</span>
                                </li>
                            </ul>
                            <button className="mt-auto bg-blue-600 hover:bg-blue-700">Get Started</button>
                        </div>

                        {/* Business Plan */}
                        <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                            <div className="mb-4">
                                <h3 className="text-lg font-bold">Business</h3>
                                <p className="text-sm text-gray-500">For larger teams and organizations</p>
                            </div>
                            <div className="mb-4 flex items-baseline">
                                <span className="text-3xl font-bold">$199</span>
                                <span className="ml-1 text-sm text-gray-500">/month</span>
                            </div>
                            <ul className="mb-6 space-y-2 text-sm">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Unlimited social profiles</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Unlimited scheduled posts</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Premium analytics</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>10 users</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>AI content generation</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                                    <span>Priority support</span>
                                </li>
                            </ul>
                            <button className="mt-auto bg-blue-600 hover:bg-blue-700">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing