import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, FileText, Clock, CheckCircle, Upload, Send, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QuotePage() {
  const services = [
    { id: "business-cards", label: "Business Cards & Stationery", popular: true },
    { id: "brochures", label: "Brochures & Flyers", popular: true },
    { id: "banners", label: "Banners & Posters", popular: true },
    { id: "corporate-branding", label: "Corporate Branding Package", popular: false },
    { id: "packaging", label: "Packaging Design & Printing", popular: false },
    { id: "large-format", label: "Large Format Printing", popular: false },
    { id: "event-materials", label: "Event Materials", popular: false },
    { id: "digital-printing", label: "Digital Printing Services", popular: false },
    { id: "custom", label: "Custom Project", popular: false },
  ]

  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-orange-500" />,
      title: "Instant Estimate",
      description: "Get a preliminary quote within minutes of submitting your request",
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      title: "Detailed Proposal",
      description: "Receive a comprehensive proposal with specifications and timeline",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "24-Hour Response",
      description: "Our team will contact you within 24 hours with your detailed quote",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">Request a Quote</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Get Your Custom
              <span className="text-orange-400"> Printing Quote</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
              Tell us about your project and receive a detailed, competitive quote tailored to your specific needs and
              budget.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Quote Request Form</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The more details you provide, the more accurate your quote will be. All information is kept
                confidential.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-500" />
                  Project Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+234 (0) 806 761 4781" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" placeholder="Your job title" />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Needed *</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <Checkbox id={service.id} />
                        <Label htmlFor={service.id} className="text-sm cursor-pointer flex-1">
                          {service.label}
                          {service.popular && (
                            <Badge className="ml-2 bg-orange-100 text-orange-800 text-xs">Popular</Badge>
                          )}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">Project Description *</Label>
                      <Textarea
                        id="projectDescription"
                        placeholder="Please describe your project in detail. Include what you need printed, the purpose, target audience, and any specific requirements..."
                        rows={4}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity *</Label>
                        <Input id="quantity" placeholder="e.g., 1000 business cards" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size">Size/Dimensions</Label>
                        <Input id="size" placeholder="e.g., A4, 85mm x 55mm, Custom" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="material">Preferred Material</Label>
                        <select
                          id="material"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select material</option>
                          <option value="standard-paper">Standard Paper (80gsm)</option>
                          <option value="premium-paper">Premium Paper (120gsm)</option>
                          <option value="cardstock">Cardstock (250gsm)</option>
                          <option value="glossy">Glossy Finish</option>
                          <option value="matte">Matte Finish</option>
                          <option value="vinyl">Vinyl</option>
                          <option value="canvas">Canvas</option>
                          <option value="fabric">Fabric</option>
                          <option value="other">Other (specify in description)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="colors">Color Requirements</Label>
                        <select
                          id="colors"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select color option</option>
                          <option value="full-color">Full Color (CMYK)</option>
                          <option value="black-white">Black & White</option>
                          <option value="spot-color">Spot Color</option>
                          <option value="pantone">Pantone Colors</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget and Timeline */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget & Timeline</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select
                        id="budget"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under ₦50,000</option>
                        <option value="50k-100k">₦50,000 - ₦100,000</option>
                        <option value="100k-250k">₦100,000 - ₦250,000</option>
                        <option value="250k-500k">₦250,000 - ₦500,000</option>
                        <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                        <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
                        <option value="over-5m">Over ₦5,000,000</option>
                        <option value="flexible">I'm flexible</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">When do you need this? *</Label>
                      <select
                        id="timeline"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush Order - Additional Fees Apply)</option>
                        <option value="1-week">Within 1 week</option>
                        <option value="2-weeks">Within 2 weeks</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-months">Within 2 months</option>
                        <option value="flexible">I'm flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Files (Optional)</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload your design files, logos, or reference materials</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Supported formats: AI, EPS, PDF, PSD, JPG, PNG (Max 10MB each)
                    </p>
                    <Button variant="outline">Choose Files</Button>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Special Requirements or Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="Any special finishing requirements, delivery instructions, or other important details..."
                        rows={3}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="designServices" />
                      <Label htmlFor="designServices" className="text-sm">
                        I need design services (our team will create the design for you)
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="samples" />
                      <Label htmlFor="samples" className="text-sm">
                        I would like to see samples before final production
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for printing tips and special offers
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">What happens next?</p>
                        <ul className="space-y-1 text-xs">
                          <li>• We'll review your request within 2 hours</li>
                          <li>• Our team will contact you within 24 hours</li>
                          <li>• You'll receive a detailed quote with specifications</li>
                          <li>• We'll schedule a consultation if needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Quote Request
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our terms of service and privacy policy. We'll never share
                    your information with third parties.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">Why Choose Skyprint Global</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Trusted Printing Partner</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">100% satisfaction guarantee on all projects</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                <p className="text-gray-600 text-sm">Quick delivery without compromising quality</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Calculator className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600 text-sm">Best value for money in the market</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <FileText className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Professional guidance throughout your project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
