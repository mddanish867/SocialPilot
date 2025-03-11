import {Link} from "react-router-dom"
import {
  BarChart3,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  PieChart,
  Twitter,
  Users2,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">SocialPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-blue-600">
              Log in
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700">Get Started</button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Manage All Your Social Media in One Place
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Schedule posts, analyze performance, and engage with your audience across all platforms from a
                    single dashboard.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-blue-600 hover:bg-blue-700">Start Free Trial</button>
                  <button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    Watch Demo
                  </button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-blue-600" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-blue-600" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border border-blue-100 bg-white shadow-xl">
                  <img
src="/react.svg"
                    width={800}
                    height={600}
                    alt="Dashboard preview"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-y border-blue-100 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium text-gray-500">Trusted by companies worldwide</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                <img
                 src="/react.svg"
                  width={120}
                  height={40}
                  alt="Company logo"
                  className="h-8 w-auto opacity-70 grayscale"
                />
                <img
                  src="/react.svg"
                  width={120}
                  height={40}
                  alt="Company logo"
                  className="h-8 w-auto opacity-70 grayscale"
                />
                <img
                  src="/react.svg"
                  width={120}
                  height={40}
                  alt="Company logo"
                  className="h-8 w-auto opacity-70 grayscale"
                />
                <img
                  src="/react.svg"
                  width={120}
                  height={40}
                  alt="Company logo"
                  className="h-8 w-auto opacity-70 grayscale"
                />
                <img
                  src="/react.svg"
                  width={120}
                  height={40}
                  alt="Company logo"
                  className="h-8 w-auto opacity-70 grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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

        {/* How It Works Section */}
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

        {/* Platforms Section */}
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
                    src="/react.svg"
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

        {/* Pricing Section */}
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

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by businesses worldwide</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about SocialPro.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <img
                      src="/react.svg"
                      width={40}
                      height={40}
                      alt="User avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Sarah Johnson</h4>
                    <p className="text-xs text-gray-500">Marketing Director, TechCorp</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  "SocialPro has transformed how we manage our social media. We've seen a 40% increase in engagement
                  since we started using it."
                </p>
              </div>
              <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <img
                      src="/react.svg"
                      width={40}
                      height={40}
                      alt="User avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Michael Chen</h4>
                    <p className="text-xs text-gray-500">Social Media Manager, Startup Inc</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  "The analytics dashboard gives us insights we never had before. It's like having a social media expert
                  on the team."
                </p>
              </div>
              <div className="flex flex-col rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <img
                      src="/react.svg"
                      width={40}
                      height={40}
                      alt="User avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Emily Rodriguez</h4>
                    <p className="text-xs text-gray-500">Founder, Design Studio</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  "As a small business owner, SocialPro has saved me countless hours. I can now manage all my accounts
                  in just 30 minutes a day."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your social media strategy?
                </h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that use SocialPro to grow their social presence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="bg-white text-blue-600 hover:bg-blue-50">Start Free Trial</button>
                <button variant="outline" className="border-blue-400 text-white hover:bg-blue-700">
                  Schedule a Demo
                </button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-blue-100">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <Users2 className="mr-1 h-4 w-4" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">SocialPro</span>
              </div>
              <p className="text-sm text-gray-500">
                The all-in-one social media management platform for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-500 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} SocialPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

