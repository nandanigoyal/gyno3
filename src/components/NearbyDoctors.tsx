import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import DoctorCard from "./DoctorCard";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";
const NearbyDoctors = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const { toast } = useToast();

  const handleUseLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          toast({
            title: "Location found!",
            description: "Showing gynecologists near you",
          });

          try {
            const response = await axios.get("http://localhost:8080/gynecologists", {
              params: {
                lat: latitude,
                lng: longitude,
                radius_km: 100,
              },
            });

            setDoctors(response.data);
          } catch (error) {
  console.error("API error:", error); // 🛠️ Log the error details
  toast({
    title: "Error fetching doctors",
    description: error.message || "Please try again later",
    variant: "destructive",
  });
}
 finally {
            setIsLoading(false);
          }
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
                📍 Current location: {location.lat.toFixed(2)}, {location.lng.toFixed(2)}
              </div>
            )}
          </div>
        </CardContent>
      </Card>


      {/* Doctors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor: any) => (
          <DoctorCard
            key={doctor.id}
            doctor={{
              id: doctor.id,
              name: doctor.name,
              rating: doctor.rating,
              clinic: doctor.clinic,
              address: doctor.city,
              timings: doctor.timing,
              specialization: doctor.speciality,
              image: "👩‍⚕️", // placeholder emoji
              phone: "+91-9876543210", // static phone (or map via backend)
            }}
          />
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
