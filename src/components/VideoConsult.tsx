import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import BookingModal from "./BookingModal";

const VideoConsult = () => {
  const [symptoms, setSymptoms] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<"call" | "video" | "appointment">("video");
  const { toast } = useToast();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded`,
      });
    }
  };

  const handleVideoCall = () => {
    setBookingType("video");
    setIsBookingModalOpen(true);
  };

  const handleSchedule = () => {
    setBookingType("video");
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Video Consultation Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#fff7f2] border-[#fde0e0]">
            <CardHeader>
              <CardTitle className="text-[#5c3b28] flex items-center space-x-2">
                <span>📹</span>
                <span>Instant Video Call</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#5c3b28]/80 text-sm">
                Connect with an available gynecologist right now for immediate consultation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-[#5c3b28]/70">
                  <span>⏱️</span>
                  <span>Average wait time: 5-10 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#5c3b28]/70">
                  <span>💰</span>
                  <span>₹500 for 15-minute consultation</span>
                </div>
              </div>
              <Button
                onClick={handleVideoCall}
                className="w-full bg-[#e03131] hover:bg-[#e03131]/90 text-white rounded-full"
              >
                📹 Start Video Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#fff7f2] border-[#fde0e0]">
            <CardHeader>
              <CardTitle className="text-[#5c3b28] flex items-center space-x-2">
                <span>📅</span>
                <span>Schedule Consultation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#5c3b28]/80 text-sm">
                Book a consultation slot at your convenience with detailed preparation time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-[#5c3b28]/70">
                  <span>📋</span>
                  <span>30-minute detailed consultation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#5c3b28]/70">
                  <span>💰</span>
                  <span>₹800 for scheduled appointment</span>
                </div>
              </div>
              <Button
                onClick={handleSchedule}
                variant="outline"
                className="w-full border-[#2f9e44] text-[#2f9e44] hover:bg-[#2f9e44] hover:text-white rounded-full"
              >
                📅 Schedule Appointment
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Consultation Preparation */}
        <Card className="bg-[#fff7f2] border-[#fde0e0]">
          <CardHeader>
            <CardTitle className="text-[#5c3b28] flex items-center space-x-2">
              <span>📝</span>
              <span>Prepare for Your Consultation</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#5c3b28] mb-2">
                Describe your symptoms or concerns
              </label>
              <Textarea
                placeholder="Please describe what you're experiencing, when it started, and any other relevant details..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="border-[#fde0e0] focus:border-[#e03131] rounded-lg"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5c3b28] mb-2">
                Upload medical reports (optional)
              </label>
              <div className="border-2 border-dashed border-[#fde0e0] rounded-lg p-6 text-center">
                <Input
                  type="file"
                  onChange={handleUpload}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-4xl mb-2">📤</div>
                  <p className="text-[#5c3b28]/70 text-sm">
                    {selectedFile ? selectedFile.name : "Click to upload reports (PDF, JPG, PNG)"}
                  </p>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface Preview */}
        <Card className="bg-[#fff7f2] border-[#fde0e0]">
          <CardHeader>
            <CardTitle className="text-[#5c3b28] flex items-center space-x-2">
              <span>💬</span>
              <span>Chat Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-4">
              <div className="bg-[#fde0e0] rounded-lg p-3 max-w-xs">
                <p className="text-sm text-[#5c3b28]">
                  Hi! I'm here to help you prepare for your consultation. What brings you here today?
                </p>
              </div>
              <div className="bg-[#e03131] text-white rounded-lg p-3 max-w-xs ml-auto">
                <p className="text-sm">
                  I've been having irregular periods and would like to discuss PCOS.
                </p>
              </div>
              <div className="bg-[#fde0e0] rounded-lg p-3 max-w-xs">
                <p className="text-sm text-[#5c3b28]">
                  I understand. I'll connect you with our PCOS specialist. Have you had any recent tests done?
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Input
                placeholder="Type your message..."
                className="flex-1 border-[#fde0e0] focus:border-[#e03131] rounded-full"
              />
              <Button className="bg-[#e03131] hover:bg-[#e03131]/90 text-white rounded-full px-6">
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        doctorName="Video Consultation Specialist"
        bookingType={bookingType}
      />
    </>
  );
};

export default VideoConsult;
