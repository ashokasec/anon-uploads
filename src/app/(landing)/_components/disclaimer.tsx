import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import RedirectButton from "./redirect-button";
import { bricolage } from "@/lib/fonts";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Disclaimer = ({
  isDisclaimerVisible,
  setIsDisclaimerVisible,
}: {
  isDisclaimerVisible: boolean;
  setIsDisclaimerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const consent = Cookies.get("disclaimerAccepted");
    if (!consent || consent === "false") {
      setIsDisclaimerVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("disclaimerAccepted", "true", { expires: 30 }); // Cookie expires in 30 days
    setIsDisclaimerVisible(false);
  };

  if (!isDisclaimerVisible) return null; // Don't render if disclaimer is not visible

  return (
    <AlertDialog open={isDisclaimerVisible}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle style={bricolage.style}>
            Disclaimer: Enter at your own risk
          </AlertDialogTitle>
        </AlertDialogHeader>
        <p className="text-gray-800 text-sm">
          I&apos;m just a good boy running this site. What gets uploaded here is
          beyond my control.
        </p>
        <p className="text-gray-800 text-sm">
          This platform has very minimal restrictions. Content may be chaotic,
          edgy, or straight-up NSFW. If you&apos;re under 18, this isn&apos;t
          the place for you.
        </p>
        <p className="text-[13px] text-gray-400">
          By clicking below, you confirm you&apos;re 18+ and understand the
          risks.
        </p>
        <AlertDialogFooter>
          <RedirectButton />
          <AlertDialogCancel
            className="bg-gray-900 hover:bg-gray-700 !text-white"
            onClick={handleAccept} // Set cookie on accept
          >
            Continue
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Disclaimer;
