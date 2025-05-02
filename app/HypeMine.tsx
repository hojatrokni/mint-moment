import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function HypeMine() {
  const [postUrl, setPostUrl] = useState("");
  const [minted, setMinted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setMinted(true);
    } catch (error) {
      console.error("Minting failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="flex flex-col gap-4 p-4">
          <h1 className="text-xl font-bold">HypeMine 🚀</h1>
          <p className="text-sm text-gray-500">
            Paste a viral post URL from Farcaster or X and mint it with your Content Coin.
          </p>
          <Input
            placeholder="https://x.com/... or https://warpcast.com/..."
            value={postUrl}
            onChange={(e) => setPostUrl(e.target.value)}
          />
          <Button disabled={!postUrl || loading} onClick={handleMint}>
            {loading ? "Minting..." : "Mint This Moment"}
          </Button>
          {minted && (
            <p className="text-green-600 text-sm">✅ Successfully minted with your Content Coin!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
