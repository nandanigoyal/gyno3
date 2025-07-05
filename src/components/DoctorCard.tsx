import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import BookingModal from "./BookingModal";
import CallReceptionModal from "./CallReceptionModal";

interface Doctor {
  id: number;
  name: string;
  rating: number;
  clinic: string;
  address: string;
  timings: string;
  specialization: string;
  image: string;
  phone: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const { toast } = useToast();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<"call" | "video" | "appointment">("appointment");

  const handleCall = () => {
    setIsCallModalOpen(true);
  };

  const handleBook = () => {
    setBookingType("appointment");
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <Card className="bg-[#fff7f2] border-[#fde0e0] hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">{doctor.image}</div>
            <h3 className="font-semibold text-[#5c3b28] text-lg">{doctor.name}</h3>
            <div className="flex items-center justify-center space-x-1 mb-2">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-medium text-[#5c3b28]">{doctor.rating}</span>
            </div>
          </div>

          <div className="space-y-2 mb-4 text-sm text-[#5c3b28]/80">
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>{doctor.clinic}, {doctor.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>⏰</span>
              <span>{doctor.timings}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🧬</span>
              <span className="font-medium text-[#2f9e44]">{doctor.specialization}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              onClick={handleCall}
              variant="outline"
              className="flex-1 border-[#e03131] text-[#e03131] hover:bg-[#e03131] hover:text-white rounded-full"
            >
              📞 Call
            </Button>
            <Button
              onClick={handleBook}
              className="flex-1 bg-[#2f9e44] hover:bg-[#2f9e44]/90 text-white rounded-full"
            >
              📅 Book
            </Button>
          </div>
        </CardContent>
      </Card>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        doctorName={doctor.name}
        bookingType={bookingType}
      />

      <CallReceptionModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </>
  );
};

export default DoctorCard;
