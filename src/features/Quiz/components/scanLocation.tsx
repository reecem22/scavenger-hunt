import { useState, useRef, useEffect } from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scanner } from '@yudiel/react-qr-scanner'
import { Camera, XCircle } from 'lucide-react'

export default function QRCodeScannerCard() {
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const scannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scanning && scannerRef.current) {
      scannerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [scanning])

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
    setScanning(true)
    setError(null)
    setResult(null)
  }

  const stopScanning = () => {
    setScanning(false)
  }

  return (
    <Card className="w-full max-w-[95%] sm:max-w-md mx-auto">
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold">QR Code Scanner</CardTitle>
        <p className="text-sm mt-1">Scan a QR code to proceed to the next clue</p>
      </CardHeader>

      <>
        {!scanning && !result && (
          <div className="flex justify-center">
            <Button onClick={startScanning} className="flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span>Start Scanning</span>
            </Button>
          </div>
        )}

        {scanning && (
          <div ref={scannerRef} className="relative aspect-square">
            <Scanner
               onScan={(result) => console.log(result)}
               onError={(err) => console.log(err)}
              constraints={{ facingMode: 'environment' }}
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
            <p className="text-green-800 font-medium">QR Code Scanned Successfully!</p>
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

      <CardFooter className="flex justify-center p-4">
        {result && (
          <Button onClick={startScanning} className="flex items-center space-x-2">
            <Camera className="w-4 h-4" />
            <span>Scan Another Code</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}