import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useReward } from "react-rewards";
import { useEffect } from "react";

export default function FinalLocation() {
  const x = { emoji: ["💍", "❤️", "👰"], lifetime: 200, zindex: -2 };
  const { reward } = useReward("rewardId", "emoji", x);
  useEffect(() => {
    reward();
  }, []);

  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-10">
        <div>
          <CardTitle className="text-2xl font-bold">Come Find Me</CardTitle>
          <CardDescription className="text-xs text-muted-foreground"></CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-5">
          You answered correctly! Now, it’s time to continue your journey. Click
          the link below to reveal the location of your next QR code. Use
          What3Words to navigate to the exact spot – switching to satellite view
          can help you find it faster. Scan the code there to unlock your next
          question. Happy hunting!
        </p>
        <span id="rewardId" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() =>
            window.open(
              `https://what3words.com/health.november.identical`,
              "_blank"
            )
          }
          className=" flex items-center justify-center space-x-2"
        >
          <MapPin className="w-4 h-4" />
          <span>View Next Location</span>
        </Button>
      </CardFooter>
    </>
  );
}
