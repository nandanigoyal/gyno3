
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-pink-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg">
                <span className="text-xl text-white">🔬</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                SymptoScan
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Welcome Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">💝</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              How are you feeling today?
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
              Your health matters. Share your symptoms with our AI-powered analysis system.
            </p>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Get personalized insights and connect with the right healthcare professionals
            </p>
          </div>

          {/* Symptom Input Card */}
          <Card className="bg-white/70 backdrop-blur-sm border-pink-200 shadow-xl mb-8">
            <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-gray-800 text-xl">
                Tell us about your symptoms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              {/* Quick Symptom Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Quick selection (choose all that apply):
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {commonSymptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`text-xs h-auto py-3 px-4 rounded-full transition-all shadow-sm ${
                        selectedSymptoms.includes(symptom)
                          ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-md"
                          : "border-pink-300 text-gray-700 hover:bg-pink-50 hover:border-pink-400"
                      }`}
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom Symptom Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Describe your symptoms in detail:
                </label>
                <Textarea
                  placeholder="Please share when symptoms started, their severity, frequency, and any other details that might be helpful for understanding your condition..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="border-pink-300 focus:border-pink-500 focus:ring-pink-500 rounded-xl min-h-[120px] bg-white/80"
                />
              </div>

              {/* Analyze Button */}
              <Button
                onClick={handleAnalyze}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full py-4 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                disabled={selectedSymptoms.length === 0 && !symptoms.trim()}
              >
                <span className="mr-2">🔍</span>
                Analyze My Symptoms
              </Button>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/60 backdrop-blur-sm border-pink-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Smart Analysis</h3>
                <p className="text-sm text-gray-600">
                  AI-powered symptom analysis with medical knowledge base
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-pink-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">👩‍⚕️</div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Expert Care</h3>
                <p className="text-sm text-gray-600">
                  Connect with specialized healthcare professionals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-pink-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Privacy First</h3>
                <p className="text-sm text-gray-600">
                  Your health data is encrypted and completely confidential
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Medical Disclaimer */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">⚠️</div>
              <h3 className="font-bold text-amber-800 mb-3">Important Medical Notice</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                <strong>This tool is for informational purposes only.</strong> SymptoScan does not provide medical diagnosis, treatment, or professional medical advice. 
                Always consult with qualified healthcare providers for proper medical evaluation and care. In case of emergency, contact your local emergency services immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SymptoScan;
