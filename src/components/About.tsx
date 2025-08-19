// Template-enhanced component
// Generated: 2025-08-19T16:49:00.321Z
// Section: about
// Category: about
// Template ID: about-c001

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Client-Centric Approach",
      description: "At Acme Consulting, we put our clients' needs at the forefront, tailoring our services to deliver tangible, impactful results."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Our team of experts is constantly exploring new strategies and technologies to help our clients stay ahead of the curve."
    },
    {
      icon: Heart,
      title: "Trusted Partnerships",
      description: "We build long-lasting relationships with our clients, working closely to understand their unique challenges and goals."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With a presence in over 25 countries, Acme Consulting has the expertise and resources to support businesses of all sizes, anywhere in the world."
    }
  ]

  const stats = [
    { value: "2005", label: "Founded", icon: Award },
    { value: "1000+", label: "Satisfied Clients", icon: Users },
    { value: "99.9%", label: "Client Retention", icon: TrendingUp },
    { value: "25+", label: "Countries Served", icon: Globe }
  ]

  const team = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      image: "JD",
      bio: "Seasoned business leader with over 20 years of experience in strategic consulting and organizational transformation."
    },
    {
      name: "Jane Smith",
      role: "Chief Strategy Officer",
      image: "JS",
      bio: "Former McKinsey consultant, known for her innovative approach to business strategy and market analysis."
    },
    {
      name: "Michael Johnson",
      role: "Head of Operations",
      image: "MJ",
      bio: "Operational excellence expert, driving efficiency and productivity improvements for our clients."
    },
    {
      name: "Emily Chen",
      role: "Chief Technology Officer",
      image: "EC",
      bio: "Visionary technologist, leveraging the latest digital tools and platforms to enable business transformation."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Acme Consulting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Businesses,
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Driving Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acme Consulting is a leading corporate consulting firm that empowers organizations to achieve their strategic goals and unlock their full potential.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2005, Acme Consulting was born out of a vision to revolutionize the way businesses approach strategic planning, operational optimization, and digital transformation.
              </p>
              <p>
                Frustrated by the complex, one-size-fits-all solutions offered by traditional consulting firms, our co-founders set out to build a new kind of advisory service - one that is tailored, agile, and laser-focused on delivering tangible, measurable results.
              </p>
              <p>
                Today, Acme Consulting has grown into a global powerhouse, serving over 1,000 clients in more than 25 countries. Our team of industry experts, strategists, and technologists work tirelessly to help our clients navigate the ever-evolving business landscape and achieve sustainable growth.
              </p>
            </div>
            <Button className="group">
              Learn More About Our Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Acme Consulting has been an invaluable partner in our journey to transform our business and stay ahead of the competition."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- John Doe, CEO, TechInnovations Inc.</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our actions and shape our approach to client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h3>
            <p className="text-muted-foreground">
              The experienced professionals driving Acme Consulting's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Acme Consulting has been an invaluable partner in our journey to transform our business and stay ahead of the competition. Their strategic insights and innovative solutions have been instrumental in driving our success."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">CEO, TechInnovations Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}