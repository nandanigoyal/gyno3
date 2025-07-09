
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import DoctorCard from "./DoctorCard";
import { useToast } from "@/hooks/use-toast";

const NearbyDoctors = () => {
  const [location, setLocation] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [doctors] = useState([
    {
      id: 1,
      name: "Dr. Radhika Sen",
      rating: 4.7,
      clinic: "Lotus Women's Clinic",
      address: "Delhi",
      timings: "Mon-Sat, 10AM–6PM",
      specialization: "PCOS Expert",
      image: "👩‍⚕️",
      phone: "+91-9876543210"
    },
    {
      id: 2,
      name: "Dr. Nidhi Kapoor",
      rating: 4.8,
      clinic: "Bliss Women's Hospital",
      address: "Mumbai",
      timings: "Mon-Fri, 9AM–5PM",
      specialization: "Pregnancy Support",
      image: "👩‍⚕️",
      phone: "+91-9876543211"
    },
    {
      id: 3,
      name: "Dr. Anjali Sharma",
      rating: 4.6,
      clinic: "Care Women's Center",
      address: "Bangalore",
      timings: "Tue-Sun, 11AM–7PM",
      specialization: "Infection Specialist",
      image: "👩‍⚕️",
      phone: "+91-9876543212"
    }
  ]);

  const { toast } = useToast();

  const handleUseLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
          setIsLoading(false);
          toast({
            title: "Location found!",
            description: "Showing gynecologists near you",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoading(false);
          toast({
            title: "Location access denied",
            description: "Please allow location access or search manually",
            variant: "destructive",
          });
        }
      );
    } else {
      setIsLoading(false);
      toast({
        title: "Geolocation not supported",
        description: "Please search manually",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Location Section */}
      <Card className="bg-[#fff7f2] border-[#fde0e0]">
        <CardHeader>
          <CardTitle className="text-[#5c3b28] flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>Find Gynecologists Nearby</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleUseLocation}
              disabled={isLoading}
              className="bg-[#e03131] hover:bg-[#e03131]/90 text-white rounded-full flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>{isLoading ? "Finding location..." : "📍 Use My Location"}</span>
            </Button>
            {location && (
              <div className="text-sm text-[#5c3b28]/70 flex items-center">
                📍 Current location: {location}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Doctors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* Map Placeholder */}
      <Card className="bg-[#fff7f2] border-[#fde0e0]">
        <CardContent className="p-6">
          <div className="bg-[#fde0e0] rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-[#5c3b28]/70">
              <span className="text-4xl mb-2 block">🗺️</span>
              <p>Interactive Map View</p>
              <small>Showing clinic locations nearby</small>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NearbyDoctors;
