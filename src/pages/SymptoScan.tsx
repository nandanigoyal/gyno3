
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Calendar, Video } from "lucide-react";

const SymptoScan = () => {
  const [symptoms, setSymptoms] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const commonSymptoms = [
    "Irregular periods",
    "Pelvic pain",
    "Unusual discharge",
    "Heavy bleeding",
    "Missed periods",
    "Painful periods",
    "Bloating",
    "Breast tenderness",
    "Mood changes",
    "Hot flashes",
    "Urinary issues",
    "Pain during intercourse"
  ];

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleAnalyze = () => {
    // Simulate analysis
    console.log("Analyzing symptoms:", [...selectedSymptoms, symptoms]);
  };

  return (
    <div className="min-h-screen bg-[#fefaf6]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#fff7f2] shadow-sm z-50 border-b border-[#fde0e0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-[#fde0e0] rounded-full">
                <span className="text-lg">🔬</span>
              </div>
              <span className="text-xl font-bold text-[#5c3b28] font-['Inter']">SymptoScan</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all text-[#5c3b28] hover:bg-[#fde0e0]"
                onClick={() => window.location.href = '/'}
              >
                <span>🩺</span>
                <span className="hidden sm:inline">GynoConnect</span>
              </Button>
              
              <Button
                variant="ghost"
                className="flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all text-[#5c3b28] hover:bg-[#fde0e0]"
              >
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Find Doctors</span>
              </Button>
              
              <Button
                variant="ghost"
                className="flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all text-[#5c3b28] hover:bg-[#fde0e0]"
              >
                <Video className="w-4 h-4" />
                <span className="hidden sm:inline">Consult Online</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Welcome Section */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fde0e0] rounded-full mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#5c3b28] mb-3 font-['Inter']">
              SymptoScan
            </h1>
            <p className="text-[#5c3b28]/70 text-lg max-w-2xl mx-auto mb-6">
              How are you feeling today?
            </p>
            <p className="text-[#5c3b28]/60 text-sm max-w-xl mx-auto">
              Describe your symptoms and get personalized health insights and doctor recommendations
            </p>
          </div>

          {/* Symptom Input Card */}
          <Card className="bg-[#fff7f2] border-[#fde0e0] mb-6">
            <CardHeader>
              <CardTitle className="text-[#5c3b28] text-center">
                Select or describe your symptoms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quick Symptom Selection */}
              <div>
                <label className="block text-sm font-medium text-[#5c3b28] mb-3">
                  Common symptoms (select all that apply):
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonSymptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`text-xs h-auto py-2 px-3 rounded-full transition-all ${
                        selectedSymptoms.includes(symptom)
                          ? "bg-[#e03131] text-white hover:bg-[#e03131]/90"
                          : "border-[#fde0e0] text-[#5c3b28] hover:bg-[#fde0e0]"
                      }`}
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom Symptom Description */}
              <div>
                <label className="block text-sm font-medium text-[#5c3b28] mb-2">
                  Describe additional symptoms or concerns:
                </label>
                <Textarea
                  placeholder="Please describe what you're experiencing, when it started, severity, and any other relevant details..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="border-[#fde0e0] focus:border-[#e03131] rounded-lg min-h-[100px]"
                />
              </div>

              {/* Analyze Button */}
              <Button
                onClick={handleAnalyze}
                className="w-full bg-[#8b4513] hover:bg-[#8b4513]/90 text-white rounded-full py-3 text-lg font-medium"
                disabled={selectedSymptoms.length === 0 && !symptoms.trim()}
              >
                🔍 Analyze Symptoms
              </Button>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#fff7f2] border-[#fde0e0] text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-[#5c3b28] mb-2">AI-Powered Analysis</h3>
                <p className="text-sm text-[#5c3b28]/70">
                  Advanced algorithms analyze your symptoms and provide insights
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#fff7f2] border-[#fde0e0] text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">👩‍⚕️</div>
                <h3 className="font-semibold text-[#5c3b28] mb-2">Expert Matching</h3>
                <p className="text-sm text-[#5c3b28]/70">
                  Get matched with specialists based on your specific symptoms
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#fff7f2] border-[#fde0e0] text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-semibold text-[#5c3b28] mb-2">Confidential & Secure</h3>
                <p className="text-sm text-[#5c3b28]/70">
                  Your health information is completely private and secure
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="bg-gradient-to-r from-[#fff7f2] to-[#fde0e0] border-[#fde0e0] mt-8">
            <CardContent className="p-6 text-center">
              <div className="text-2xl mb-3">⚠️</div>
              <p className="text-sm text-[#5c3b28]/80">
                <strong>Medical Disclaimer:</strong> SymptoScan is for informational purposes only and should not replace professional medical advice. 
                Always consult with qualified healthcare providers for proper diagnosis and treatment.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SymptoScan;
