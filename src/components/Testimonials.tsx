
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-darkgray/30 binary-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="terminal">User_Intelligence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reports from operatives who've ventured through our digital underground. Their experiences might enlighten your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="This system provided access to resources I couldn't find anywhere else. The encryption protocols are beyond anything commercially available."
            author="Anonymous_User#429"
            role="Cybersecurity Researcher"
          />
          <TestimonialCard 
            quote="I've been navigating digital shadows for years, but this platform revealed layers I didn't know existed. Proceed with caution and respect."
            author="DarkNode_Explorer"
            role="Data Extraction Specialist"
          />
          <TestimonialCard 
            quote="The neural interface capabilities exceeded my expectations. I was able to process complex data structures with unprecedented efficiency."
            author="BinaryWhisperer"
            role="Algorithm Architect"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <Card className="bg-black/70 border-neon/30">
    <CardHeader>
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-neon mr-1">★</span>
        ))}
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300 mb-6">"{quote}"</p>
    </CardContent>
    <CardFooter className="flex flex-col items-start">
      <p className="text-neon font-semibold">{author}</p>
      <p className="text-gray-400 text-sm">{role}</p>
    </CardFooter>
  </Card>
);

export default Testimonials;
