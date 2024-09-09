import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Recycle, Zap, DollarSign, Globe } from 'lucide-react';

const HiBinProjectPage = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const features = [
    { icon: <Recycle className="h-6 w-6" />, title: "Compact Design", description: "Smaller and cheaper than existing recycling machines" },
    { icon: <Zap className="h-6 w-6" />, title: "Smart Technology", description: "QR code display and can recognition camera" },
    { icon: <DollarSign className="h-6 w-6" />, title: "User Incentives", description: "Immediate credit for recycled cans" },
    { icon: <Globe className="h-6 w-6" />, title: "Eco-Friendly", description: "Energy-efficient and promotes recycling" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">HiBin Project</h1>
          <p className="text-xl text-gray-600">Revolutionizing Bottle and Can Recycling</p>
        </header>

        <Tabs defaultValue="summary" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="summary" onClick={() => setActiveTab("summary")}>Summary</TabsTrigger>
            <TabsTrigger value="problem" onClick={() => setActiveTab("problem")}>Problem</TabsTrigger>
            <TabsTrigger value="solution" onClick={() => setActiveTab("solution")}>Solution</TabsTrigger>
            <TabsTrigger value="benefits" onClick={() => setActiveTab("benefits")}>Benefits</TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Executive Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The HiBin project aims to address the issue of drink bottle and can recycling by developing a compact, cost-effective, and energy-efficient device. This innovative recycling bin simplifies collection and incentivizes users with immediate credits for returned cans.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="problem" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Problem Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Current recycling methods in NL are insufficient, with expensive machines that are difficult to scale. There's no efficient way to remove the "deposit" layer from bottles and cans, requiring extra waste management efforts.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="solution" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>HiBin Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The HiBin overcomes current recycling drawbacks with its compact design, smart technology, manual shredder, and user incentives. It's designed for easy placement in high-traffic areas and seamless integration with regular waste management systems.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="benefits" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Increased accessibility and convenience</li>
                  <li>Enhanced user engagement through interactive process</li>
                  <li>Improved environmental impact</li>
                  <li>Cost-effective implementation</li>
                  <li>Integration with existing waste management systems</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {feature.icon}
                    <span className="ml-2">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to Revolutionize Recycling?</h2>
          <Button size="lg">
            Learn More
          </Button>
        </section>
      </div>
    </div>
  );
};

export default HiBinProjectPage;
