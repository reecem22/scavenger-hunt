import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Camera, QrCode, XCircle } from "lucide-react";

export default function QRCodeScannerCard() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scanning && scannerRef.current) {
      scannerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [scanning]);

  //   const handleScan = (data: string | null) => {
  //     if (data) {
  //       setResult(data)
  //       setScanning(false)
  //     }
  //   }

  //   const handleError = (err: Error) => {
  //     setError(err.message)
  //     setScanning(false)
  //   }

  const startScanning = () => {
    setScanning(true);
    setError(null);
    setResult(null);
  };

  const stopScanning = () => {
    setScanning(false);
  };

  return (
    <div className="w-60 h-60 aspect-square rounded-lg my-3 max-w-[80%] sm:max-w-md mx-auto bg-gray-200 border-2 border-gray-300">
      <>
        {!scanning && !result && (
          <div className="w-60 h-60 flex flex-col items-center justify-center space-y-4">
            <QrCode className="w-32 h-32 text-gray-400" />
            <Button
              onClick={startScanning}
              className="flex items-center space-x-4"
              variant="secondary"
            >
              <Camera className="w-4 h-4" />
              <span>Start Scanning</span>
            </Button>
          </div>
        )}

        {scanning && (
          <div ref={scannerRef} className="relative aspect-square rounded-lg ">
            <Scanner
              onScan={(result) => console.log(result)}
              onError={(err) => console.log(err)}
              constraints={{ facingMode: "environment" }}
              classNames={{
                container: "scanner",
              }}
              formats={["qr_code"]}
            />
            <Button
              onClick={stopScanning}
              variant="secondary"
              size="sm"
              className="absolute top-2 right-2 p-2"
            >
              <XCircle className="w-4 h-4" />
            </Button>
          </div>
        )}

        {result && (
          <div className="mt-4 p-4 bg-green-100 rounded-md">
            <p className="text-green-800 font-medium">
              QR Code Scanned Successfully!
            </p>
            <p className="text-sm mt-2 break-all">{result}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 rounded-md">
            <p className="text-red-800 font-medium">Error scanning QR code:</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        )}
      </>
    </div>
  );
}
