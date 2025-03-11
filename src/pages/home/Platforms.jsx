import React from 'react';
import { Link } from "react-router-dom";
import {
    ChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";

const Platforms = () => {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Platforms</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Manage all your social networks
                                </h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                                    Connect and manage all your social media accounts from a single dashboard.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                                <div className="flex items-center space-x-2">
                                    <Facebook className="h-5 w-5 text-blue-600" />
                                    <span>Facebook</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Instagram className="h-5 w-5 text-blue-600" />
                                    <span>Instagram</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Twitter className="h-5 w-5 text-blue-600" />
                                    <span>Twitter</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Linkedin className="h-5 w-5 text-blue-600" />
                                    <span>LinkedIn</span>
                                </div>
                            </div>
                            <div className="flex">
                                <Link href="#" className="flex items-center text-blue-600 hover:underline">
                                    <span>View all supported platforms</span>
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border border-blue-100 bg-white shadow-xl">
                                <img
                                    src="/vite.svg"
                                    width={800}
                                    height={600}
                                    alt="Platform integration preview"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Platforms